import { destinations } from "@/data/destinations";
import type {
  PackageCategory,
  PackageFilters,
  SearchParams,
  TravelPackage,
} from "@/types/travel";

export const categoryLabels: Record<PackageCategory, string> = {
  honeymoon: "Honeymoon",
  family: "Family holiday",
  adventure: "Adventure",
  weekend: "Weekend getaway",
  group: "Group tour",
};

export const categoryOptions: { value: PackageCategory | ""; label: string }[] = [
  { value: "", label: "Trip style" },
  { value: "honeymoon", label: "Honeymoon packages" },
  { value: "family", label: "Family holidays" },
  { value: "adventure", label: "Adventure trips" },
  { value: "weekend", label: "Weekend getaways" },
  { value: "group", label: "Group tours" },
];

export const durationOptions = [
  { value: "", label: "Duration" },
  { value: "1-2", label: "1–2 days" },
  { value: "3-4", label: "3–4 days" },
  { value: "5-plus", label: "5 days or more" },
] as const;

export const budgetOptions = [
  { value: "", label: "Budget" },
  { value: "under-20000", label: "Under ₹20,000" },
  { value: "20000-35000", label: "₹20,000 – ₹35,000" },
  { value: "above-35000", label: "Above ₹35,000" },
  { value: "contact", label: "Contact for price" },
] as const;

export const travelCategories = [
  {
    slug: "honeymoon",
    title: "Honeymoon packages",
    description: "Quieter stays, scenic routes, and room to shape the days together.",
    href: "/packages?category=honeymoon",
  },
  {
    slug: "family",
    title: "Family holidays",
    description: "Balanced plans with comfortable pacing for mixed-age groups.",
    href: "/packages?category=family",
  },
  {
    slug: "adventure",
    title: "Adventure trips",
    description: "Hills, wildlife areas, and itineraries with more time outdoors.",
    href: "/packages?category=adventure",
  },
  {
    slug: "weekend",
    title: "Weekend getaways",
    description: "Short breaks that are realistic to take without a long leave.",
    href: "/packages?category=weekend",
  },
  {
    slug: "group",
    title: "Group tours",
    description: "Routes for friends, teams, and families travelling together.",
    href: "/packages?category=group",
  },
  {
    slug: "custom",
    title: "Custom packages",
    description: "Tell us the dates, pace, and places. The route can be built around you.",
    href: "/plan-your-trip",
  },
] as const;

const sharedExclusions = [
  "Personal expenses such as tips, laundry, and extra meals",
  "Entry tickets, park fees, and camera charges where they are not listed under inclusions",
  "Travel insurance",
  "Anything not written in the inclusions for that package",
];

const sharedConditions = [
  "Dates, stays, and the order of sightseeing can be adjusted when you enquire.",
  "Sending an enquiry does not reserve a room or confirm that dates are available.",
];

function durationBand(days: number) {
  if (days <= 2) return "1-2";
  if (days <= 4) return "3-4";
  return "5-plus";
}

export const packages: TravelPackage[] = [
  {
    id: "pkg-munnar-romantic",
    slug: "munnar-romantic-escape",
    title: "Munnar Romantic Escape",
    locationLabel: "Munnar",
    places: ["munnar"],
    categories: ["honeymoon"],
    days: 3,
    nights: 2,
    image: "/images/destinations/munnar.jpg",
    imageAlt: "Tea-covered hills around Munnar",
    gallery: [
      { src: "/images/destinations/munnar.jpg", alt: "Tea plantations across the Munnar hills" },
      { src: "/images/experiences/tea.jpg", alt: "Close view of tea gardens in Kerala" },
      { src: "/images/experiences/hills.jpg", alt: "Mist over the Western Ghats" },
    ],
    summary:
      "Two nights among the tea hills, with a gentle sightseeing pace and time left open for the views.",
    description:
      "A short Munnar stay for a honeymoon or a couple’s break. The route covers arrival, a tea-country drive, and an unhurried final morning. Stays and meals are confirmed when you enquire.",
    highlights: [
      "Two nights in Munnar",
      "Tea garden and viewpoint drive",
      "Time that is not packed from morning to night",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival and a first look at the hills",
        description:
          "Arrive in Munnar and check in. If the light is good, take a short orientation drive toward a nearby viewpoint. The evening is free.",
      },
      {
        day: 2,
        title: "Tea plantations and local viewpoints",
        description:
          "Spend the day on a circuit that can include a tea museum or estate visit, Mattupetty, and Echo Point. Stops are adjusted for weather and opening hours.",
      },
      {
        day: 3,
        title: "Leisure time and departure",
        description:
          "A slow morning in town or at the stay, then departure. Longer transfers can be discussed if you are continuing to another destination.",
      },
    ],
    inclusions: [
      "Two nights of accommodation on a twin or double-sharing basis",
      "Daily breakfast",
      "Sightseeing by private vehicle for the Munnar portion, as per the outline",
      "Driver allowance and fuel for the included sightseeing",
    ],
    exclusions: sharedExclusions,
    startingPrice: 18500,
    featured: true,
    pickup:
      "Pickup is arranged after the enquiry. A common starting point is Ernakulam railway station or Kochi airport, and the transfer can be added.",
    travelNotes: [
      "Hill roads can be slow in rain and mist.",
      "Eravikulam National Park has seasonal closures and daily visitor limits, so it is treated as optional.",
    ],
    conditions: sharedConditions,
  },
  {
    id: "pkg-alleppey-houseboat",
    slug: "alleppey-houseboat-retreat",
    title: "Alleppey Houseboat Retreat",
    locationLabel: "Alleppey",
    places: ["alleppey"],
    categories: ["honeymoon", "weekend"],
    days: 2,
    nights: 1,
    image: "/images/destinations/alleppey.jpg",
    imageAlt: "Houseboats on the Alleppey backwaters",
    gallery: [
      { src: "/images/destinations/alleppey.jpg", alt: "Houseboats moored on Kerala backwaters" },
      { src: "/images/experiences/houseboat.jpg", alt: "A houseboat moving through the backwaters" },
      { src: "/images/experiences/culture.jpg", alt: "A Kerala cultural scene" },
    ],
    summary:
      "One night on a houseboat through the backwaters, with boarding in Alleppey and a cruise planned around daylight.",
    description:
      "A compact stay for travellers whose main wish is time on the water. Houseboat category, meals on board, and whether the cruise is private or shared are confirmed when you enquire.",
    highlights: [
      "One night on a houseboat",
      "Cruise through backwater villages",
      "A short plan that can sit inside a longer Kerala trip",
    ],
    itinerary: [
      {
        day: 1,
        title: "Board the houseboat and cruise",
        description:
          "Meet in Alleppey around the agreed boarding time and begin the cruise. The route follows canals and open lake stretches. Lunch and dinner on board are included.",
      },
      {
        day: 2,
        title: "Morning on the water and disembark",
        description:
          "Wake on the backwaters, have breakfast, and disembark by late morning. Onward travel to Kochi or another stay can be added.",
      },
    ],
    inclusions: [
      "One night on a houseboat in a category confirmed at the time of booking",
      "Meals listed for the cruise, typically lunch, dinner, and breakfast",
      "Cruise as per the houseboat operator’s usual route",
    ],
    exclusions: [
      ...sharedExclusions,
      "Air-conditioned running hours beyond the operator’s included window",
    ],
    startingPrice: null,
    featured: true,
    pickup:
      "Boarding is usually in Alleppey. The exact jetty is shared once a boat is discussed.",
    travelNotes: [
      "Cruise timings shift with daylight and operator schedules.",
      "Monsoon departures can still run, with more time spent indoors if it rains.",
    ],
    conditions: sharedConditions,
  },
  {
    id: "pkg-wayanad-adventure",
    slug: "wayanad-adventure-getaway",
    title: "Wayanad Adventure Getaway",
    locationLabel: "Wayanad",
    places: ["wayanad"],
    categories: ["adventure", "group"],
    days: 3,
    nights: 2,
    image: "/images/destinations/wayanad.jpg",
    imageAlt: "Forested hills in Wayanad",
    gallery: [
      { src: "/images/destinations/wayanad.jpg", alt: "Green hills in Wayanad" },
      { src: "/images/experiences/wildlife.jpg", alt: "Wildlife habitat in a Kerala sanctuary" },
      { src: "/images/experiences/hills.jpg", alt: "Misty hill slopes in the Western Ghats" },
    ],
    summary:
      "Two nights in Wayanad with caves, a lake or waterfall stop, and room for a group to travel together.",
    description:
      "An adventure-leaning break in Wayanad. The days mix short outdoor visits with drive time. Trekking, such as Chembra Peak, depends on permits, weather, and the fitness of the group, so it stays optional.",
    highlights: [
      "Edakkal Caves when open",
      "A waterfall or lake stop",
      "Suitable to adapt for a small group",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival and a gentle introduction",
        description:
          "Reach the stay and settle in. If time allows, visit a nearby lake or viewpoint rather than starting with a long trek.",
      },
      {
        day: 2,
        title: "Caves, forest, and waterfalls",
        description:
          "A full day for Edakkal Caves and one more outdoor stop, chosen from a waterfall or wildlife fringe area according to what is open.",
      },
      {
        day: 3,
        title: "Morning at leisure and departure",
        description:
          "Keep the last morning light. Departure after breakfast, with an optional plantation stop on the way out if the route allows.",
      },
    ],
    inclusions: [
      "Two nights of accommodation",
      "Daily breakfast",
      "Private vehicle for the listed sightseeing",
      "Driver allowance for the included days",
    ],
    exclusions: sharedExclusions,
    startingPrice: 16500,
    featured: true,
    pickup:
      "Kozhikode airport and nearby railway stations are common meeting points. The transfer is quoted separately if it is not already in the plan.",
    travelNotes: [
      "Cave and peak access can close at short notice.",
      "Wear shoes with grip if a waterfall walk is included.",
    ],
    conditions: sharedConditions,
  },
  {
    id: "pkg-munnar-thekkady",
    slug: "munnar-thekkady-explorer",
    title: "Munnar & Thekkady Explorer",
    locationLabel: "Munnar & Thekkady",
    places: ["munnar", "thekkady"],
    categories: ["family"],
    days: 4,
    nights: 3,
    image: "/images/experiences/hills.jpg",
    imageAlt: "Hills between Munnar and the Periyar landscape",
    gallery: [
      { src: "/images/destinations/munnar.jpg", alt: "Tea hills in Munnar" },
      { src: "/images/destinations/thekkady.jpg", alt: "Boating area at Thekkady" },
      { src: "/images/experiences/wildlife.jpg", alt: "Forest and wildlife country near Thekkady" },
    ],
    summary:
      "Four days linking tea country with Periyar, paced for families who want two places without changing hotels every night more than once.",
    description:
      "Two nights in Munnar and one night in Thekkady. Boat rides and park entries are arranged when you enquire.",
    highlights: [
      "Tea hills and a Periyar day",
      "One hotel change",
      "A pace that leaves the last morning unrushed",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Munnar",
        description:
          "Transfer to Munnar and check in. Use the rest of the day to settle and, if you like, take a short local walk.",
      },
      {
        day: 2,
        title: "Munnar sightseeing",
        description:
          "Visit tea gardens and selected viewpoints. The circuit is shortened if travelling with young children.",
      },
      {
        day: 3,
        title: "Drive to Thekkady",
        description:
          "Travel to Thekkady. In the afternoon, a spice plantation visit or the Periyar boat ride can be planned, depending on arrival time and park slots.",
      },
      {
        day: 4,
        title: "Departure",
        description:
          "Breakfast and departure, with the drop point agreed in advance. Kochi is a common onward connection.",
      },
    ],
    inclusions: [
      "Three nights of accommodation",
      "Daily breakfast",
      "Private transfers and sightseeing for the outlined route",
    ],
    exclusions: sharedExclusions,
    startingPrice: 28900,
    featured: true,
    pickup: "Kochi arrival. Other cities can be arranged.",
    travelNotes: [
      "The Munnar to Thekkady drive takes a large part of a day.",
      "Periyar boat tickets are limited and are not included unless added to the quote.",
    ],
    conditions: sharedConditions,
  },
  {
    id: "pkg-kerala-honeymoon",
    slug: "kerala-honeymoon-experience",
    title: "Kerala Honeymoon Experience",
    locationLabel: "Munnar, Thekkady & Alleppey",
    places: ["munnar", "thekkady", "alleppey"],
    categories: ["honeymoon"],
    days: 5,
    nights: 4,
    image: "/images/experiences/houseboat.jpg",
    imageAlt: "Houseboat on a Kerala backwater",
    gallery: [
      { src: "/images/destinations/munnar.jpg", alt: "Munnar tea country" },
      { src: "/images/destinations/thekkady.jpg", alt: "Thekkady lake" },
      { src: "/images/destinations/alleppey.jpg", alt: "Alleppey backwaters" },
    ],
    summary:
      "Five days through the hills, wildlife country, and one night on the backwaters.",
    description:
      "A honeymoon route across three Kerala settings: the hills first, then Thekkady, then a houseboat night before departure.",
    highlights: [
      "Three different Kerala landscapes",
      "One houseboat night",
      "Room in the plan to swap a destination",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive and transfer to Munnar",
        description:
          "Land or arrive by train and drive to Munnar. The evening is free after check-in.",
      },
      {
        day: 2,
        title: "Munnar at an easy pace",
        description:
          "Tea gardens and one or two viewpoints, with a long lunch break rather than a full checklist.",
      },
      {
        day: 3,
        title: "Munnar to Thekkady",
        description:
          "Drive to Thekkady. Visit a spice garden if you arrive in time. The Periyar boat can be requested for this afternoon or the next morning.",
      },
      {
        day: 4,
        title: "Thekkady to a houseboat",
        description:
          "Travel toward Alleppey and board a houseboat for an overnight cruise. Meals on board follow the boat’s included plan.",
      },
      {
        day: 5,
        title: "Disembark and depart",
        description:
          "Leave the boat after breakfast and continue to Kochi or the airport. Allow a realistic gap before a flight.",
      },
    ],
    inclusions: [
      "Four nights of stays, including one houseboat night",
      "Daily breakfast, plus houseboat meals on the cruise night",
      "Private vehicle for the linked transfers and sightseeing",
    ],
    exclusions: sharedExclusions,
    startingPrice: 52000,
    featured: true,
    pickup: "Kochi. Flights and trains are not included.",
    travelNotes: [
      "This route involves several hours of driving. The nights are placed to avoid changing hotels every day.",
      "Houseboat category changes the character of the trip more than most hotel swaps.",
    ],
    conditions: sharedConditions,
  },
  {
    id: "pkg-vagamon-weekend",
    slug: "vagamon-weekend-escape",
    title: "Vagamon Weekend Escape",
    locationLabel: "Vagamon",
    places: ["vagamon"],
    categories: ["weekend"],
    days: 2,
    nights: 1,
    image: "/images/destinations/vagamon.jpg",
    imageAlt: "Meadows at Vagamon",
    gallery: [
      { src: "/images/destinations/vagamon.jpg", alt: "Vagamon meadows" },
      { src: "/images/experiences/hills.jpg", alt: "Hill scenery in Kerala" },
      { src: "/images/experiences/tea.jpg", alt: "Plantation landscape near the high ranges" },
    ],
    summary:
      "A one-night hill break with meadows, a pine forest stop, and very little timetable.",
    description:
      "A weekend for travellers starting from central Kerala, with open time in Vagamon rather than a long list of tickets.",
    highlights: [
      "One night in the hills",
      "Meadows and pine forest",
      "A plan that can start on a Friday or Saturday",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive and see the meadows",
        description:
          "Drive to Vagamon, check in, and visit the meadows or pine forest according to the light and the weather.",
      },
      {
        day: 2,
        title: "A slow morning and return",
        description:
          "Keep the morning free for another short viewpoint, then return. Adventure activities, if wanted, are arranged locally and are not included.",
      },
    ],
    inclusions: [
      "One night of accommodation",
      "Breakfast",
      "Local sightseeing transfers for the meadow circuit",
    ],
    exclusions: sharedExclusions,
    startingPrice: 9800,
    featured: false,
    pickup: "Kottayam or Ernakulam.",
    travelNotes: [
      "Weekend traffic on the ghats can add time. A late start still works if the first evening stays simple.",
    ],
    conditions: sharedConditions,
  },
  {
    id: "pkg-varkala-beach",
    slug: "varkala-beach-retreat",
    title: "Varkala Beach Retreat",
    locationLabel: "Varkala",
    places: ["varkala"],
    categories: ["weekend", "honeymoon"],
    days: 3,
    nights: 2,
    image: "/images/destinations/varkala.jpg",
    imageAlt: "The cliff and beach at Varkala",
    gallery: [
      { src: "/images/destinations/varkala.jpg", alt: "Varkala cliff and the Arabian Sea" },
      { src: "/images/experiences/beach.jpg", alt: "A Kerala beach" },
      { src: "/images/destinations/kovalam.jpg", alt: "Another stretch of the Kerala coast" },
    ],
    summary:
      "Two nights by the cliff at Varkala, with the beach as the plan and sightseeing kept optional.",
    description:
      "A coastal stay for couples or a short holiday. The days stay open. A visit toward Kovalam or Thiruvananthapuram can be added if you want one outing.",
    highlights: [
      "Cliff and beach setting",
      "Two free-form days",
      "Easy to extend toward Kovalam",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival and the cliff",
        description:
          "Reach Varkala and check in. Walk the cliff in the late afternoon if you arrive in time.",
      },
      {
        day: 2,
        title: "Beach day",
        description:
          "The day is unscheduled. Swim only where lifeguards and conditions allow. A café afternoon on the cliff fits the pace of this stay.",
      },
      {
        day: 3,
        title: "Departure",
        description:
          "Breakfast and departure toward Trivandrum airport or the railway station.",
      },
    ],
    inclusions: [
      "Two nights of accommodation",
      "Daily breakfast",
      "Arrival and departure transfers within Varkala if a vehicle is part of the confirmed quote",
    ],
    exclusions: sharedExclusions,
    startingPrice: null,
    featured: true,
    pickup: "Thiruvananthapuram airport or railway station.",
    travelNotes: [
      "Sea conditions change. The plan does not assume swimming on every day.",
    ],
    conditions: sharedConditions,
  },
  {
    id: "pkg-kochi-alleppey",
    slug: "kochi-alleppey-discovery",
    title: "Kochi & Alleppey Discovery",
    locationLabel: "Kochi & Alleppey",
    places: ["kochi", "alleppey"],
    categories: ["family"],
    days: 3,
    nights: 2,
    image: "/images/destinations/kochi.jpg",
    imageAlt: "Chinese fishing nets at Fort Kochi",
    gallery: [
      { src: "/images/destinations/kochi.jpg", alt: "Fort Kochi fishing nets" },
      { src: "/images/destinations/alleppey.jpg", alt: "Alleppey backwaters" },
      { src: "/images/experiences/culture.jpg", alt: "Kerala cultural performance" },
    ],
    summary:
      "Fort Kochi on foot, then a night that can be a houseboat or a backwater resort.",
    description:
      "A first Kerala trip or a long weekend. Kochi stays walkable, and the second night is on or beside the water. You choose a houseboat or a resort.",
    highlights: [
      "Fort Kochi walking time",
      "A backwater night",
      "Short enough for a long weekend",
    ],
    itinerary: [
      {
        day: 1,
        title: "Fort Kochi",
        description:
          "Arrive in Kochi and walk the fort area: fishing nets, the lanes, and the harbour front. An evening performance can be added if one is on.",
      },
      {
        day: 2,
        title: "Kochi to Alleppey",
        description:
          "Drive to Alleppey and board a houseboat or check into a backwater stay. The afternoon is on the water.",
      },
      {
        day: 3,
        title: "Return and depart",
        description:
          "Disembark or check out and return toward Kochi for the onward journey.",
      },
    ],
    inclusions: [
      "Two nights of accommodation, with the second night specified when you enquire",
      "Daily breakfast",
      "Private transfer between Kochi and Alleppey and a Fort Kochi sightseeing block",
    ],
    exclusions: sharedExclusions,
    startingPrice: 24200,
    featured: false,
    pickup: "Kochi airport or Ernakulam railway station.",
    travelNotes: [
      "Fort Kochi is best on foot. The vehicle is for the link to Alleppey and the airport.",
    ],
    conditions: sharedConditions,
  },
  {
    id: "pkg-goa-beach",
    slug: "goa-beach-holiday",
    title: "Goa Beach Holiday",
    locationLabel: "Goa",
    places: ["goa"],
    categories: ["family", "honeymoon"],
    days: 4,
    nights: 3,
    image: "/images/destinations/goa.jpg",
    imageAlt: "A palm-fringed beach in Goa",
    gallery: [{ src: "/images/destinations/goa.jpg", alt: "Palm-lined beach in Goa" }],
    summary:
      "Three nights on the Goa coast, with beach time and one heritage outing.",
    description:
      "A beach holiday on the west coast. North or south Goa is chosen when you enquire. One day covers Old Goa or Fontainhas, and the other days stay open.",
    highlights: [
      "Three nights by the coast",
      "One heritage half-day",
      "The rest of the time unscheduled",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival",
        description:
          "Arrive in Goa, transfer to the stay, and keep the evening free.",
      },
      {
        day: 2,
        title: "Beach day",
        description:
          "No fixed sightseeing. Use the day for the beach near the stay.",
      },
      {
        day: 3,
        title: "A heritage outing",
        description:
          "Visit Old Goa or walk Fontainhas in Panaji, then return. The outing can be swapped for a south Goa beach drive.",
      },
      {
        day: 4,
        title: "Departure",
        description: "Breakfast and transfer to the airport or railway station.",
      },
    ],
    inclusions: [
      "Three nights of accommodation",
      "Daily breakfast",
      "Airport or station transfers and one half-day sightseeing vehicle",
    ],
    exclusions: sharedExclusions,
    startingPrice: 31000,
    featured: false,
    pickup: "Goa airport (Dabolim or Mopa) or Madgaon railway station, as applicable.",
    travelNotes: [
      "December and January fill early. Festival dates need to be requested in advance.",
    ],
    conditions: sharedConditions,
  },
  {
    id: "pkg-manali-mountain",
    slug: "manali-mountain-escape",
    title: "Manali Mountain Escape",
    locationLabel: "Manali",
    places: ["manali"],
    categories: ["adventure", "family"],
    days: 5,
    nights: 4,
    image: "/images/destinations/manali.jpg",
    imageAlt: "Mountains around Manali",
    gallery: [
      { src: "/images/destinations/manali.jpg", alt: "Mountain road and peaks on the Manali side of Himachal Pradesh" },
    ],
    summary:
      "Four nights in Manali with valley sightseeing and an optional high-road day when the passes are open.",
    description:
      "A mountain holiday built around Old Manali, Hadimba, and Solang. A Rohtang or Atal Tunnel outing stays optional because permits and road conditions decide it.",
    highlights: [
      "Four nights in the valley",
      "Solang and Old Manali",
      "A high-road day only when it is actually open",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Manali",
        description:
          "Reach Manali from the airport or via the usual road transfer. The evening is free. The Beas river path is an easy first walk.",
      },
      {
        day: 2,
        title: "Local Manali",
        description:
          "Visit Hadimba Temple, the town, and Old Manali. The day is kept short so it still works in winter traffic.",
      },
      {
        day: 3,
        title: "Solang Valley",
        description:
          "Drive to Solang. Adventure activities there are optional and paid on the spot. Return by evening.",
      },
      {
        day: 4,
        title: "Optional high road or a free day",
        description:
          "If permits and weather allow, a Rohtang-side drive can be arranged. Otherwise the day stays in the valley.",
      },
      {
        day: 5,
        title: "Departure",
        description: "Depart Manali after breakfast.",
      },
    ],
    inclusions: [
      "Four nights of accommodation",
      "Daily breakfast",
      "Local sightseeing by private vehicle for the included valley days",
    ],
    exclusions: [
      ...sharedExclusions,
      "Rohtang permits, snow gear, and adventure activity fees",
    ],
    startingPrice: 34500,
    featured: false,
    pickup: "Chandigarh or Bhuntar airport. Transfers can be added.",
    travelNotes: [
      "Winter roads can close for part of a day. Build slack into flight connections.",
    ],
    conditions: sharedConditions,
  },
  {
    id: "pkg-jaipur-heritage",
    slug: "jaipur-heritage-experience",
    title: "Jaipur Heritage Experience",
    locationLabel: "Jaipur",
    places: ["jaipur"],
    categories: ["family", "group"],
    days: 4,
    nights: 3,
    image: "/images/destinations/jaipur.jpg",
    imageAlt: "Palace architecture in Jaipur",
    gallery: [
      { src: "/images/destinations/jaipur.jpg", alt: "Historic buildings in Jaipur" },
      { src: "/images/experiences/culture.jpg", alt: "Architectural detail from an Indian heritage setting" },
      { src: "/images/destinations/jaipur.jpg", alt: "Palace facade in Jaipur" },
    ],
    summary:
      "Three nights in the Pink City with forts in the morning and bazaars when the day cools.",
    description:
      "A heritage plan for families or a small group. Monuments are ordered to avoid the hottest part of the day where possible. A guide can be added.",
    highlights: [
      "Amber Fort and the old city",
      "Mornings reserved for the larger sites",
      "Works for a family or a small group",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Jaipur",
        description:
          "Arrive and transfer to the stay. If there is late-day light, see Hawa Mahal from the street and walk a short stretch of the bazaar.",
      },
      {
        day: 2,
        title: "Amber Fort and the water palace area",
        description:
          "Start early for Amber Fort. The rest of the day can include Jal Mahal as a photo stop and a return before the afternoon heat.",
      },
      {
        day: 3,
        title: "City Palace and Jantar Mantar",
        description:
          "Visit City Palace and Jantar Mantar. Leave the late afternoon for the markets or a textile stop, according to interest.",
      },
      {
        day: 4,
        title: "Departure",
        description: "Breakfast and departure transfer.",
      },
    ],
    inclusions: [
      "Three nights of accommodation",
      "Daily breakfast",
      "Private vehicle for arrival, departure, and the sightseeing blocks",
    ],
    exclusions: sharedExclusions,
    startingPrice: null,
    featured: false,
    pickup: "Jaipur airport or railway station.",
    travelNotes: [
      "Monument closing days vary. The order of visits can be swapped.",
      "Summer sightseeing is planned for early hours.",
    ],
    conditions: sharedConditions,
  },
  {
    id: "pkg-ooty-coonoor",
    slug: "ooty-coonoor-getaway",
    title: "Ooty & Coonoor Getaway",
    locationLabel: "Ooty & Coonoor",
    places: ["ooty"],
    categories: ["weekend", "family"],
    days: 3,
    nights: 2,
    image: "/images/destinations/ooty.jpg",
    imageAlt: "Hill gardens around Ooty",
    gallery: [{ src: "/images/destinations/ooty.jpg", alt: "Hills and gardens around Ooty" }],
    summary:
      "Two nights in the Nilgiris, with Ooty’s lake and gardens and a Coonoor tea-country outing.",
    description:
      "A hill getaway in Tamil Nadu. The toy train can be added when seats are available.",
    highlights: [
      "Ooty lake and botanical garden",
      "Coonoor tea country",
      "A length that fits a long weekend",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Ooty",
        description:
          "Reach Ooty and visit the botanical garden or the lake if you arrive with daylight left.",
      },
      {
        day: 2,
        title: "Coonoor and a viewpoint",
        description:
          "Drive toward Coonoor for a tea-garden visit and a viewpoint such as Doddabetta on the way back, if the mist allows.",
      },
      {
        day: 3,
        title: "Departure",
        description:
          "A short morning in town, then departure. The Nilgiri train can replace part of the drive when tickets exist.",
      },
    ],
    inclusions: [
      "Two nights of accommodation",
      "Daily breakfast",
      "Private vehicle for local sightseeing, including Coonoor",
    ],
    exclusions: sharedExclusions,
    startingPrice: 21400,
    featured: false,
    pickup: "Coimbatore airport or Mettupalayam railway station.",
    travelNotes: [
      "Hill-station weekends are busy. A weekday start is easier if the dates are flexible.",
    ],
    conditions: sharedConditions,
  },
];

function readParam(params: SearchParams, key: string) {
  const value = params[key];
  if (Array.isArray(value)) return value[0]?.trim() ?? "";
  return value?.trim() ?? "";
}

export function parsePackageFilters(params: SearchParams): PackageFilters {
  const category = readParam(params, "category");
  const duration = readParam(params, "duration");
  const budget = readParam(params, "budget");

  return {
    q: readParam(params, "q"),
    destination: readParam(params, "destination"),
    category: category in categoryLabels ? category : "",
    duration: durationOptions.some((option) => option.value === duration) ? duration : "",
    budget: budgetOptions.some((option) => option.value === budget) ? budget : "",
  };
}

export function filterPackages(items: TravelPackage[], filters: PackageFilters) {
  const query = filters.q.toLowerCase();

  return items.filter((item) => {
    if (filters.destination && !item.places.includes(filters.destination)) return false;
    if (filters.category && !item.categories.includes(filters.category as PackageCategory)) {
      return false;
    }
    if (filters.duration && durationBand(item.days) !== filters.duration) return false;

    if (filters.budget === "contact" && item.startingPrice != null) return false;
    if (filters.budget === "under-20000") {
      if (item.startingPrice == null || item.startingPrice >= 20000) return false;
    }
    if (filters.budget === "20000-35000") {
      if (item.startingPrice == null || item.startingPrice < 20000 || item.startingPrice > 35000) {
        return false;
      }
    }
    if (filters.budget === "above-35000") {
      if (item.startingPrice == null || item.startingPrice <= 35000) return false;
    }

    if (!query) return true;

    const placeNames = item.places
      .map((slug) => destinations.find((destination) => destination.slug === slug)?.name ?? "")
      .join(" ");
    const haystack = [item.title, item.locationLabel, item.summary, placeNames, item.categories.join(" ")]
      .join(" ")
      .toLowerCase();

    return haystack.includes(query);
  });
}

export function hasActiveFilters(filters: PackageFilters) {
  return Object.values(filters).some((value) => value.length > 0);
}

export function getPackage(slug: string) {
  return packages.find((item) => item.slug === slug);
}

export function getPackagesForDestination(slug: string) {
  return packages.filter((item) => item.places.includes(slug));
}

export function getRelatedPackages(current: TravelPackage, limit = 3) {
  return packages
    .filter((item) => item.slug !== current.slug)
    .map((item) => {
      const sharedPlace = item.places.some((place) => current.places.includes(place));
      const sharedCategory = item.categories.some((category) => current.categories.includes(category));
      const score = (sharedPlace ? 2 : 0) + (sharedCategory ? 1 : 0);
      return { item, score };
    })
    .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title))
    .slice(0, limit)
    .map((entry) => entry.item);
}

export function getFeaturedPackages() {
  return packages.filter((item) => item.featured);
}

export function formatDuration(days: number, nights: number) {
  const dayLabel = days === 1 ? "Day" : "Days";
  const nightLabel = nights === 1 ? "Night" : "Nights";
  return `${days} ${dayLabel} / ${nights} ${nightLabel}`;
}

export function formatInr(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function categoryList(categories: PackageCategory[]) {
  return categories.map((category) => categoryLabels[category]).join(" · ");
}
