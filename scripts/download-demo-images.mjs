/**
 * Downloads demo destination photographs from Wikimedia Commons.
 * Images are stored locally so the site does not hotlink third-party URLs.
 */
import { access, mkdir, writeFile } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";

const USER_AGENT =
  "KeralaTrailsDemo/1.0 (local travel website demonstration; educational sample)";

const jobs = [
  { file: "hero.jpg", queries: ["Munnar tea plantations Kerala hills landscape"] },
  { file: "destinations/munnar.jpg", queries: ["Munnar tea estates Kerala"] },
  { file: "destinations/wayanad.jpg", queries: ["Wayanad Kerala waterfall", "Chembra Peak Wayanad"] },
  { file: "destinations/alleppey.jpg", queries: ["Alleppey houseboat Kerala backwaters", "Alappuzha houseboat"] },
  { file: "destinations/thekkady.jpg", queries: ["Thekkady Periyar lake Kerala boat"] },
  { file: "destinations/vagamon.jpg", queries: ["Vagamon Kerala meadows", "Vagamon hills Kerala"] },
  { file: "destinations/kochi.jpg", queries: ["Fort Kochi Chinese fishing nets"] },
  { file: "destinations/varkala.jpg", queries: ["Varkala beach cliff Kerala"] },
  { file: "destinations/kovalam.jpg", queries: ["Kovalam beach Kerala lighthouse"] },
  { file: "destinations/goa.jpg", queries: ["Palolem beach Goa", "Goa beach palm India"] },
  { file: "destinations/manali.jpg", queries: ["Manali valley Himachal mountains", "Solang Valley Manali"] },
  { file: "destinations/jaipur.jpg", queries: ["Hawa Mahal Jaipur", "Amber Fort Jaipur"] },
  { file: "destinations/ooty.jpg", queries: ["Ooty tea gardens Nilgiris", "Ooty lake Tamil Nadu"] },
  { file: "destinations/kodaikanal.jpg", queries: ["Kodaikanal lake Tamil Nadu", "Kodaikanal hills"] },
  { file: "destinations/coorg.jpg", queries: ["Coorg coffee plantations Karnataka", "Madikeri Coorg landscape"] },
  { file: "experiences/tea.jpg", queries: ["tea pickers Munnar Kerala", "Kerala tea plantation rows"] },
  { file: "experiences/houseboat.jpg", queries: ["Kerala houseboat backwaters sunset", "kettuvallam Alappuzha"] },
  { file: "experiences/hills.jpg", queries: ["Western Ghats mist Kerala hills", "Munnar mist mountains"] },
  { file: "experiences/beach.jpg", queries: ["Varkala beach Kerala Arabian sea", "Kovalam lighthouse beach"] },
  { file: "experiences/wildlife.jpg", queries: ["Periyar tiger reserve Kerala", "elephant Periyar Kerala"] },
  { file: "experiences/culture.jpg", queries: ["Kathakali Kerala performance", "Kerala temple festival theyyam"] },
];

const root = path.resolve("public/images");

function strip(html = "") {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

async function search(query) {
  const url = new URL("https://commons.wikimedia.org/w/api.php");
  url.searchParams.set("action", "query");
  url.searchParams.set("format", "json");
  url.searchParams.set("generator", "search");
  url.searchParams.set("gsrsearch", `filetype:bitmap ${query}`);
  url.searchParams.set("gsrnamespace", "6");
  url.searchParams.set("gsrlimit", "8");
  url.searchParams.set("prop", "imageinfo");
  url.searchParams.set("iiprop", "url|mime|size|extmetadata");
  url.searchParams.set("iiurlwidth", "1600");

  const response = await fetch(url, {
    headers: {
      "User-Agent": USER_AGENT,
      "Api-User-Agent": USER_AGENT,
    },
  });

  if (response.status === 429) {
    return { rateLimited: true };
  }
  if (!response.ok) {
    throw new Error(`Commons search failed (${response.status}) for ${query}`);
  }

  const data = await response.json();
  const pages = Object.values(data.query?.pages ?? {});
  const candidates = [];

  for (const page of pages) {
    const info = page.imageinfo?.[0];
    if (!info?.thumburl) continue;
    if (!String(info.mime).includes("jpeg")) continue;
    const title = String(page.title ?? "");
    const lowered = title.toLowerCase();
    if (/(icon|logo|map|diagram|flag|svg|coat of arms|museum|machine|roller|processing)/.test(lowered)) continue;
    const width = info.thumbwidth ?? 0;
    const height = info.thumbheight ?? 0;
    if (width < 900 || height < 500) continue;
    candidates.push({
      title,
      src: info.thumburl,
      page: info.descriptionurl,
      width,
      height,
      license: strip(info.extmetadata?.LicenseShortName?.value),
      artist: strip(info.extmetadata?.Artist?.value),
      landscape: width / height,
    });
  }

  candidates.sort((a, b) => b.landscape - a.landscape);
  return candidates[0] ?? null;
}

async function download(src) {
  const response = await fetch(src, {
    headers: { "User-Agent": USER_AGENT },
  });
  if (!response.ok) {
    throw new Error(`Download failed (${response.status}) ${src}`);
  }
  const bytes = Buffer.from(await response.arrayBuffer());
  if (bytes.length < 20_000 || bytes[0] !== 0xff || bytes[1] !== 0xd8) {
    throw new Error(`Downloaded file is not a usable JPEG (${src})`);
  }
  return bytes;
}

await mkdir(path.join(root, "destinations"), { recursive: true });
await mkdir(path.join(root, "experiences"), { recursive: true });
await mkdir(path.join(root, "branding"), { recursive: true });

const credits = [
  "Demo photographs for the Kerala Trails sample website.",
  "Replace these files before launch. Sources are Wikimedia Commons.",
  "",
];
const used = new Set();

async function exists(file) {
  try {
    await access(file, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

for (const job of jobs) {
  const destination = path.join(root, job.file);
  if (await exists(destination)) {
    console.log(`skip ${job.file}`);
    credits.push(`${job.file}\nAlready downloaded in an earlier pass.\n`);
    continue;
  }

  let chosen = null;
  for (const query of job.queries) {
    let result = null;
    for (let attempt = 0; attempt < 4; attempt += 1) {
      result = await search(query);
      if (result?.rateLimited) {
        const wait = 4000 * (attempt + 1);
        console.log(`rate limited, waiting ${wait}ms`);
        await new Promise((resolve) => setTimeout(resolve, wait));
        result = null;
        continue;
      }
      break;
    }
    if (result?.src && !used.has(result.src)) {
      chosen = result;
      break;
    }
    await new Promise((resolve) => setTimeout(resolve, 1200));
  }

  if (!chosen?.src) {
    throw new Error(`No image found for ${job.file}`);
  }

  const bytes = await download(chosen.src);
  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, bytes);
  used.add(chosen.src);
  credits.push(
    [
      job.file,
      `Title: ${chosen.title}`,
      `Page: ${chosen.page ?? ""}`,
      `License: ${chosen.license || "See Commons page"}`,
      `Artist: ${chosen.artist || "See Commons page"}`,
      "",
    ].join("\n"),
  );
  console.log(`saved ${job.file} (${bytes.length} bytes) <- ${chosen.title}`);
  await new Promise((resolve) => setTimeout(resolve, 1500));
}

await writeFile(path.join(root, "CREDITS.txt"), credits.join("\n"), "utf8");
console.log("done");
