const imageAssets = import.meta.glob<string>("../assets/**/*", {
  eager: true,
  query: "?url",
  import: "default"
});

const imageAsset = (path: string) => imageAssets[`../assets/${path}`] ?? path;

export interface PropertyItem {
  id: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  price: number;
  priceFormatted: string; // Formatted in K / M as requested (e.g., $1.7M, $699K, $840K)
  fullPriceFormatted: string; // Full dollar amount (e.g., $1,700,000)
  dateOrStatus: string;
  propertyType: 'House' | 'Multifamily' | 'Townhouse' | 'Condo';
  beds: number;
  baths: number;
  sqft: number;
  pricePerSqFt: number;
  status: 'ACTIVE' | 'SOLD';
  role: "Listing Agent" | "Buyer's Agent" | "KW South Bay Exclusive";
  isFeatured?: boolean;
  highlights: string[];
  currentEstValue?: string;
  daysOnMarket?: number;
  overListPercentage?: number;
  coordinates: [number, number]; // [lat, lng]
  image: string;
  gallery?: string[];
  description: string;
}

// Backward compatibility alias
export type SoldProperty = PropertyItem;

export interface AreaExperience {
  id: string;
  name: string;
  region: string;
  salesCount: number;
  description: string;
  image: string;
  tags: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  date: string;
  rating: number;
  source: string;
  headline: string;
  content: string;
  location: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const AGENT_INFO = {
  name: "Alex Ogueke",
  brokerage: "Keller Williams Realty South Bay",
  title: "Real Estate Professional",
  calDRE: "02079279",
  phone: "(323) 915-1693",
  phoneRaw: "+13239151693",
  email: "alexogueke@kw.com",
  website: "https://alexogueke.kw.com",
  yelpUrl: "https://www.yelp.com/biz/alex-ogueke-keller-williams-realty-torrance-2",
  homesUrl: "https://www.homes.com/real-estate-agents/alex-ogueke/mm6rvyj/",
  officeAddress: "23670 Hawthorne Blvd, Suite 100, Torrance, CA 90505",
  primaryRegion: "Torrance, Los Angeles & South Bay, California",
  experienceYears: 4,
  closedSalesCount: 16,
  totalVolume: "$10.2M",
  avgSalePrice: "$638K",
  priceRange: "$550K – $940K",
  yelpRating: 5.0,
  yelpReviewCount: 2,
  reportingPeriod: "Prior 5-Year Reporting Period (Homes.com Verified MLS Snapshot)",
  portraitImage: imageAsset("images/alex-ogueke img.jpg"),
  heroBannerBg: imageAsset("banner-southbay.jpg"),
  bio: [
    "Alex Ogueke was born in Carson, California, and has lived throughout the Los Angeles area and Orange County. He also spent nine years in Nigeria before returning to Los Angeles. These diverse experiences have given him a unique perspective on real estate and help him connect with people from different communities.",
    "Affiliated with Keller Williams Realty South Bay in Torrance, Alex provides hands-on, high-touch advocacy for buyers, sellers, and real estate investors. With deep familiarity across Torrance, Gardena, Carson, and the wider Los Angeles metropolitan area, he delivers grounded market data, strategic negotiation, and personalized communication every step of the way."
  ],
  propertyTypes: ["House", "Multifamily", "Townhouse", "Condo"],
  specializations: [
    "Active Torrance & South Bay Listings",
    "First-Time Homebuyers",
    "Real Estate Investments",
    "Military Families & Relocations",
    "Luxury Homes & Estates",
    "New Construction & Units"
  ]
};

export const ALL_PROPERTIES: PropertyItem[] = [
  // ==========================================
  // ACTIVE & FEATURED LISTINGS (Torrance Market)
  // ==========================================
  {
    id: "24263-los-codona",
    address: "24263 Los Codona Ave",
    city: "Torrance",
    state: "CA",
    zip: "90505",
    price: 1700000,
    priceFormatted: "$1.7M",
    fullPriceFormatted: "$1,700,000",
    dateOrStatus: "Active Listing",
    propertyType: "House",
    beds: 3,
    baths: 2,
    sqft: 1766,
    pricePerSqFt: 963,
    status: "ACTIVE",
    role: "Listing Agent",
    isFeatured: true,
    highlights: ["Active Exclusive Listing", "Walteria Neighborhood", "Spacious 1,766 Sq Ft", "Private Courtyard & Pool"],
    currentEstValue: "$1.7M",
    coordinates: [33.8058, -118.3496],
    image: imageAsset("properties/codona-24263.jpg"),
    gallery: [
      imageAsset("properties/codona-24263.jpg"),
      imageAsset("properties/codona-pool.jpg"),
      imageAsset("properties/codona-interior.jpg")
    ],
    description: "Exceptional Walteria Torrance home situated on prestigious Los Codona Avenue. Boasting 3 bedrooms and an expansive 1,766 sq ft floor plan with sun-filled living spaces, sparkling private swimming pool, private terrace, and immediate proximity to award-winning Torrance schools and South Bay beaches."
  },
  {
    id: "23930-los-codona-206",
    address: "23930 Los Codona Ave #206",
    city: "Torrance",
    state: "CA",
    zip: "90505",
    price: 699000,
    priceFormatted: "$699K",
    fullPriceFormatted: "$699,000",
    dateOrStatus: "Active Listing",
    propertyType: "Condo",
    beds: 2,
    baths: 2,
    sqft: 1080,
    pricePerSqFt: 647,
    status: "ACTIVE",
    role: "Listing Agent",
    isFeatured: true,
    highlights: ["Active Listing", "Resort-Style Pool & Grounds", "Private Balcony with Palms", "Torrance Walteria"],
    currentEstValue: "$699K",
    coordinates: [33.8087, -118.3499],
    image: imageAsset("properties/codona-condo.jpg"),
    gallery: [
      imageAsset("properties/codona-condo.jpg"),
      imageAsset("properties/codona-interior.jpg"),
      imageAsset("properties/codona-pool.jpg")
    ],
    description: "Charming and stylish two-bedroom Walteria condominium located in a manicured Spanish-tile community on Los Codona. Offers dual master bedroom suites, open living/dining, private balcony framed by swaying palms, resort pool, and serene South Bay coastal breezes."
  },
  {
    id: "23812-los-codona",
    address: "23812 Los Codona Ave",
    city: "Torrance",
    state: "CA",
    zip: "90505",
    price: 1298000,
    priceFormatted: "$1.3M",
    fullPriceFormatted: "$1,298,000",
    dateOrStatus: "Active Listing",
    propertyType: "House",
    beds: 3,
    baths: 2.5,
    sqft: 1994,
    pricePerSqFt: 651,
    status: "ACTIVE",
    role: "Listing Agent",
    isFeatured: true,
    highlights: ["Active Listing", "1,994 Sq Ft Modern Interior", "Designer Kitchen & High Ceilings", "Prime Torrance Location"],
    currentEstValue: "$1.3M",
    coordinates: [33.8101, -118.3492],
    image: imageAsset("properties/codona-interior.jpg"),
    gallery: [
      imageAsset("properties/codona-interior.jpg"),
      imageAsset("properties/codona-pool.jpg"),
      imageAsset("properties/codona-24263.jpg")
    ],
    description: "Sophisticated two-story Walteria residence offering nearly 2,000 square feet of curated design, towering ceiling lines, chef's gourmet kitchen with gold hardware, wide-plank oak flooring, and sliding glass wall connecting to an entertainer's outdoor courtyard."
  },

  // ==========================================
  // VERIFIED CLOSED SALES (Homes.com MLS Data)
  // ==========================================
  {
    id: "7721-bell-ave",
    address: "7721 Bell Ave",
    city: "Los Angeles",
    state: "CA",
    zip: "90001",
    price: 840000,
    priceFormatted: "$840K",
    fullPriceFormatted: "$840,000",
    dateOrStatus: "Sep 04, 2026",
    propertyType: "Multifamily",
    beds: 6,
    baths: 3,
    sqft: 1568,
    pricePerSqFt: 536,
    status: "SOLD",
    role: "Listing Agent",
    highlights: ["5% Above List Price", "71 Days on Market", "Dual Units / High Rental Yield"],
    currentEstValue: "$774K",
    daysOnMarket: 71,
    overListPercentage: 5,
    coordinates: [33.9686, -118.2325],
    image: imageAsset("properties/bell-ave.jpg"),
    description: "Exceptional duplex multifamily property featuring 6 bedrooms and 3 full baths across two standalone structures. Gated private driveway, separate meters, and strong income potential in a high-demand LA pocket."
  },
  {
    id: "1040-w-220th-st",
    address: "1040 W 220th St",
    city: "Torrance",
    state: "CA",
    zip: "90502",
    price: 805000,
    priceFormatted: "$805K",
    fullPriceFormatted: "$805,000",
    dateOrStatus: "Verified MLS Sale",
    propertyType: "House",
    beds: 3,
    baths: 2,
    sqft: 1240,
    pricePerSqFt: 649,
    status: "SOLD",
    role: "Buyer's Agent",
    highlights: ["Represented Buyer", "Prime Torrance Location", "Private Yard & Attached Garage"],
    coordinates: [33.8291, -118.2974],
    image: imageAsset("properties/torrance-220th.jpg"),
    description: "Classic Torrance single-family residence with bright living spaces, mature landscaping, sunny private yard, and convenient access to South Bay employment hubs, parks, and dining."
  },
  {
    id: "1314-w-71st-st",
    address: "1314 W 71st St",
    city: "Los Angeles",
    state: "CA",
    zip: "90044",
    price: 624000,
    priceFormatted: "$624K",
    fullPriceFormatted: "$624,000",
    dateOrStatus: "Dec 04, 2024",
    propertyType: "House",
    beds: 2,
    baths: 1,
    sqft: 816,
    pricePerSqFt: 765,
    status: "SOLD",
    role: "Listing Agent",
    highlights: ["4% Above List Price", "40 Days on Market", "Designer Modern Remodel"],
    currentEstValue: "$621K",
    daysOnMarket: 40,
    overListPercentage: 4,
    coordinates: [33.9749, -118.2988],
    image: imageAsset("properties/71st-living.jpg"),
    description: "Masterfully renovated modern bungalow boasting custom built-in millwork, sleek plaster fireplace, natural wide-plank oak flooring, clerestory greenery views, and turnkey designer finishes."
  },
  {
    id: "13231-gramercy-pl",
    address: "13231 Gramercy Place",
    city: "Gardena",
    state: "CA",
    zip: "90249",
    price: 885000,
    priceFormatted: "$885K",
    fullPriceFormatted: "$885,000",
    dateOrStatus: "Verified MLS Sale",
    propertyType: "House",
    beds: 3,
    baths: 2,
    sqft: 1450,
    pricePerSqFt: 610,
    status: "SOLD",
    role: "Buyer's Agent",
    highlights: ["Represented Buyer", "Brick & Iron Wrought Perimeter", "Expansive South Bay Lot"],
    coordinates: [33.9118, -118.3142],
    image: imageAsset("properties/gramercy-gardena.jpg"),
    description: "Charming Gardena residence framed by red brick and ornamental iron gating, Spanish tile trim accents, lush palm trees, and an inviting floor plan near Gardena community parks."
  },
  {
    id: "45620-barham-ave",
    address: "45620 Barham Ave",
    city: "Lancaster",
    state: "CA",
    zip: "93534",
    price: 550000,
    priceFormatted: "$550K",
    fullPriceFormatted: "$550,000",
    dateOrStatus: "Verified MLS Sale",
    propertyType: "House",
    beds: 4,
    baths: 3,
    sqft: 2150,
    pricePerSqFt: 255,
    status: "SOLD",
    role: "Buyer's Agent",
    highlights: ["Represented Buyer", "Spacious 4-Bed Layout", "Two-Car Garage & Low-Water Yard"],
    coordinates: [34.6853, -118.1561],
    image: imageAsset("properties/barham-lancaster.jpg"),
    description: "Immaculate two-story family home in a tranquil community featuring generous living spaces, dual-zone comfort, drought-tolerant desert landscaping, and warm evening curb appeal."
  },
  {
    id: "201-w-williams-st",
    address: "201 W Williams St",
    city: "Barstow",
    state: "CA",
    zip: "92311",
    price: 352000,
    priceFormatted: "$352K",
    fullPriceFormatted: "$352,000",
    dateOrStatus: "Verified MLS Sale",
    propertyType: "Multifamily",
    beds: 8,
    baths: 4,
    sqft: 2400,
    pricePerSqFt: 146,
    status: "SOLD",
    role: "Buyer's Agent",
    highlights: ["Represented Investor Buyer", "Multi-Unit Income Asset", "High Cap Rate Opportunity"],
    coordinates: [34.8986, -117.0228],
    image: imageAsset("properties/williams-barstow.jpg"),
    description: "Value-add residential income apartment building secured on behalf of an investor client looking for strong cash flow and portfolio diversification in Southern California's Inland corridor."
  }
];

// Compatibility exports
export const SOLD_PROPERTIES = ALL_PROPERTIES;
export const FEATURED_PROPERTIES = ALL_PROPERTIES.filter(p => p.status === 'ACTIVE');
export const CLOSED_SALES = ALL_PROPERTIES.filter(p => p.status === 'SOLD');

export const AREAS_EXPERIENCE: AreaExperience[] = [
  {
    id: "carson",
    name: "Carson",
    region: "South Bay, CA",
    salesCount: 2,
    description: "Alex's birthplace and an established South Bay community renowned for peaceful suburban tracts, parks, and central logistics proximity.",
    image: imageAsset("areas/carson.jpg"),
    tags: ["Birthplace", "South Bay", "Suburban Comfort"]
  },
  {
    id: "gardena",
    name: "Gardena",
    region: "South Bay, CA",
    salesCount: 2,
    description: "A culturally rich and culinary destination with welcoming neighborhoods, scenic community parks, and strong market appreciation.",
    image: imageAsset("areas/gardena.jpg"),
    tags: ["Parks", "Convenience", "Family Friendly"]
  },
  {
    id: "manchester-square",
    name: "Manchester Square",
    region: "Los Angeles, CA",
    salesCount: 1,
    description: "A vibrant pocket featuring community green spaces, water ponds, walking trails, and convenient LA metro accessibility.",
    image: imageAsset("areas/manchester-square.jpg"),
    tags: ["Parkside", "Urban Access", "Growth Corridor"]
  },
  {
    id: "central-lancaster",
    name: "Central Lancaster",
    region: "Antelope Valley, CA",
    salesCount: 1,
    description: "Spacious contemporary homes with mountain views, value-oriented price per square foot, and family-oriented amenities.",
    image: imageAsset("areas/lancaster.jpg"),
    tags: ["Value", "Mountain Views", "Spacious Living"]
  },
  {
    id: "vermont-slauson",
    name: "Vermont-Slauson",
    region: "South Los Angeles, CA",
    salesCount: 1,
    description: "An energetic urban corridor distinguished by artisan food markets, creative community hubs, and high rental return dynamics.",
    image: imageAsset("areas/vermont-slauson.jpg"),
    tags: ["Artisan Food Hubs", "Income Potential", "Urban Energy"]
  },
  {
    id: "west-carson",
    name: "West Carson",
    region: "South Bay, CA",
    salesCount: 1,
    description: "A coveted South Bay enclave bordering Torrance with tree-lined streets, classic mid-century homes, and excellent neighborhood quietude.",
    image: imageAsset("areas/west-carson.jpg"),
    tags: ["Tree-Lined", "Bordering Torrance", "Mid-Century Charm"]
  }
];

export const PRODUCTION_DATA = {
  overall: {
    totalDeals: 16,
    totalVolume: "$10.2M",
    avgSalePrice: "$638K",
    priceRange: "$550K – $940K",
    yearsReporting: "Prior 5-Year Reporting Period (Homes.com Verified)"
  },
  sellerSide: {
    deals: 2,
    totalVolume: "$1.46M",
    avgSalePrice: "$732K",
    priceRange: "$624K – $840K",
    percentageOfVolume: "14.3%"
  },
  buyerSide: {
    deals: 14,
    totalVolume: "$8.75M",
    avgSalePrice: "$625K",
    priceRange: "$160K – $940K",
    percentageOfVolume: "85.7%"
  }
};

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Khadijah B.",
    date: "June 26, 2026",
    rating: 5,
    source: "Yelp Verified Review",
    headline: "Patient, thorough, and guided us with immense care",
    content: "Alex Ogueke was patient, thorough, and guided us with immense care through every step of our home search. His local Torrance and South Bay knowledge saved us endless stress, and his negotiation skills helped us secure our home comfortably. We could not have asked for a better agent on our side!",
    location: "Torrance, CA"
  },
  {
    id: "rev-2",
    author: "Leah T.",
    date: "October 14, 2026",
    rating: 5,
    source: "Yelp Verified Review",
    headline: "Remarkably responsive and deeply knowledgeable",
    content: "Working with Alex was an outstanding experience. He was remarkably responsive, answered every question with honesty, and gave us absolute clarity on market trends and contract details. Highly recommend him for anyone buying or selling in Los Angeles and the South Bay!",
    location: "Los Angeles, CA"
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: "Are these active featured listings currently available in Torrance?",
    answer: "Yes. The featured Torrance properties (including on Los Codona Ave in Walteria) represent active market opportunities and exclusive broker listings affiliated with Keller Williams Realty South Bay. You can schedule a private showing or request disclosure packets directly through this site."
  },
  {
    question: "What areas does Alex Ogueke serve?",
    answer: "Alex specializes in Torrance, the South Bay (Carson, Gardena, Redondo Beach, Hawthorne), and the Greater Los Angeles metropolitan area. He also represents clients acquiring high-yield investment properties across Southern California."
  },
  {
    question: "What types of properties does Alex work with?",
    answer: "Alex works across residential and multi-unit real estate, including Single Family Houses, Luxury Homes, Condominiums, Townhouses, and Multifamily 2-4 unit income properties."
  },
  {
    question: "Does Alex represent both buyers and sellers?",
    answer: "Yes. Alex has closed 16 verified transactions totaling over $10.2M in volume, including both listing representation (such as 7721 Bell Ave sold 5% over list price and active listings on Los Codona) and buyer representation (such as 1040 W 220th St Torrance and 13231 Gramercy Pl Gardena)."
  },
  {
    question: "Does Alex work with first-time homebuyers?",
    answer: "Yes, first-time homebuyers are a core specialty. Alex takes the time to explain financing steps, pre-approval options, inspection reports, escrow timelines, and local down-payment assistance programs so buyers feel completely confident."
  },
  {
    question: "How can I contact Alex to schedule a private tour or consultation?",
    answer: "You can reach Alex directly by phone at (323) 915-1693, through his Keller Williams office in Torrance at 23670 Hawthorne Blvd Suite 100, or by submitting the consultation form on this site. Direct email inquiries can also be sent to alexogueke@kw.com."
  }
];

export const SERVICES_DATA = [
  {
    icon: "Home",
    title: "Buy a Home",
    description: "Exclusive access to off-market and active MLS listings in Torrance, private tour scheduling, comparative market evaluations, and tactical negotiation."
  },
  {
    icon: "TrendingUp",
    title: "Sell Your Property",
    description: "Targeted market valuation, staging coordination, professional photography, digital exposure, and seasoned representation for maximum net proceeds."
  },
  {
    icon: "Key",
    title: "First-Time Homebuyers",
    description: "Step-by-step guidance through loan qualification, purchase agreements, contingencies, and escrow closing without intimidation."
  },
  {
    icon: "BarChart3",
    title: "Real Estate Investments",
    description: "In-depth cash flow analysis, multi-family unit evaluation, 1031 exchange guidance, and identifying high-potential income properties."
  },
  {
    icon: "Shield",
    title: "Military & Relocation",
    description: "Dedicated relocation assistance and VA loan familiarity to support military families with seamless transitions in Southern California."
  },
  {
    icon: "Building",
    title: "Condos & Townhomes",
    description: "Specialized knowledge in South Bay HOA rules, amenities, reserves, and newly developed residential units in Torrance and Gardena."
  }
];
