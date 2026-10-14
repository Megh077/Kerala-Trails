import type { Destination } from "@/types/travel";

export const destinations: Destination[] = [
  {
    slug: "munnar",
    name: "Munnar",
    region: "kerala",
    state: "Kerala",
    tagline: "Tea hills and cool mornings",
    summary:
      "A hill station of tea gardens, viewpoints, and quiet walks above the Western Ghats.",
    overview:
      "Munnar sits among the tea-covered hills of Idukki. Visitors usually come for plantation views, short drives to lookout points, and a slower pace than the coast. A typical plan includes a tea museum visit, time around Mattupetty, and pauses for the landscape rather than a rushed checklist.",
    bestTimeToVisit:
      "September to March is a commonly preferred window, with cooler days and clearer hill views. April and May are warmer. The monsoon months turn the hills green and can bring heavy rain and mist.",
    image: "/images/destinations/munnar.jpg",
    imageAlt: "Tea plantations covering the hills around Munnar in Kerala",
    attractions: [
      "Tea gardens and tea museum",
      "Mattupetty Dam and lake",
      "Echo Point",
      "Kundala Lake",
      "Eravikulam National Park, when open to visitors",
    ],
    experiences: [
      "A guided walk through a tea estate",
      "Sunrise or late-afternoon viewpoints",
      "A relaxed stay with time for the town market",
    ],
  },
  {
    slug: "wayanad",
    name: "Wayanad",
    region: "kerala",
    state: "Kerala",
    tagline: "Forests, caves, and viewpoints",
    summary:
      "A green district of wildlife sanctuaries, caves, waterfalls, and plantation country.",
    overview:
      "Wayanad lies in the north of Kerala, along the edge of the Western Ghats. The area is known for forest drives, Edakkal Caves, lakes, and estates. It suits travellers who want a mix of short outdoor walks and quiet stays rather than a beach holiday.",
    bestTimeToVisit:
      "October to May is the usual recommendation for easier access to viewpoints and caves. Waterfalls are fuller during and just after the monsoon, though some forest roads can be slower then.",
    image: "/images/destinations/wayanad.jpg",
    imageAlt: "Forested hills and greenery in Wayanad, Kerala",
    attractions: [
      "Edakkal Caves",
      "Pookode Lake",
      "Soochipara and other waterfalls, when accessible",
      "Wayanad Wildlife Sanctuary",
      "Chembra Peak, subject to permits and weather",
    ],
    experiences: [
      "A forest or plantation drive",
      "A cave or waterfall visit planned around opening times",
      "An unhurried evening in a hillside stay",
    ],
  },
  {
    slug: "alleppey",
    name: "Alleppey",
    region: "kerala",
    state: "Kerala",
    tagline: "Backwaters and houseboats",
    summary:
      "Canals, villages, and houseboat journeys across the Vembanad backwaters.",
    overview:
      "Alleppey, also known as Alappuzha, is the best-known starting point for Kerala houseboat trips. A typical stay moves through canals lined with homes, paddy, and coconut palms. Time on the water is the main event; the town itself is a practical base for boarding and departure.",
    bestTimeToVisit:
      "November to February is a popular season for calmer, drier weather. The monsoon is visually dramatic on the backwaters, with a higher chance of rain affecting time spent on deck.",
    image: "/images/destinations/alleppey.jpg",
    imageAlt: "Houseboats on the backwaters of Alleppey in Kerala",
    attractions: [
      "Vembanad Lake backwaters",
      "Alappuzha beach and the pier area",
      "Canal villages",
      "Ambalappuzha Sri Krishna Temple",
    ],
    experiences: [
      "A private or shared houseboat cruise",
      "A village canoe ride",
      "A Kerala meal on board or in town",
    ],
  },
  {
    slug: "thekkady",
    name: "Thekkady",
    region: "kerala",
    state: "Kerala",
    tagline: "Periyar wildlife and spice country",
    summary:
      "Boat rides on Periyar Lake, spice gardens, and stays on the edge of the sanctuary.",
    overview:
      "Thekkady is the town beside Periyar Tiger Reserve. Most visits centre on a boat ride across the lake, a walk through a spice plantation, and optional cultural programmes in the evening. Wildlife sightings depend on the day and are never promised.",
    bestTimeToVisit:
      "October to March is commonly chosen for more comfortable weather. The reserve can be visited through the year, with greener scenery in the monsoon and a chance of rain.",
    image: "/images/destinations/thekkady.jpg",
    imageAlt: "Boat on the lake at Thekkady in Kerala",
    attractions: [
      "Periyar Lake boat landing",
      "Spice plantations",
      "Chellarkovil and nearby viewpoints",
      "Evening cultural programmes in town",
    ],
    experiences: [
      "A Periyar boat ride, subject to park schedules",
      "A spice garden walk",
      "Optional nature walk when the park offers one",
    ],
  },
  {
    slug: "vagamon",
    name: "Vagamon",
    region: "kerala",
    state: "Kerala",
    tagline: "Meadows for a quiet weekend",
    summary:
      "Rolling grasslands, pine patches, and a small hill town suited to a short break.",
    overview:
      "Vagamon is a quieter hill destination in Idukki, often chosen for a weekend away from busier resorts. The meadows, pine forest, and short viewpoints are the usual draws. It works well when the plan leaves room to wander rather than fill every hour.",
    bestTimeToVisit:
      "September to March generally offers clearer skies and cooler evenings. Monsoon visits are lush and can be misty, with slippery paths in places.",
    image: "/images/destinations/vagamon.jpg",
    imageAlt: "Green meadows and hills at Vagamon in Kerala",
    attractions: [
      "Vagamon meadows",
      "Pine forest",
      "Ulppoonni and nearby viewpoints",
      "Local tea and village roads",
    ],
    experiences: [
      "A slow meadow walk",
      "A short scenic drive",
      "Optional adventure activities arranged locally, when available",
    ],
  },
  {
    slug: "kochi",
    name: "Kochi",
    region: "kerala",
    state: "Kerala",
    tagline: "Harbour lanes and old Fort Kochi",
    summary:
      "A coastal city of Chinese fishing nets, colonial lanes, and easy connections onward.",
    overview:
      "Kochi is Kerala’s historic port city and a practical place to begin or end a wider trip. Fort Kochi, Mattancherry, and the harbour front are the parts most visitors walk. The city also connects well with Alleppey and the highlands.",
    bestTimeToVisit:
      "October to March is the most comfortable stretch for walking the fort. The rest of the year is warmer and more humid, with monsoon showers from about June.",
    image: "/images/destinations/kochi.jpg",
    imageAlt: "Chinese fishing nets along the shore at Fort Kochi",
    imagePosition: "72% center",
    attractions: [
      "Chinese fishing nets",
      "Fort Kochi beach and lanes",
      "Mattancherry Palace",
      "Jew Town and the spice market area",
      "St. Francis Church",
    ],
    experiences: [
      "A walking tour of Fort Kochi",
      "A harbour sunset",
      "An optional Kathakali or music performance",
    ],
  },
  {
    slug: "varkala",
    name: "Varkala",
    region: "kerala",
    state: "Kerala",
    tagline: "A cliff above the Arabian Sea",
    summary:
      "A beach town where a paved cliff path looks out over a long sandy shore.",
    overview:
      "Varkala is known for the cliff, the beach below it, and a more compact feel than the larger resort coasts. People come to swim where conditions allow, walk the cliff in the evening, and keep the itinerary light. The Janardanaswamy Temple sits just inland from the beach.",
    bestTimeToVisit:
      "October to March is the preferred beach season. The sea can be rough during the monsoon, so swimming plans should follow local conditions on the day.",
    image: "/images/destinations/varkala.jpg",
    imageAlt: "Cliff and beach at Varkala on the Kerala coast",
    attractions: [
      "Varkala cliff",
      "Papanasam beach",
      "Janardanaswamy Temple",
      "North cliff viewpoints",
    ],
    experiences: [
      "An evening walk along the cliff",
      "Time on the beach",
      "A relaxed coastal stay with no fixed sightseeing quota",
    ],
  },
  {
    slug: "kovalam",
    name: "Kovalam",
    region: "kerala",
    state: "Kerala",
    tagline: "Crescent beaches near Thiruvananthapuram",
    summary:
      "A long-established beach stretch with a lighthouse, coves, and easy city access.",
    overview:
      "Kovalam is a beach destination just outside Thiruvananthapuram. Lighthouse Beach and Hawa Beach are the familiar crescents, separated by rocky points. It is a straightforward choice when the trip should stay near an airport and focus on the coast.",
    bestTimeToVisit:
      "October to March is the usual beach window. Monsoon surf is stronger, and some days are better for the promenade than for swimming.",
    image: "/images/destinations/kovalam.jpg",
    imageAlt: "Sandy beach and coastline at Kovalam in Kerala",
    attractions: [
      "Lighthouse Beach",
      "Hawa Beach",
      "Vizhinjam fishing harbour, nearby",
      "Kovalam lighthouse viewpoint",
    ],
    experiences: [
      "A beach-focused stay",
      "A short trip into Thiruvananthapuram if you want a city contrast",
      "Sunset from the lighthouse side",
    ],
  },
  {
    slug: "goa",
    name: "Goa",
    region: "india",
    state: "Goa",
    tagline: "Beaches, lanes, and long lunches",
    summary:
      "A west-coast holiday of beaches, Portuguese-era neighbourhoods, and easy evenings.",
    overview:
      "Goa remains a classic domestic beach holiday. A typical plan mixes a quieter beach, time in a Latin quarter such as Fontainhas, and the basilicas of Old Goa. North and south Goa feel different, so the stay area can be chosen around the kind of trip you want.",
    bestTimeToVisit:
      "November to February is the busiest and driest stretch. October and March are often easier to book. The monsoon is green and much quieter, with heavy rain.",
    image: "/images/destinations/goa.jpg",
    imageAlt: "Palm-lined beach in Goa",
    attractions: [
      "Selected north or south Goa beaches",
      "Fontainhas in Panaji",
      "Old Goa churches",
      "A local market",
    ],
    experiences: [
      "Beach time with one or two heritage stops",
      "A slow afternoon in a coastal village",
      "Seafood meals, planned around your preferences",
    ],
  },
  {
    slug: "manali",
    name: "Manali",
    region: "india",
    state: "Himachal Pradesh",
    tagline: "Valley towns and mountain air",
    summary:
      "A Himachal hill town used as a base for valleys, forests, and short high-altitude drives.",
    overview:
      "Manali is a long-standing mountain holiday in the Kullu valley. Old Manali, the Hadimba temple, and the road toward Solang are the usual first outings. Higher passes and Rohtang depend on permits, season, and road conditions, so they are planned as optional rather than guaranteed.",
    bestTimeToVisit:
      "March to June is popular for milder mountain weather. December to February suits travellers who want snow, with colder nights and occasional road delays. The monsoon can bring landslides in the hills.",
    image: "/images/destinations/manali.jpg",
    imageAlt: "Mountain valley near Manali in Himachal Pradesh",
    attractions: [
      "Old Manali and the Beas river",
      "Hadimba Temple",
      "Solang Valley",
      "Mall Road",
      "Atal Tunnel or Rohtang approaches, when open",
    ],
    experiences: [
      "A valley drive with time to stop",
      "A café afternoon in Old Manali",
      "Optional snow activities in season",
    ],
  },
  {
    slug: "jaipur",
    name: "Jaipur",
    region: "india",
    state: "Rajasthan",
    tagline: "Palaces, bazaars, and the Pink City",
    summary:
      "Rajasthan’s capital of forts, observatories, courtyards, and colour-filled markets.",
    overview:
      "Jaipur is a heritage city that rewards an unhurried walking and driving plan. Amber Fort, City Palace, Hawa Mahal, and the old bazaars can fill a few days without turning the trip into a race. Evenings are pleasant in the cooler months.",
    bestTimeToVisit:
      "October to March is the comfortable season for forts and walking. April and May are very hot. The monsoon is shorter here than on the coast.",
    image: "/images/destinations/jaipur.jpg",
    imageAlt: "Historic palace architecture in Jaipur, Rajasthan",
    attractions: [
      "Amber Fort",
      "City Palace",
      "Hawa Mahal",
      "Jantar Mantar",
      "Bazaars of the old city",
    ],
    experiences: [
      "A fort morning before the midday heat",
      "Time in the markets",
      "A heritage walk or palace visit",
    ],
  },
  {
    slug: "ooty",
    name: "Ooty",
    region: "india",
    state: "Tamil Nadu",
    tagline: "Nilgiri gardens and lake air",
    summary:
      "A Tamil Nadu hill station of botanical gardens, a lake, and tea country toward Coonoor.",
    overview:
      "Ooty, officially Udhagamandalam, is the best-known town of the Nilgiris. Botanical gardens, the lake, and Doddabetta are familiar stops, while Coonoor adds tea estates and a quieter pace. The toy train is a popular add-on when seats are available.",
    bestTimeToVisit:
      "October to June covers most pleasant visits, with April and May drawing many domestic travellers. The monsoon is misty and wet. Winter mornings can be cold enough for a light jacket.",
    image: "/images/destinations/ooty.jpg",
    imageAlt: "Hills and gardens around Ooty in the Nilgiris",
    attractions: [
      "Government Botanical Garden",
      "Ooty Lake",
      "Doddabetta Peak",
      "Coonoor tea gardens",
      "Nilgiri Mountain Railway, when tickets are available",
    ],
    experiences: [
      "A garden and lake morning",
      "A Coonoor tea-estate visit",
      "A scenic rail ride if seats can be arranged",
    ],
  },
  {
    slug: "kodaikanal",
    name: "Kodaikanal",
    region: "india",
    state: "Tamil Nadu",
    tagline: "A lake town in the Palani hills",
    summary:
      "Cool walks, a star-shaped lake, and forest viewpoints in the Palani range.",
    overview:
      "Kodaikanal is a hill station built around a lake and a set of short viewpoints. Coaker’s Walk, Pillar Rocks, and the pine forest are the outings most itineraries include. It suits families and couples who want a compact hill break.",
    bestTimeToVisit:
      "September to May is the broad pleasant season. Winter nights are cold. The monsoon brings mist and rain that can hide the longer viewpoints.",
    image: "/images/destinations/kodaikanal.jpg",
    imageAlt: "Lake and wooded hills at Kodaikanal in Tamil Nadu",
    attractions: [
      "Kodaikanal Lake",
      "Coaker’s Walk",
      "Bryant Park",
      "Pillar Rocks",
      "Pine forest",
    ],
    experiences: [
      "A lakeside walk or cycle",
      "A viewpoint circuit by car",
      "Time in the town market",
    ],
  },
  {
    slug: "coorg",
    name: "Coorg",
    region: "india",
    state: "Karnataka",
    tagline: "Coffee hills of Kodagu",
    summary:
      "Estate stays, waterfalls, and forest views in Karnataka’s coffee country.",
    overview:
      "Coorg, or Kodagu, is a district of coffee estates, forest, and small towns such as Madikeri. Abbey Falls, Raja’s Seat, and plantation walks are typical pieces of a short holiday. It pairs well with travellers who like green hills without a long sightseeing list.",
    bestTimeToVisit:
      "October to March is the most settled period. The monsoon is famous for waterfalls and is also the wettest time to be on estate roads.",
    image: "/images/destinations/coorg.jpg",
    imageAlt: "Coffee country and forested hills in Coorg, Karnataka",
    attractions: [
      "Raja’s Seat, Madikeri",
      "Abbey Falls",
      "Coffee estates",
      "Talakaveri or Namdroling, as optional longer drives",
    ],
    experiences: [
      "An estate walk",
      "A waterfall stop",
      "A stay surrounded by plantations",
    ],
  },
];

export function getDestination(slug: string) {
  return destinations.find((destination) => destination.slug === slug);
}

export function getDestinationsByRegion(region: "kerala" | "india" | "all") {
  if (region === "all") return destinations;
  return destinations.filter((destination) => destination.region === region);
}
