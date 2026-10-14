export type DestinationRegion = "kerala" | "india";

export type Destination = {
  slug: string;
  name: string;
  region: DestinationRegion;
  state: string;
  tagline: string;
  summary: string;
  overview: string;
  bestTimeToVisit: string;
  image: string;
  imageAlt: string;
  /** CSS object-position, used when a photograph needs a specific crop. */
  imagePosition?: string;
  attractions: string[];
  experiences: string[];
};

export type PackageCategory =
  | "honeymoon"
  | "family"
  | "adventure"
  | "weekend"
  | "group";

export type ItineraryDay = {
  day: number;
  title: string;
  description: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
};

export type TravelPackage = {
  id: string;
  slug: string;
  title: string;
  locationLabel: string;
  /** Destination slugs this package visits. The first is the primary destination. */
  places: string[];
  categories: PackageCategory[];
  days: number;
  nights: number;
  image: string;
  imageAlt: string;
  gallery: GalleryImage[];
  summary: string;
  description: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  /**
   * Illustrative sample amount in Indian Rupees, or null when the card should
   * say "Contact for price". Numbers are demo figures, not official rates.
   */
  startingPrice: number | null;
  featured: boolean;
  pickup: string;
  travelNotes: string[];
  conditions: string[];
};

export type PackageFilters = {
  q: string;
  destination: string;
  category: string;
  duration: string;
  budget: string;
};

export type SearchParams = Record<string, string | string[] | undefined>;
