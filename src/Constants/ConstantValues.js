import React from "react";
import CountryFlagsSvg from "../Assets/SVG/Flags/CountryFlagsSvg/CountryFlagsSvg";
const CDNPath = "https://ik.imagekit.io/valcom123/images/manseel";
export const isMediumScreens = "(max-width:1024px)";
export const isSmallScreens = "(max-width:768px)";
export const isExtraSmallScreens = "(max-width:540px)";

export const zIndexMediumScreens = "(max-width:960px)";
export const defaultCurrency = "AED";
export const defaultCountry = "United Arab Emirates";
export const defaultAgentABoutMe =
  "A dedicated and experienced real estate property consultant who helps clients find their dream homes.";

export const mobGrids = 12;
export const tabGrids = 6;
export const laptopGrids = 4;

export const defaultNeighborhoodDescription = `This up-and-coming neighborhood is home to a diverse range of residents and businesses.`;

export const agentsMenuItems = [
  {
    title: "Find an Agent",
    link: "/find-an-agent",
  },
  {
    title: "Become an Agent",
    link: "/become-an-agent",
  },
];

export const profileMenuItems = [{ title: "My Profile", link: "/profile" }];
export const HomeMarkerIcon = "/images/homeMarker.png";
export const PriceMarkerOneIcon = "/images/markerWithPrice1.png";
export const PriceMarkerTwoIcon = "/images/markerWithPrice2.png";
export const placeholderImage = "/images/placeholderImage.jpg";

export const authTokenPayload = {
  userRole: "CLIENT",
  registrationId: process.env.REACT_APP_MANSEEL_REGISTRATION_ID,
  clientId: process.env.REACT_APP_MANSEEL_CLIENT_ID,
  clientSecret: process.env.REACT_APP_MANSEEL_CLIENT_SECRET,
};

export const AuthURL = "/api/auth/token";
export const RefreshTokenURL = "/api/auth/refresh-token";
export const UserLoginURL = "/api/users/login";
export const UserLogoutURL = "/api/users/logout";
export const UserDetailURL = "/api/users/account/details";
export const ResetUserPasswordURL = "/api/email/otp/reset-password";
export const smsOtpURL = "/api/sms/otp/send";
export const emailOtpURL = "/api/email/otp/send";
export const validateSmsOtpURL = "/api/sms/otp/validate";
export const validateEmailOtpURL = "/api/email/otp/validate";
export const signUpURL = "/api/users/signup";
export const contactAgentEmail = "/api/email/agents/contact";
export const exclusiveListingsURL = "api/listings/exclusive";
export const buildingDetailsURL = "api/building/details";
export const agentDetailsURL = "api/agents/details";
export const contactAgentEmailURL = "/api/email/agents/contact";
export const agentListingsURL = "/api/listings/agent-listings";
export const updateUserPasswordURL = "/api/users/update-password";
export const updateAccountDetailsURL = "/api/users/account/updates";
export const AllListingsURL = "/api/listings/all";
export const SavedPropertyURL = "/api/saved/properties";
export const SavedBuildingURL = "/api/saved/buildings";
export const SavedSearchesgURL = "/api/saved/searches";
export const SavedAgentsgURL = "/api/saved/agents";
export const listingsByBuildingURL = "/api/listings/building";
export const similarBuildingsURL = "/api/building/similar/details";
export const allDataSearchURL = "/api/search/listings/all-search-data";
export const similarHomesURL = "/api/listings/similar";
export const filterSearchURL = "/api/listings/filter";
export const subscribeURL = "/api/saved/subscription";
export const allCountryStatesCitiesURL ='api/search/listings/locations-data'

export const defaultAgentContactNumber = "+971 4 492 7000";
export const defaultAgentContactEmail = "hello@valcom.ae";
export const mapAllListingsPayload = {
  countryName: "United Arab Emirates",
  // portal: "Propertyfinder",
};

export const exploreMenuItems = [
  {
    title: "New Developments",
    link: "/new-developments",
  },
  {
    title: "City Guides",
    link: "/city-guides",
  },
  {
    title: "Area Guides",
    link: "/city-guides",
  },
  {
    title: "Building Guides",
    link: "/building-guides",
  },

  {
    title: "Property Management",
    link: "/property-management",
  },
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "Mortgages",
    link: "/mortgages",
  },
  {
    title: "AREICO Institute",
    link: "/AREICO-institute",
  },
  {
    title: "Citizenship Services",
    link: "/citizenship-services",
  },
  {
    title: "International Properties",
    link: "/international-properties",
  },
  {
    title: "Building Classification",
    link: "/building-classification",
  },
];

export const languageMenuItems = [
  // { language: "العربية" },
  { language: "English" },
  // { language: "中文" },
  // { language: "Русский" },
  // { language: "Deutsch" },
  // { language: "Français" },
  // { language: "Español" },
  // { language: "Português" },
  // German
];

export const buildingTypes = [
  {
    header: "BuildingTypes",
    lowRise: ["1 - 3", "<9"],
    multiStory: ["4 - 6", "9 - 21"],
    midRise: ["7 - 9", "21 - 30"],
    smallHighRise: ["10 - 16", "30 - 50"],
    highRise: ["17 - 40", "50 - 99"],
    ultraHighRise: ["40 - 90", "100 - 299"],
    supertall: ["91 - 150", "300 - 599"],
    megatall: [">150", ">600"],
  },
];

export const mortgage = {
  pricePerMonth: "AED 12,345",
  totalAnnualPaymentDuration: "30",
  percentageInterest: "3.7%",
  paercentageDownPayment: "25%",
  mortgageFees: [
    [
      "AED 6,543",
      "4.0%",
      "Transfer fee",
      "This transfer fee must be paid to the Dubai Land Department (DLD) and is 4% of the purchase price.",
    ],
    [
      "AED 580",
      "0.2%",
      "Title Deed Fee",
      "The title deed fee is AED 580 for apartments, Villas and Offices or AED 430 for purchase of land. For off-plan or developer projects the fee is AED 40.",
    ],
    [
      "AED 4,200",
      "0.8%",
      "Trustee Fee",
      "The trustee fee is AED 2,000 + 5% VAT for properties below AED 500,000 purchase price and AED 4,000 for properties with a purchase price above AED 500,000.",
    ],
    [
      "AED 47,250",
      "2.0%",
      "Agency Fee",
      "Agency commission is usually 2% from the purchase price.",
    ],
    [
      "AED 1,700",
      "0.5%",
      "NOC Charges",
      "The developer is charging a fee for issuing a Non-Objection Certificate for the property seller. This also ensures the property buyer that all outstanding dues are cleared at the time of transfer.",
    ],
    ["AED 60,273", "7.5%", null, null],
  ],
};

export const detailItems = [
  "Building",
  "Developer",
  "Stories",
  "Units",
  "Property Use",
  "Year Built",
  "Units Type",
];

export const keys = [
  "building",
  "developer",
  "stories",
  "units",
  "propertyUse",
  "yearBuilt",
];

export const devlopmentImages = [
  {
    imgLabel: "Regalia",
    imgPath:
      "https://res.cloudinary.com/dameisncm/image/upload/v1730925443/realtor/pexels-mikebirdy-768877_rpdutj.jpg",
    price: "AED 627K",
    community: "Regalia",
    sizes: "Studio, 1, 2, 3",
  },
  {
    imgLabel: "Nara - The Valley",
    imgPath:
      "https://res.cloudinary.com/dameisncm/image/upload/v1730925442/realtor/pexels-felipepelaquim-2007529_raavfz.jpg",
    price: "AED 1,34M",
    community: "Nara - The Valley",
    sizes: "3 & 4 Bedroom Townhouses",
  },
  {
    imgLabel: "La Sirene – Port de La Mer",
    imgPath:
      "https://res.cloudinary.com/dameisncm/image/upload/v1730925442/realtor/pexels-lucaspezeta-3197765_xjzacn.jpg",
    price: "AED 1,29M",
    community: "La Sirene – Port de La Mer",
    sizes: "1, 2, 3, 4, 6 Bedroom Apartments",
  },
];

export const citiesImages = [
  {
    imgLabel: "Costa Careyes",
    imgPath:
      "https://res.cloudinary.com/dameisncm/image/upload/v1730925443/realtor/pexels-mikebirdy-768877_rpdutj.jpg",
    city: "Costa Careyes",
    country: "Mexico",
    countryFlag: <CountryFlagsSvg countryCode="MX" />,
  },
  {
    imgLabel: "Saanen, Bern",
    imgPath:
      "https://res.cloudinary.com/dameisncm/image/upload/v1730925442/realtor/pexels-felipepelaquim-2007529_raavfz.jpg",
    city: "Saanen, Bern",
    country: "Switzerland",
    countryFlag: <CountryFlagsSvg countryCode="CH" />,
  },
  {
    imgLabel: "Chatellerault, Nouvelle Aquitaine",
    imgPath:
      "https://res.cloudinary.com/dameisncm/image/upload/v1730925442/realtor/pexels-felipepelaquim-2007529_raavfz.jpg",
    city: "Chatellerault, Nouvelle Aquitaine",
    country: "France",
    countryFlag: <CountryFlagsSvg countryCode="FR" />,
  },
  {
    imgLabel: "Beverly Hills, California",
    imgPath:
      "https://res.cloudinary.com/dameisncm/image/upload/v1730925441/realtor/pexels-anon-213834-754277_g5ieno.jpg",
    city: "Beverly Hills, California",
    country: "USA",
    countryFlag: <CountryFlagsSvg countryCode="US" />,
  },
  {
    imgLabel: "Caldes de Malavella, Girona",
    imgPath:
      "https://res.cloudinary.com/dameisncm/image/upload/v1730925442/realtor/pexels-lucaspezeta-3197765_xjzacn.jpg",
    country: "Spain",
    countryFlag: <CountryFlagsSvg countryCode="SP" />,
  },
];

export const findArea = [
  {
    imgLabel: "Dubai Marina",
    imgPath: `https://res.cloudinary.com/dameisncm/image/upload/v1730927691/realtor/dubai_marina_dkvnyh.jpg`,
    link: "/specificneighbourhood/Dubai Marina",
    areaName:"Dubai Marina"
  },

  {
    imgLabel: "Downtown Dubai",
    imgPath: `https://res.cloudinary.com/dameisncm/image/upload/v1730927691/realtor/downtown_dubai_xsn12c.jpg`,
    link: "/specificneighbourhood/Downtown Dubai",
    areaName:"Downtown Dubai"
  },

  {
    imgLabel: "Business Bay",
    imgPath: `https://res.cloudinary.com/dameisncm/image/upload/v1730927691/realtor/business_bay_vsrwyx.jpg`,
    link:  "/comingsoon",
    areaName:"Business Bay"
    
  },

  {
    imgLabel: "Meydan",
    imgPath: `https://res.cloudinary.com/dameisncm/image/upload/v1730927692/realtor/6.Meydan_Masterplan_le7zx1.jpg`,
    link: "/comingsoon",
    areaName:"Al Meydan"
  },
  {
    imgLabel: "Palm Jumeirah",
    imgPath: `https://res.cloudinary.com/dameisncm/image/upload/v1730927691/realtor/palm_d89m9q.jpg`,
    link: "/comingsoon",
    areaName:"Palm Jumeirah"
    
  },
  {
    imgLabel: "Jumeirah Village Circle",
    imgPath: `https://res.cloudinary.com/dameisncm/image/upload/v1730927691/realtor/jvc_i1g1uf.jpg`,
    link:  "/comingsoon",
    areaName:"Jumeirah Village Circle"
  },
  {
    imgLabel: "The Greens and Views",
    imgPath: `https://res.cloudinary.com/dameisncm/image/upload/v1730927691/realtor/palm_d89m9q.jpg`,
    link: "/comingsoon",
    areaName:"The Greens and Views"
  },
  {
    imgLabel: "Arabian Residences",
    imgPath: `https://res.cloudinary.com/dameisncm/image/upload/v1730927976/realtor/arabs_soyfll.jpg`,
    link: "/comingsoon",
    areaName:"Arabian Residences"
  },
  {
    imgLabel: "Dubai International Financial Center (DIFC)",
    imgPath: `https://res.cloudinary.com/dameisncm/image/upload/v1730927976/realtor/arabs_soyfll.jpg`,
    link:  "/comingsoon",
    areaName:"Dubai International Financial Center (DIFC)"
  },
];

export const popularAreasLinks = [
  {
    name: "Business Bay Real Estate",
    link: "#",
    searchFilterObj: {
      value: "Business Bay",
      key: "Area",
      city: "Dubai",
      state: "Dubai",
      country: "",
      buyOrRent: "",
    },
  },
  {
    name: "Downtown Dubai Real Estate",
    link: "#",
    searchFilterObj: {
      value: "Downtown Dubai",
      key: "Area",
      city: "Dubai",
      state: "Dubai",
      country: "",
      buyOrRent: "",
    },
  },
  {
    name: "Dubai Marina Real Estate",
    link: "#",
    searchFilterObj: {
      value: "Dubai Marina",
      key: "Area",
      city: "Dubai",
      state: "Dubai",
      country: "",
      buyOrRent: "",
    },
  },
  {
    name: "Palm Jumeirah Real Estate",
    link: "#",
    searchFilterObj: {
      value: "Palm Jumeirah",
      key: "Area",
      city: "Dubai",
      state: "Dubai",
      country: "",
      buyOrRent: "",
    },
  },
  {
    name: "Dubai International Financial Center (DIFC)",
    link: "#",
    searchFilterObj: {
      value: "Dubai International Financial Center (DIFC)",
      key: "Area",
      city: "Dubai",
      state: "Dubai",
      country: "",
      buyOrRent: "",
    },
  },
  {
    name: "Al Barari Real Estate",
    link: "#",
    searchFilterObj: {
      value: "Al Barari",
      key: "Area",
      city: "Dubai",
      state: "Dubai",
      country: "",
      buyOrRent: "",
    },
  },
  {
    name: "Jumeirah Village Circle Real Estate",
    link: "#",
    searchFilterObj: {
      value: "Jumeirah Village Circle",
      key: "Area",
      city: "Dubai",
      state: "Dubai",
      country: "",
      buyOrRent: "",
    },
  },

  {
    name: "Dubai Hills",
    link: "#",
    searchFilterObj: {
      value: "Dubai Hills Estate",
      key: "Area",
      city: "Dubai",
      state: "Dubai",
      country: "",
      buyOrRent: "",
    },
  },
  {
    name: "Emirates Hills",
    link: "#",
    searchFilterObj: {
      value: "Emirates Hills",
      key: "Area",
      city: "Dubai",
      state: "Dubai",
      country: "",
      buyOrRent: "",
    },
  },
  {
    name: "Jumeirah Golf Estates",
    link: "#",
    searchFilterObj: {
      value: "Jumeirah Golf Estates",
      key: "Area",
      city: "Dubai",
      state: "Dubai",
      country: "",
      buyOrRent: "",
    },
  },
  {
    name: "Arabian Ranches",
    link: "#",
    searchFilterObj: {
      value: "Arabian Ranches",
      key: "Area",
      city: "Dubai",
      state: "Dubai",
      country: "",
      buyOrRent: "",
    },
  },
  {
    name: "Dubai Creek Harbor",
    link: "#",
    searchFilterObj: {
      value: "Dubai Creek Harbour",
      key: "Area",
      city: "Dubai",
      state: "Dubai",
      country: "",
      buyOrRent: "",
    },
  },
  {
    name: "Dubai South",
    link: "#",
    searchFilterObj: {
      value: "Dubai South",
      key: "Area",
      city: "Dubai",
      state: "Dubai",
      country: "",
      buyOrRent: "",
    },
  },
  {
    name: "Meydan",
    link: "#",
    searchFilterObj: {
      value: "Al Meydan",
      key: "Area",
      city: "Dubai",
      state: "Dubai",
      country: "",
      buyOrRent: "",
    },
  },

  {
    name: "Dubai Harbour",
    link: "#",
    searchFilterObj: {
      value: "Dubai Harbour",
      key: "Area",
      city: "Dubai",
      state: "Dubai",
      country: "",
      buyOrRent: "",
    },
  },
  {
    name: "Jumeirah",
    link: "#",
    searchFilterObj: {
      value: "Jumeirah",
      key: "Area",
      city: "Dubai",
      state: "Dubai",
      country: "",
      buyOrRent: "",
    },
  },
  {
    name: "Jumeirah Beach Residence",
    link: "#",
    searchFilterObj: {
      value: "Jumeirah Beach Residence",
      key: "Area",
      city: "Dubai",
      state: "Dubai",
      country: "",
      buyOrRent: "",
    },
  },
  {
    name: "Culture Village",
    link: "#",
    searchFilterObj: {
      value: "Culture Village",
      key: "Area",
      city: "Dubai",
      state: "Dubai",
      country: "",
      buyOrRent: "",
    },
  },
  {
    name: "Blue Waters Island",
    link: "#",
    searchFilterObj: {
      value: "Blue Waters Island",
      key: "Area",
      city: "Dubai",
      state: "Dubai",
      country: "",
      buyOrRent: "",
    },
  },
  {
    name: "Greens & Views",
    link: "#",
    searchFilterObj: {
      value: "Greens & Views",
      key: "Area",
      city: "Dubai",
      state: "Dubai",
      country: "",
      buyOrRent: "",
    },
  },
  {
    name: "Mohammed Bin Rashid City",
    link: "#",
    searchFilterObj: {
      value: "Mohammed Bin Rashid City",
      key: "Area",
      city: "Dubai",
      state: "Dubai",
      country: "",
      buyOrRent: "",
    },
  },
];

export const popularCitiesLinks = [
  {
    name: "Dubai",
    link: "#",
    searchFilterObj: {
      value: null,
      key: null,
      city: "Dubai",
      state: "Dubai",
      country: "",
      buyOrRent: "",
    },
  },
  {
    name: "Abu Dhabi",
    link: "#",
    searchFilterObj: {
      value: null,
      key: null,
      city: "Abu Dhabi",
      state: "Abu Dhabi",
      country: "",
      buyOrRent: "",
    },
  },
  {
    name: "Sharjah",
    link: "#",
    searchFilterObj: {
      value: null,
      key: null,
      city: "Sharjah",
      state: "Sharjah",
      country: "",
      buyOrRent: "",
    },
  },

  {
    name: "Ajman",
    link: "#",
    searchFilterObj: {
      value: null,
      key: null,
      city: "Ajman",
      state: "Ajman",
      country: "",
      buyOrRent: "",
    },
  },
  {
    name: "Ras Al Khaimah",
    link: "#",
    searchFilterObj: {
      value: null,
      key: null,
      city: "RAK City",
      state: "Ras Al Khaimah",
      country: "",
      buyOrRent: "",
    },
  },
  {
    name: "Fujairah",
    link: "#",
    searchFilterObj: {
      value: null,
      key: null,
      city: "Fujairah",
      state: "Fujairah",
      country: "",
      buyOrRent: "",
    },
  },

  {
    name: "Umm Al Quwain",
    link: "#",
    searchFilterObj: {
      value: null,
      key: null,
      city: "Umm al-Quwain",
      state: "Umm Al Quwain",
      country: "",
      buyOrRent: "",
    },
  },
  {
    name: "Al Ain",
    link: "#",
    searchFilterObj: {
      value: null,
      key: null,
      city: "Al Ain",
      state: "Abu Dhabi",
      country: "",
      buyOrRent: "",
    },
  },
  {
    name: "Hatta",
    link: "#",
    searchFilterObj: {
      value: null,
      key: null,
      city: "Hatta",
      state: "Dubai",
      country: "",
      buyOrRent: "",
    },
  },
];

export const floorPlanImages = [
  {
    imgLabel: "Ground Floor",
    imgPath:
      "https://www.arx.pt/wp-content/uploads/2016/08/Gr%C3%A2ndola-12-870x580.jpg",
    area: 123,
  },
  {
    imgLabel: "1st Floor",
    imgPath:
      "https://www.arx.pt/wp-content/uploads/2016/08/Gr%C3%A2ndola-13-870x580.jpg",
    area: 231,
  },
  {
    imgLabel: "2nd Floor",
    imgPath:
      "https://www.arx.pt/wp-content/uploads/2016/08/Gr%C3%A2ndola-14-870x580.jpg",
    area: 431,
  },
];

export const PropertyAmenities = [
  "Unfurnished",
  "Covered Parking",
  "Pets Allowed",
  "Built-in Kitchen appliances",
  "Balcony",
  "Built-in Wardrobes",
  "Maids Room",
  "Study Room",
  "Terrace",
];

export const BuildingAmenities = [
  "Built-in Kitchen appliances",
  "Balcony",
  "Built-in Wardrobes",
  "Unfurnished",
  "Covered Parking",
  "Study Room",
  "Terrace",
  "Pets Allowed",
  "Maids Room",
];

export const listingProperties = [
  {
    propertyType: "Apartment",
    building: "Millenium Binghatti Residence",
    referenceNo: "P-000578",

    BuildingAmenities: [
      "Barbecue Area",
      "Retail in Building",
      "View of water",
      "Central A/C",
      "24 Hour Security",
      "View of landmark",
      "Covered Parking",
      "Children Play Area",
      "Concierge",
      "Pool",
      "Private Garden",
      "Roof Deck",
      "Elevators",
      "Gym",
      "Children Play Area",
    ],
    buildingDescription:
      "Milano Giovanni Boutique Suites is a 14-storey, four-star serviced apartment building in Jumeirah Village Circle. Currently it is under construction and expected completion is June 2018. Milano Giovanni Boutique Suites is a 14-storey, four-star serviced apartment building in Jumeirah Village Circle. Currently it is under construction and expected completion is June 2018.",
    transitScore: "80",
    walkingScore: "100",
    bikingScore: "60",
    noiseScore: "60",
    greeneryScore: "60",
    // more to come
  },
  {
    propertyType: "Villa",
    building: "Residence",
    referenceNo: "P-000575",

    BuildingAmenities: [
      "Barbecue Area",
      "Retail in Building",
      "View of water",
      "Central A/C",
      "24 Hour Security",
      "View of landmark",
      "Covered Parking",
      "Children Play Area",
      "Concierge",
      "Pool",
      "Private Garden",
      "Roof Deck",
      "Elevators",
      "Gym",
      "Children Play Area",
    ],
    buildingDescription:
      "Milano Giovanni Boutique Suites is a 14-storey, four-star serviced apartment building in Jumeirah Village Circle. Currently it is under construction and expected completion is June 2018. Milano Giovanni Boutique Suites is a 14-storey, four-star serviced apartment building in Jumeirah Village Circle. Currently it is under construction and expected completion is June 2018.",
    transitScore: "80",
    walkingScore: "70",
    bikingScore: "100",
    noiseScore: "90",
    greeneryScore: "60",
    // more to come
  },
];

export const agentSectionTypes = {
  agentSection: "agentSection",
  otherAgents: "otherAgents",
  savedAgents: "savedAgents",
};

export const agentSectionHeadings = {
  listingAgents: "Listing Agents",
  buildingExpert: "Get in touch with a Building Expert",
};

export const virtualTourData = {
  title: "Virtual Tour",
  videoUrl: "https://www.youtube.com/embed/B4o8PvcqHC4",
  defaultHeight: "650",
};

export const scoringTypes = {
  locationScoring: "Location Scoring",
};

export const locationScoringFields = [
  {
    id: "transit",
    scoreType: "Transit",
    scoreValue: listingProperties[0].transitScore,
    rightIcon: "infoCircle",
    leftIcon: "subway",
    scoreDescription:
      'Transit score is a measure of how well a location is served by public transit. It matters also how fast major transport hubs can be reached. To calculate a Transit Score, we assign a "usefulness" value to nearby transit routes based on the frequency, type of route (metro, bus, train etc.), and distance to the nearest stop on the route. The "usefulness" of all nearby routes is summed and normalized to a score between 0 - 100.',
    categories: {
      excellentTransit: {
        heading: "Excellent Transit",
        range: "85-100",
        description: "Public transportation is in very close proximity",
      },
      goodTransit: {
        heading: "Good Transit",
        range: "50-84",
        description: "Public transportation options are nearby",
      },
      someTransit: {
        heading: "Some Transit",
        range: "25-49",
        description:
          "Public transportation is available but not in close proximity",
      },
      poorTransit: {
        heading: "Poor Transit",
        range: "0-24",
        description: "No Public transportation options are available",
      },
    },
    categoryMinWidth: "4vw",
  },
  {
    id: "walking",
    scoreType: "Walking",
    scoreValue: listingProperties[0].walkingScore,
    rightIcon: "infoCircle",
    leftIcon: "relaxingWalk",
    scoreDescription:
      "Walking Score measures the walkability or pedestrian friendliness of a building or property. For each address, we are analyzing walking routes to nearby amenities. Points are awarded based on the distance to amenities in each category. Amenities within a 5-minute walk (0,5 km) are given maximum points. A decay function is used to give points to more distant amenities, with no points given after a 30-minute walk.",
    categories: {
      walkersParadise: {
        heading: "Walker's Paradise",
        range: "90-100",
        description: "All daily errands do not require a car",
      },
      veryWalkable: {
        heading: "Very Walkable",
        range: "70-89",
        description: "Most errands can be accomplished on foot",
      },
      somewhatWalkable: {
        heading: "Somewhat Walkable",
        range: "50-69",
        description: "Some errands can be accomplished on foot",
      },
      mostlyCarDependent: {
        heading: "Mostly Car-Dependent",
        range: "25-49",
        description: "Almost all errands require a car",
      },
      carDependent: {
        heading: "Car-Dependent",
        range: "0-24",
        description: "A car is required",
      },
    },
    categoryMinWidth: "4vw",
  },
  {
    id: "biking",
    scoreType: "Biking",
    scoreValue: listingProperties[0].bikingScore,
    rightIcon: "infoCircle",
    leftIcon: "cycling",
    scoreDescription:
      "Biking score measures whether an area is good for biking. For a given location, a Bike Score is calculated by measuring bike infrastructure (lanes, trails, etc.), hills, destinations and road connectivity, and the number of bike commuters.",
    categories: {
      bikersParadise: {
        heading: "Biker's Paradise",
        range: "85-100",
        description: "All errands can be accomplished on a bike",
      },
      veryBikeable: {
        heading: "Very Bikeable",
        range: "50-84",
        description: "Biking is convenient for almost every trip",
      },
      bikeable: {
        heading: "Bikeable",
        range: "25-49",
        description: "Some infrastructure for biking",
      },
      carDependent: {
        heading: "Somewhat Bikeable",
        range: "0-24",
        description: "Minimal or no bike infrastructure",
      },
    },
    categoryMinWidth: "4vw",
  },
  {
    id: "noise",
    scoreType: "Noise",
    scoreValue: listingProperties[0].noiseScore,
    rightIcon: "infoCircle",
    leftIcon: "megaphone",
    scoreDescription:
      "Noise score is a measure of how quiet the environment of a property or building is. To calculate we measure the level of noise in decibel during different times of the day and also during the night.",
    categories: {
      peaceLoversParadise: {
        heading: "Peace Lover's Paradise",
        range: "85-100",
        description:
          "The building or property is in a very quiet area. No noise from highways or streets can be heard.",
      },
      veryQuietArea: {
        heading: "Very Quiet Area",
        range: "50-84",
        description:
          "Some noise can be heard but this area is generally very quiet.",
      },
      somewhatNoisyArea: {
        heading: "Somewhat Noisy Area",
        range: "25-49",
        description: "Traffic noise specifically during the day.",
      },
      veryNoisyArea: {
        heading: "Very Noisy Area",
        range: "0-24",
        description: "Consistent noise during day and night.",
      },
    },
    categoryMinWidth: "4vw",
  },
  {
    id: "greenery",
    scoreType: "Greenery",
    scoreValue: listingProperties[0].greeneryScore,
    rightIcon: "infoCircle",
    leftIcon: "greenery",
    scoreDescription:
      "Greenery score is a measure of how well a building or property is positioned within landscaped areas. To calculate we measure size and distance of green spaces within proximity of the building or the community.",
    categories: {
      natureLoversParadise: {
        heading: "Nature Lover's Paradise",
        range: "85-100",
        description:
          "The area or community consists of lush greenery with lakes, parks, streams and beautifully landscaped gardens",
      },
      veryQuietArea: {
        heading: "Very Green Area",
        range: "50-84",
        description:
          "The area or community is beautifully landscaped and parks and green spaces are close by",
      },
      somewhatNoisyArea: {
        heading: "Somewhat Green Area",
        range: "25-49",
        description: "Some parks or green spaces are within walking distance",
      },
      concreteJungle: {
        heading: "Concrete Jungle",
        range: "0-24",
        description: "No Parks or green spaces are within close proximity.",
      },
    },
    categoryMinWidth: "4vw",
  },
];

export const NearbySchoolsData = {
  title: `Schools near ${listingProperties[0].building}`,
  tableData: [
    {
      school: "Fairgreen International School",
      type: "Girls school",
      curriculum: "British",
      grades: "K-8",
      distance: "2 KM",
      pricing: "AED 18,078",
      rating: "Weak",
    },
    {
      school: "Victory Heights Primary School",
      type: "Boys school",
      curriculum: "American",
      grades: "PK-12",
      distance: "3.7 KM",
      pricing: "AED 51,000",
      rating: "Acceptable",
    },
    {
      school: "The Royal Gramma School Guildford",
      type: "Co-Education",
      curriculum: "French",
      grades: "PK-5",
      distance: "1.3 KM",
      pricing: "AED 87,000",
      rating: "Outstanding",
    },
    {
      school: "Greenfield International School",
      type: "Boys school",
      curriculum: "Arabic",
      grades: "PK-5",
      distance: "5.7 KM",
      pricing: "AED 24,000",
      rating: "Good",
    },
  ],
  khdaAttribution:
    "School ratings are provided by KHDA (Knowledge and Human Development Authority). This information is for reference only. Proximity is no guarantee for enrollment.",
  btnLearnMore:
    "Learn more about nearby Restaurants, Supermarkets, Attractions",
  endIcon: "arrowRight",
  endIconColor: "white",
  dropDownText: {
    collapsed: "View More",
    expanded: "View Less",
  },
  dropDownIcons: {
    collapsed: "arrowDown",
    expanded: "arrowRight",
  },
};

export const nearbySchoolsHeadingInfoData = {
  rating: {
    icon: "infoCircle",
    iconVariant: "light",
    mainHeading: "Schools are rated in 5 categories:",
    headingBgColor: "#777575",
    headingColor: "white",
    topDescription:
      "The Rating is done through valuations by the Knowledge and Human Development Authority (KHDA)",
    heading: "Schools are rated in 5 categories:",
    description:
      "The Rating is done through valuations by the Knowledge and Human Development Authority (KHDA) ",
    categories: {
      Outstanding: "An exceptionally high quality of performance or practice",
      VeryGood: "The quality of performance exceeds",
      Good: "The expected level of quality for every school",
      Acceptable: "The minimum level of acceptability required",
      Weak: "Quality not yet at the level acceptable",
    },
    categoryMinWidth: "7vw",
    ratingMethodHeading: "The Rating method:",
    ratingMethodDesc:
      "KHDA is inspecting and evaluating schools. The main criteria are academic attainment in core subjects, the learning environment, the achievement of students, the quality of school leadership, attitudes of students, Islamic and Arabic provisions in the curriculum, the self-evaluation process of the school.",
    anchorVertical: "bottom",
    anchorHorizontal: "right",
    transformVertical: "top",
    transformHorizontal: "right",
  },
};

export const infoHeadersIcon = {
  inDine: {
    icon: "inDine",
    iconVariant: "light",
  },
  takeAway: {
    icon: "takeAway",
    iconVariant: "light",
  },
  alcoholBeverage: {
    icon: "alcoholBeverage",
    iconVariant: "light",
  },
  shisha: {
    icon: "shisha",
    iconVariant: "light",
  },
  delivery: {
    icon: "delivery",
    iconVariant: "light",
  },
  bakery: {
    icon: "bakery",
    iconVariant: "light",
  },
  butchery: {
    icon: "butchery",
    iconVariant: "light",
  },
  fish: {
    icon: "fish",
    iconVariant: "light",
  },
  pig: {
    icon: "pig",
    iconVariant: "light",
  },
};

export const NearbyRestaurantsData = {
  title: `Schools near ${listingProperties[0].building}`,
  tableData: [
    {
      restaurant: "Fairgreen International School",
      cuisine: "Girls school",
      ambience: "British",
      inDine: "No",

      takeAway: "Yes",
      delivery: "Yes",
      alcoholBeverage: "No",
      shisha: "No",
      distance: "400 m",
      pricing: 20,
      rating: 1.5,
    },
    {
      restaurant: "Victory Heights Primary School",
      cuisine: "Boys school",
      ambience: "American",
      inDine: "Yes",
      takeAway: "Yes",
      delivery: "Yes",

      alcoholBeverage: "Yes",
      shisha: "Yes",
      distance: "3.7 KM",
      pricing: 70,
      rating: 2.5,
    },
    {
      restaurant: "The Royal Gramma School Guildford",
      cuisine: "Co-Education",
      ambience: "French",
      inDine: "No",

      takeAway: "Yes",
      delivery: "Yes",

      alcoholBeverage: "Yes",
      shisha: "Yes",
      distance: "200 m",
      pricing: 87,
      rating: 2.5,
    },
    {
      restaurant: "Greenfield International School",
      cuisine: "Boys school",
      ambience: "Arabic",
      inDine: "Yes",

      takeAway: "5.7 KM",
      delivery: "Yes",

      alcoholBeverage: "No",
      shisha: "Yes",
      distance: "200 m",
      pricing: 87,
      rating: 3.5,
    },
    {
      restaurant: "Fairgreen International School",
      cuisine: "Girls school",
      ambience: "British",
      inDine: "K-8",

      takeAway: "2 KM",
      delivery: "Yes",

      alcoholBeverage: "No",
      shisha: "Yes",
      distance: "200 m",
      pricing: 87,
      rating: 1,
    },
  ],
  dropDownText: {
    collapsed: "View More",
    expanded: "View Less",
  },
  dropDownIcons: {
    collapsed: "arrowDown",
    expanded: "arrowRight",
  },
  khdaAttribution:
    "School ratings 1e provided by KHDA (Knowledge and Human Development Authority). This information is for reference only. Proximity is no guarantee for enrollment.",
  btnLearnMore:
    "Learn more about nearby Restaurants, Supermarkets, Attractions",
  endIcon: "arrowRight",
  endIconColor: "white",
};

export const similarBuildingsData = [
  {
    imgPath:
      "https://res.cloudinary.com/davfxaivc/image/upload/v1684998540/listingImages/listing_w_watermark_2x_jwcxvc.jpg",
    buildingName: "Milano Boutique Residences",
    community: "Jumeirah Village Circle",
    floors: "18",
    units: "117",
    listings: "1000",
  },
  {
    imgPath:
      "https://res.cloudinary.com/davfxaivc/image/upload/v1684998540/listingImages/listing_w_watermark_2x_jwcxvc.jpg",
    buildingName: "Milano Boutique Residences",
    community: "Jumeirah Village Circle",
    floors: "18",
    units: "117",
    listings: "1000",
  },
  {
    imgPath:
      "https://res.cloudinary.com/davfxaivc/image/upload/v1684998540/listingImages/listing_w_watermark_2x_jwcxvc.jpg",
    buildingName: "Milano Boutique Residences",
    community: "Jumeirah Village Circle",
    floors: "18",
    units: "117",
    listings: "1000",
  },
  {
    imgPath:
      "https://res.cloudinary.com/davfxaivc/image/upload/v1684998540/listingImages/listing_w_watermark_2x_jwcxvc.jpg",
    buildingName: "Milano Boutique Residences",
    community: "Jumeirah Village Circle",
    floors: "18",
    units: "117",
    listings: "1000",
  },
  {
    imgPath:
      "https://res.cloudinary.com/davfxaivc/image/upload/v1684998540/listingImages/listing_w_watermark_2x_jwcxvc.jpg",
    buildingName: "Milano Boutique Residences",
    community: "Jumeirah Village Circle",
    floors: "18",
    units: "117",
    listings: "1000",
  },
];

export const similarBuildingsMetaDataFields = {
  floors: "Floors",
  units: "Units",
  listings: "Listings",
};

export const NearbySupermarketsData = {
  title: `Schools near ${listingProperties[0].building}`,
  tableData: [
    {
      supermarket: "Choithrams",
      Type: "Grocery Store",
      bakery: "Yes",
      butchery: "No",
      fish: "No",
      pig: "No",
      delivery: "Yes",
      distance: "400 m",
      pricing: 2,
      rating: 3.5,
    },
    {
      supermarket: "Carrefour",
      Type: "Supermarket",
      bakery: "Yes",
      butchery: "No",
      fish: "No",
      pig: "No",
      delivery: "Yes",
      distance: "400 m",
      pricing: 3,
      rating: 1.5,
    },
    {
      supermarket: "Lulu",
      Type: "Hypermarket",
      bakery: "No",
      butchery: "Yes",
      fish: "No",
      pig: "Yes",
      delivery: "Yes",
      distance: "400 m",
      pricing: 4,
      rating: 1.5,
    },
    {
      supermarket: "Choithrams",
      Type: "Girls school",
      bakery: "Yes",
      butchery: "YES",
      fish: "yes",
      pig: "Yes",
      delivery: "No",
      distance: "400 m",
      pricing: 1,
      rating: 1.5,
    },
    {
      supermarket: "Choithrams",
      Type: "Girls school",
      bakery: "Yes",
      butchery: "No",
      fish: "No",
      pig: "No",
      delivery: "Yes",
      distance: "400 m",
      pricing: 20,
      rating: 1.5,
    },
  ],
  khdaAttribution:
    "School ratings 1e provided by KHDA (Knowledge and Human Development Authority). This information is for reference only. Proximity is no guarantee for enrollment.",
  btnLearnMore:
    "Learn more about nearby Restaurants, Supermarkets, Attractions",
  endIcon: "arrowRight",
  endIconColor: "white",
  dropDownText: {
    collapsed: "View More",
    expanded: "View Less",
  },
  dropDownIcons: {
    collapsed: "arrowDown",
    expanded: "arrowRight",
  },
};

export const NearbyAttractionsData = {
  title: `Schools near ${listingProperties[0].building}`,
  tableData: [
    {
      Name: "Dubai Miracle Garden",
      Type: "Out Door",

      distance: "400 m",
      pricing: 2,
      rating: 3.5,
    },
    {
      Name: "Dubai Autodrome",
      Type: "Race Track",

      distance: "400 m",
      pricing: 3,
      rating: 1.5,
    },
    {
      supermarket: "Dubai Butterfly Garden",
      Type: "Outdoor Garden",

      distance: "400 m",
      pricing: 4,
      rating: 1.5,
    },
    {
      supermarket: "Choithrams",
      Type: "Girls school",
      bakery: "Yes",
      butchery: "YES",
      fish: "yes",
      pig: "Yes",
      delivery: "No",
      distance: "400 m",
      pricing: 1,
      rating: 1.5,
    },
    {
      supermarket: "Choithrams",
      Type: "Girls school",
      bakery: "Yes",
      butchery: "No",
      fish: "No",
      pig: "No",
      delivery: "Yes",
      distance: "400 m",
      pricing: 20,
      rating: 1.5,
    },
  ],
  khdaAttribution:
    "School ratings 1e provided by KHDA (Knowledge and Human Development Authority). This information is for reference only. Proximity is no guarantee for enrollment.",
  btnLearnMore:
    "Learn more about nearby Restaurants, Supermarkets, Attractions",
  endIcon: "arrowRight",
  endIconColor: "white",
  dropDownText: {
    collapsed: "View More",
    expanded: "View Less",
  },
  dropDownIcons: {
    collapsed: "arrowDown",
    expanded: "arrowRight",
  },
};

export const nearbyAroundCornerHeadingInfoData = {
  rating: {
    icon: "infoCircle",
    iconVariant: "light",
    mainHeading: "Schools are rated in 5 categories:",
    headingBgColor: "#777575",
    headingColor: "white",
    heading: "this is rating",
    description:
      "The Rating is done through valuations by the Knowledge and Human ",

    topDescription:
      "The Rating is done through valuations by the Knowledge and Human Development Authority (KHDA)",
    categories: {
      Outstanding: "An exceptionally high quality of performance or practice",
      VeryGood: "The quality of performance exceeds",
      Good: "The expected level of quality for every school",
      Acceptable: "The minimum level of acceptability required",
      Weak: "Quality not yet at the level acceptable",
    },
    categoryMinWidth: "7vw",
    ratingMethodHeading: "The Rating method:",
    ratingMethodDesc:
      "KHDA is inspecting and evaluating schools. The main criteria are academic attainment in core subjects, the learning environment, the achievement of students, the quality of school leadership, attitudes of students, Islamic and Arabic provisions in the curriculum, the self-evaluation process of the school.",
    anchorVertical: "bottom",
    anchorHorizontal: "right",
    transformVertical: "top",
    transformHorizontal: "right",
  },
  inDine: {
    icon: "infoCircle",
    iconVariant: "light",
    mainHeading: "Schools are rated in 5 categories:",
    headingBgColor: "#808080",
    headingColor: "white",
    topDescription:
      "The Rating is done through valuations by the Knowledge and Human Development Authority (KHDA)",
    heading: "this is rating",
    description: "in Dine ",
    categories: {
      Outstanding: "An exceptionally high quality of performance or practice",
      VeryGood: "The quality of performance exceeds",
      Good: "The expected level of quality for every school",
      Acceptable: "The minimum level of acceptability required",
      Weak: "Quality not yet at the level acceptable",
    },
    categoryMinWidth: "7vw",
    ratingMethodHeading: "The Rating method:",
    ratingMethodDesc:
      "KHDA is inspecting and evaluating schools. The main criteria are academic attainment in core subjects, the learning environment, the achievement of students, the quality of school leadership, attitudes of students, Islamic and Arabic provisions in the curriculum, the self-evaluation process of the school.",
    anchorVertical: "bottom",
    anchorHorizontal: "right",
    transformVertical: "top",
    transformHorizontal: "right",
  },
  takeAway: {
    icon: "infoCircle",
    iconVariant: "light",
    mainHeading: "Schools are rated in 5 categories:",
    headingBgColor: "#808080",
    headingColor: "white",
    topDescription:
      "The Rating is done through valuations by the Knowledge and Human Development Authority (KHDA)",
    heading: "this is rating",
    description: "take away",
    categories: {
      Outstanding: "An exceptionally high quality of performance or practice",
      VeryGood: "The quality of performance exceeds",
      Good: "The expected level of quality for every school",
      Acceptable: "The minimum level of acceptability required",
      Weak: "Quality not yet at the level acceptable",
    },
    categoryMinWidth: "7vw",
    ratingMethodHeading: "The Rating method:",
    ratingMethodDesc:
      "KHDA is inspecting and evaluating schools. The main criteria are academic attainment in core subjects, the learning environment, the achievement of students, the quality of school leadership, attitudes of students, Islamic and Arabic provisions in the curriculum, the self-evaluation process of the school.",
    anchorVertical: "bottom",
    anchorHorizontal: "right",
    transformVertical: "top",
    transformHorizontal: "right",
  },
  shisha: {
    icon: "infoCircle",
    iconVariant: "light",
    mainHeading: "Schools are rated in 5 categories:",
    headingBgColor: "#808080",
    headingColor: "white",
    topDescription:
      "The Rating is done through valuations by the Knowledge and Human Development Authority (KHDA)",
    heading: "this is rating",
    description: "in gthe shisha",
    categories: {
      Outstanding: "An exceptionally high quality of performance or practice",
      VeryGood: "The quality of performance exceeds",
      Good: "The expected level of quality for every school",
      Acceptable: "The minimum level of acceptability required",
      Weak: "Quality not yet at the level acceptable",
    },
    categoryMinWidth: "7vw",
    ratingMethodHeading: "The Rating method:",
    ratingMethodDesc:
      "KHDA is inspecting and evaluating schools. The main criteria are academic attainment in core subjects, the learning environment, the achievement of students, the quality of school leadership, attitudes of students, Islamic and Arabic provisions in the curriculum, the self-evaluation process of the school.",
    anchorVertical: "bottom",
    anchorHorizontal: "right",
    transformVertical: "top",
    transformHorizontal: "right",
  },
  delivery: {
    icon: "infoCircle",
    iconVariant: "light",
    mainHeading: "Schools are rated in 5 categories:",
    headingBgColor: "#808080",
    headingColor: "white",
    topDescription:
      "The Rating is done through valuations by the Knowledge and Human Development Authority (KHDA)",
    heading: "this is rating",
    description: "delivery it is ",
    categories: {
      Outstanding: "An exceptionally high quality of performance or practice",
      VeryGood: "The quality of performance exceeds",
      Good: "The expected level of quality for every school",
      Acceptable: "The minimum level of acceptability required",
      Weak: "Quality not yet at the level acceptable",
    },
    categoryMinWidth: "7vw",
    ratingMethodHeading: "The Rating method:",
    ratingMethodDesc:
      "KHDA is inspecting and evaluating schools. The main criteria are academic attainment in core subjects, the learning environment, the achievement of students, the quality of school leadership, attitudes of students, Islamic and Arabic provisions in the curriculum, the self-evaluation process of the school.",
    anchorVertical: "bottom",
    anchorHorizontal: "right",
    transformVertical: "top",
    transformHorizontal: "right",
  },
  alcoholBeverage: {
    icon: "infoCircle",
    iconVariant: "light",
    mainHeading: "Schools are rated in 5 categories:",
    headingBgColor: "#808080",
    headingColor: "white",
    topDescription:
      "The Rating is done through valuations by the Knowledge and Human Development Authority (KHDA)",
    heading: "this is rating",
    description: "take tei",
    categories: {
      Outstanding: "An exceptionally high quality of performance or practice",
      VeryGood: "The quality of performance exceeds",
      Good: "The expected level of quality for every school",
      Acceptable: "The minimum level of acceptability required",
      Weak: "Quality not yet at the level acceptable",
    },
    categoryMinWidth: "7vw",
    ratingMethodHeading: "The Rating method:",
    ratingMethodDesc:
      "KHDA is inspecting and evaluating schools. The main criteria are academic attainment in core subjects, the learning environment, the achievement of students, the quality of school leadership, attitudes of students, Islamic and Arabic provisions in the curriculum, the self-evaluation process of the school.",
    anchorVertical: "bottom",
    anchorHorizontal: "right",
    transformVertical: "top",
    transformHorizontal: "right",
  },
  type: {
    icon: "infoCircle",
    iconVariant: "light",
    heading: "this is rating",
    description:
      "The Rating is done through valuations by the Knowledge and Human Development Authority (KHDA)",
    mainHeading: "Schools are rated in 5 categories:",
    headingBgColor: "#777575",
    headingColor: "white",
    topDescription:
      "The Rating is done through valuations by the Knowledge and Human Development Authority (KHDA)",
    categories: {
      Outstanding: "An exceptionally high quality of performance or practice",
      VeryGood: "The quality of performance exceeds",
      Good: "The expected level of quality for every school",
      Acceptable: "The minimum level of acceptability required",
      Weak: "Quality not yet at the level acceptable",
    },
    categoryMinWidth: "7vw",
    ratingMethodHeading: "The Rating method:",
    ratingMethodDesc:
      "KHDA is inspecting and evaluating schools. The main criteria are academic attainment in core subjects, the learning environment, the achievement of students, the quality of school leadership, attitudes of students, Islamic and Arabic provisions in the curriculum, the self-evaluation process of the school.",
    anchorVertical: "bottom",
    anchorHorizontal: "right",
    transformVertical: "top",
    transformHorizontal: "right",
  },
  fish: {
    icon: "infoCircle",
    iconVariant: "light",
    mainHeading: "Schools are rated in 5 categories:",
    headingBgColor: "#777575",
    headingColor: "white",
    topDescription:
      "The Rating is done through valuations by the Knowledge and Human Development Authority (KHDA)",
    heading: "this is fish",
    description:
      "The Rating is done through valuations by the Knowledge and Human ",
    categories: {
      Outstanding: "An exceptionally high quality of performance or practice",
      VeryGood: "The quality of performance exceeds",
      Good: "The expected level of quality for every school",
      Acceptable: "The minimum level of acceptability required",
      Weak: "Quality not yet at the level acceptable",
    },
    categoryMinWidth: "7vw",
    ratingMethodHeading: "The Rating method:",
    ratingMethodDesc:
      "KHDA is inspecting and evaluating schools. The main criteria are academic attainment in core subjects, the learning environment, the achievement of students, the quality of school leadership, attitudes of students, Islamic and Arabic provisions in the curriculum, the self-evaluation process of the school.",
    anchorVertical: "bottom",
    anchorHorizontal: "right",
    transformVertical: "top",
    transformHorizontal: "right",
  },
  butchery: {
    icon: "infoCircle",
    iconVariant: "light",
    mainHeading: "Schools are rated in 5 categories:",
    headingBgColor: "#777575",
    headingColor: "white",
    topDescription:
      "The Rating is done through valuations by the Knowledge and Human Development Authority (KHDA)",
    heading: "this is butchery",
    description:
      "The Rating is done through valuations by the Knowledge and Human ",
    categories: {
      Outstanding: "An exceptionally high quality of performance or practice",
      VeryGood: "The quality of performance exceeds",
      Good: "The expected level of quality for every school",
      Acceptable: "The minimum level of acceptability required",
      Weak: "Quality not yet at the level acceptable",
    },
    categoryMinWidth: "7vw",
    ratingMethodHeading: "The Rating method:",
    ratingMethodDesc:
      "KHDA is inspecting and evaluating schools. The main criteria are academic attainment in core subjects, the learning environment, the achievement of students, the quality of school leadership, attitudes of students, Islamic and Arabic provisions in the curriculum, the self-evaluation process of the school.",
    anchorVertical: "bottom",
    anchorHorizontal: "right",
    transformVertical: "top",
    transformHorizontal: "right",
  },
  bakery: {
    icon: "infoCircle",
    iconVariant: "light",
    mainHeading: "Schools are rated in 5 categories:",
    headingBgColor: "#777575",
    headingColor: "white",
    topDescription:
      "The Rating is done through valuations by the Knowledge and Human Development Authority (KHDA)",
    heading: "this is bakey",
    description:
      "The Rating is done through valuations by the Knowledge and Human ",
    categories: {
      Outstanding: "An exceptionally high quality of performance or practice",
      VeryGood: "The quality of performance exceeds",
      Good: "The expected level of quality for every school",
      Acceptable: "The minimum level of acceptability required",
      Weak: "Quality not yet at the level acceptable",
    },
    categoryMinWidth: "7vw",
    ratingMethodHeading: "The Rating method:",
    ratingMethodDesc:
      "KHDA is inspecting and evaluating schools. The main criteria are academic attainment in core subjects, the learning environment, the achievement of students, the quality of school leadership, attitudes of students, Islamic and Arabic provisions in the curriculum, the self-evaluation process of the school.",
    anchorVertical: "bottom",
    anchorHorizontal: "right",
    transformVertical: "top",
    transformHorizontal: "right",
  },
  pig: {
    icon: "infoCircle",
    iconVariant: "light",
    mainHeading: "Schools are rated in 5 categories:",
    headingBgColor: "#777575",
    headingColor: "white",
    topDescription:
      "The Rating is done through valuations by the Knowledge and Human Development Authority (KHDA)",
    heading: "this is pork",
    description:
      "The Rating is done through valuations by the Knowledge and Human ",
    categories: {
      Outstanding: "An exceptionally high quality of performance or practice",
      VeryGood: "The quality of performance exceeds",
      Good: "The expected level of quality for every school",
      Acceptable: "The minimum level of acceptability required",
      Weak: "Quality not yet at the level acceptable",
    },
    categoryMinWidth: "7vw",
    ratingMethodHeading: "The Rating method:",
    ratingMethodDesc:
      "KHDA is inspecting and evaluating schools. The main criteria are academic attainment in core subjects, the learning environment, the achievement of students, the quality of school leadership, attitudes of students, Islamic and Arabic provisions in the curriculum, the self-evaluation process of the school.",
    anchorVertical: "bottom",
    anchorHorizontal: "right",
    transformVertical: "top",
    transformHorizontal: "right",
  },
  iconColor: "#fff",
  iconWidth: 15,
  iconHeight: 12,
};

export const ratingsReviewsData = {
  sectionTitle: `Rating and reviews for ${listingProperties[0].building}`,
  categoryRatingTitle: `How do residents rate ${listingProperties[0].building}`,
  residentReviewsTitle: `Resident Reviews `,
  rateBtnText: "Rate your building",
  overrallRating: 4.1,
  overallRatingCount: 87,
  categorizedRatingData: [
    {
      heading: "Maintenance",
      rating: 4.1,
    },
    {
      heading: "Gym",
      rating: 4.1,
    },
    {
      heading: "Staff / Security",
      rating: 4.1,
    },
    {
      heading: "Pool",
      rating: 4.1,
    },
    {
      heading: "Level of noise",
      rating: 4.1,
    },
    {
      heading: "Traffic near property",
      rating: 4.1,
    },
    {
      heading: "Guest Parking",
      rating: 4.1,
    },
    {
      heading: "Access to main roads",
      rating: 4.1,
    },
    {
      heading: "Kids Area",
      rating: 4.1,
    },

    {
      heading: "Parks nearby",
      rating: 4.1,
    },
  ],
  residentReviewsData: [
    {
      reviewer: "Smarth",
      reviewerLocation: "India",
      reviewDate: "2 weeks ago",
      rating: 4.1,
      reviewHeading: "Great Location",
      reviewBody:
        "Tower is very well located and it is easy to commute. I live here since 2 years and also the staff is very friendly. Perfect place for peaceful family living.",
    },
    {
      reviewer: "Sheeba",
      reviewerLocation: "United Arab Emirates",
      reviewDate: "2 weeks ago",
      rating: 5,
      reviewHeading: "Amazing",
      reviewBody:
        "Tower is very well located and it is easy to commute. I live here since 2 years and also the staff is very friendly. Perfect place for peaceful family living.",
    },
    {
      reviewer: "Anv",
      reviewerLocation: "India",
      reviewDate: "2 weeks ago",
      rating: 4,
      reviewHeading: "Beautiful experience",
      reviewBody:
        "Tower is very well located and it is easy to commute. I live here since 2 years and also the staff is very friendly. Perfect place for peaceful family living.",
    },
    {
      reviewer: "Kim",
      reviewerLocation: "Malaysia",
      reviewDate: "2 weeks ago",
      rating: 4.7,
      reviewHeading: "Great",
      reviewBody:
        "Tower is very well located and it is easy to commute. I live here since 2 years and also the staff is very friendly. Perfect place for peaceful family living.",
    },
    {
      reviewer: "Angie",
      reviewerLocation: "United Kingdom",
      reviewDate: "2 weeks ago",
      rating: 4.9,
      reviewHeading: "Nice Location",
      reviewBody:
        "Tower is very well located and it is easy to commute. I live here since 2 years and also the staff is very friendly. Perfect place for peaceful family living.",
    },
  ],
};

export const passwordValidationCriteria = [
  "Password should contain capital letters.",
  "Password must contain a special character.",
  "Password length must be greater than 8 characters.",
  "Password should contain lowercase letters.",
  "Password should contain at least one number.",
];

export const countryLevelLayers = ["country-cluster", "country-cluster-count"];
export const stateLevelLayers = ["state-cluster-1", "state-cluster-count"];
export const cityLevelLayers = ["city-cluster", "city-cluster-count"];
export const areaLevelLayers = [
  "clusters",
  "cluster-count",
  "listings-same-coordinates",
  "listings-same-coordinates-count",
  "single-listing-cluster",
  "single-listing-cluster-count",
  "single-listing-unclustered",
  "single-listing-unclustered-price",
];
// export const buildingGuideSearchOptions = [
//   { title: "Burj Khalifa", category: "Dubai" },
//   { title: "Marina Bay Sands", category: "Dubai" },
//   { title: "Sharjah Museum of Islamic Civilization", category: "Sharjah" },
//   { title: "Sheikh Zayed Grand Mosque", category: "Abu Dhabi" },
//   { title: "Sharjah Art Museum", category: "Sharjah" },

//   { title: "The Palm Jumeirah", category: "Dubai" },
//   { title: "Al Qasba", category: "Sharjah" },
//   { title: "Louvre Abu Dhabi", category: "Abu Dhabi" },
//   { title: "Burj Al Arab", category: "Dubai" },
// ];

const desirableNeighborhoodsInDubaiArray = [
  "Jumeirah Heights",
  "Al Furjan",
  "Arjan",
  "Dubai Internet City",
  "Al Barari",
  "Jumeirah Park",
  "Opera District",
  "The Park Villas",
  "Bluewaters Island",
  "Jumeirah Beach Residence (JBR)",
  "Mohammed Bin Rashid City",
  "Dubai South",
  "Dubai Industrial Park",
  "DAMAC Hills 2",
  "DAMAC Hills",
  "DAMAC Hills 2 (Akoya by DAMAC)",
  "Jumeirah Golf Estates",
  "Green Community",
  "Motor City",
  "Dubai Silicon Oasis",
  "Arabian Ranches 3",
  "Arabian Ranches 2",
  "Dubai Hills Estate",
  "Harbour Gate",
  "Dubai Creek Harbour",
  "Residential District",
  "Dubai Studio City",
  "Dubailand",
  "Rukan",
  "Dubai Harbour",
  "The Valley",
  "Madinat Al Maktoum",
  "Zareeba Duviya",
  "Zabeel East",
  "Zabeel Second",
  "Zabeel First",
  "Yaraah",
  "World Islands",
  "Warsan Fourth",
  "Wadi Alshabak",
  "Wadi Al Safa 7",
  "Wadi Al Safa 6",
  "Wadi Al Safa 5",
  "Wadi Al Safa 4",
  "Wadi Al Safa 3",
  "Wadi Al Safa 2",
  "Wadi Al Amardi",
  "Universe Islands",
  "Umm Hurair",
  "Umm Addamin",
  "Umm Suqeim 3",
  "Umm Suqeim 2",
  "Umm Suqeim 1",
  "Umm Suqeim",
  "Um Ramool",
  "Um Nahad Fourth",
  "Um Nahad Third",
  "Um Nahad Second",
  "Um Nahad First",
  "Um Hurair Second",
  "Um Hurair First",
  "Um Esalay",
  "Um Almoameneen",
  "Umm Al Shief",
  "Trade Center Second",
  "Trade Center First",
  "Tawi Alfuqa",
  "Tawi Al Muraqqab",
  "Tawaa Al Sayegh",
  "Tareeq Al Aweer",
  "Tareeq Abu Dhabi",
  "Souq Sikkat Al Khail",
  "Souq Al Tama",
  "Souq Al Lariyyah",
  "Sikkar Al Khail South",
  "Sikkar Al Khail North",
  "Sikkar Al Khail",
  "Shandagha West",
  "Shandagha East",
  "Shandagha",
  "Saih Shuaib 4",
  "Saih Shuaib 3",
  "Saih Shuaib 2",
  "Saih Shuaib 1",
  "Saih Alsalam",
  "Saih Aldahal",
  "Riqat Masali",
  "Remah",
  "Rega Al Buteen",
  "Ras Al Khor Industrial Third",
  "Ras Al Khor Industrial Secon",
  "Ras Al Khor Industrial First",
  "Ras Al Khor",
  "Port Saeed",
  "Palm Jumeirah",
  "Palm Jabal Ali",
  "Palm Deira",
  "Oud Metha",
  "Oud Al Muteena Third",
  "Oud Al Muteena Second",
  "Oud Al Muteena First",
  "Oud Al Muteena",
  "Nazwah",
  "Naif South",
  "Naif North",
  "Naif",
  "Nadd Hessa",
  "Nad Shamma",
  "Nad Rashid",
  "Nad Al Shiba Fourth",
  "Nad Al Shiba Third",
  "Nad Al Shiba Second",
  "Nad Al Shiba First",
  "Nad Al Shiba",
  "Nad Al Hamar",
  "Mushrif",
  "Muragab",
  "Muhaisnah Fifth",
  "Muhaisnah Fourth",
  "Muhaisnah Third",
  "Muhaisnah Second",
  "Muhaisnah First",
  "Muhaisnah",
  "Mugatrah",
  "Muashrah Al Bahraana",
  "Mirdif",
  "Mereiyeel",
  "Mena Jabal Ali",
  "Meâ€™aisem Second",
  "Meâ€™aisem First",
  "Marsa Dubai",
  "Margham",
  "Mankhool",
  "Madinat Dubai Almelaheyah",
  "Mainat Al Mataar",
  "Lehbab Second",
  "Lehbab First",
  "Lehbab",
  "Le Hemaira",
  "Jumeirah Third",
  "Jumeirah Second",
  "Jumeirah First",
  "Jumeirah",
  "Jumeira Island Second",
  "Jumeira Island First",
  "Jabal Ali Industrial Third",
  "Jabal Ali Industrial Second",
  "Jabal Ali Industrial First",
  "Jabal Ali Third",
  "Jabal Ali Second",
  "Jabal Ali First",
  "Jabal Ali",
  "Hor Al Anz",
  "Hessyan Second",
  "Hessyan First",
  "Hatta",
  "Hafair",
  "Hadaeq Sheikh Mohammed Bin Rashid",
  "Grayteesah",
  "Ghadeer Barashy",
  "Festival City First",
  "Eyal Nasser",
  "Esalal",
  "Emirates Hills Fourth",
  "Dubai Investment Park Second",
  "Dubai Investment Park First",
  "Dubai Internation Airport",
  "Cornich Deira",
  "Burj Nahar",
  "Burj Khalifa",
  "Bur Dubai",
  "Bukadra",
  "Anakhali",
  "Al Zarouniyyah",
  "Al Tawar",
  "Al Souq Al Muqayatah",
  "Al Souq Al Kabeer (Deira)",
  "Al Shumaal",
  "Al Safiyyah",
  "Al Riqqa West",
  "Al Riqqa East",
  "Al Raulah",
  "Al Qiyadah",
  "Al Nakhal",
  "Al Nahdah",
  "Al Nabgha",
  "Al Mustashfa West",
  "Al Musalla (Deira)",
  "Al Murar Qadeem",
  "Al Murar Jadeed",
  "Al Muhaisnah North",
  "Meydan City",
  "Almarmum Third",
  "Almarmum First",
  "Al Jadeedah",
  "Al Dzahiyahh",
  "Al Cornich",
  "Al Bastakiyah",
  "Al Baloosh",
  "Al Aweer",
  "Al Zaroob",
  "Al Yufrah 4",
  "Al Yufrah 3",
  "Al Yufrah 2",
  "Al Yufrah 1",
  "Al Yelayiss 5",
  "Al Yelayiss 4",
  "Al Yelayiss 3",
  "Al Yelayiss 2",
  "Al Yelayiss 1",
  "Al Wohoosh",
  "Al Wasl",
  "Al Warsan Third",
  "Al Warsan Second",
  "Al Warsan First",
  "Al Warqa Fifth",
  "Al Warqa Fourth",
  "Al Warqa Third",
  "Al Warqa Second",
  "Al Warqa First",
  "Al Wahehah Al Bhariyah",
  "Al Waheda",
  "Al Twar Third",
  "Al Twar Second",
  "Al Twar First",
  "Al Twar",
  "Al Thanyah Fifth",
  "Al Thanyah Fourth",
  "Al Thanyah Third",
  "Al Thanyah Second",
  "Al Thanyah First",
  "Al Suq Al Kabeer",
  "Al Satwa",
  "Al Safouh Second",
  "Al Safouh First",
  "Al Saffah Second",
  "Al Saffa First",
  "Al Safaa",
  "Al Sabkha",
  "Al Ruwayyah",
  "Al Rowaiyah Third",
  "Al Rowaiyah Second",
  "Al Rowaiyah First",
  "Al Qusais Industrial Fifth",
  "Al Qusais Industrial Fourth",
  "Al Qusais Industrial Third",
  "Al Qusais Industrial Second",
  "Al Qusais Industrial First",
  "Al Qusais First",
  "Al Qusais",
  "Al Qoaz",
  "Al Oshoosh",
  "Al Nahda Second",
  "Al Nahda First",
  "Al Muteena",
  "Al Musalla (Dubai)",
  "Al Murqabat",
  "Al Mezhar Second",
  "Al Mezhar First",
  "Al Mezhar",
  "Al Meryal",
  "Al Merkadh",
  "Al Marmoom",
  "Al Mararr",
  "Al Manar",
  "Al Mamzer",
  "Al Maha",
  "Al Lusaily",
  "Al Layan 2",
  "Al Layan 1",
  "Alkifaf",
  "Al Kheeran",
  "Al Khawaneej Second",
  "Al Khawaneej First",
  "Al Khawaneej",
  "Al Khairan Second",
  "Al Khairan First",
  "Al Khabeesi",
  "Al Karam",
  "Al Jafliya",
  "Al Jadaf",
  "Al Hudaiba",
  "Al Hebiah Sixth",
  "Al Hebiah Fifth",
  "Dubai Sports City",
  "Al Hebiah Thir",
  "Al Hebiah Second",
  "Al Hebiah First",
  "Al Hathmah",
  "Al Hamriya Port",
  "Al Hamriya",
  "Al Gozze Industrial Fourth",
  "Al Goze Industrial Third",
  "Al Goze Industrial Second",
  "Al Goze Industrial First",
  "Al Goze Fourth",
  "Al Goze Third",
  "Al Goze Second",
  "Al Goze Firs",
  "Al Garhoud",
  "Al Fahidi",
  "Al Fagaâ€™A",
  "Al Eyas",
  "Al Dhagaya",
  "Al Butee",
  "Al Barsha South Third",
  "Al Barsha South Secon",
  "Al Barsha South First",
  "Al Barsha Third",
  "Al Barsha South Fifth",
  "Al Barsha South Fourth",
  "Al Barsha Second",
  "Al Barsha First",
  "Al Barsha",
  "Al Baraha",
  "Al Baharna",
  "Al Bada",
  "Al Baagh",
  "Al Aweer Secon",
  "Al Aweer First",
  "Al Asbaq",
  "Abu Hail",
  "Jumeirah Village Circle",
  "Business Bay",
  "Downtown Dubai",
  "Trousdale",
  "Dubai Marina",
  "Dubailand 1",
  "Arabian Ranches 1",
  "Benedict Canyon",
  "Dubai International Financial Center (DIFC)",
];

export const AreaGuideSearchOptions = desirableNeighborhoodsInDubaiArray.map(
  (item) => ({ title: item, category: "Dubai" })
);
const availableNeighborhoods = [
  "Business Bay",
  "Downtown Dubai",
  "Dubai International Financial Center (DIFC)",
  "Dubai Marina",
];
export const onlyInDubaiDesirableNeighborhoods = availableNeighborhoods.map(
  (item) => ({ title: item, category: "Dubai" })
);
export const buildingGuideSearchOptions = [
  { title: "Burj Khalifa", category: "Dubai" },
];

export const citiesSearchOPtions = [
  { title: "Abu Dhabi", category: "UAE" },
  { title: "Dubai", category: "UAE" },
  { title: "Ajman", category: "UAE" },
  { title: "Sharjah", category: "UAE" },
  { title: "Fujairah", category: "UAE" },
  { title: "Ras-Al-Khaima", category: "UAE" },
  { title: "Umm-Al-Quin", category: "UAE" },
  { title: "Al-Ain", category: "UAE" },
  { title: "Khor-Fakkar", category: "UAE" },
  { title: "Hatta", category: "UAE" },
  { title: "Kalba", category: "UAE" },

  // { title: "Abu Dhabi City", category: "Abu Dhabi" },
  // { title: "Abu al Abyad", category: "Abu Dhabi" },
  // { title: "Al-Aryam Island", category: "Abu Dhabi" },
  // { title: "Al-Bahiyah", category: "Abu Dhabi" },
  // { title: "Al-Shahamah", category: "Abu Dhabi" },
  // { title: "Al-Wathbah", category: "Abu Dhabi" },
  // { title: "Bani Yas City", category: "Abu Dhabi" },
  // { title: "Ghantoot", category: "Abu Dhabi" },
  // { title: "Halat al Bahrani", category: "Abu Dhabi" },
  // { title: "Jubail Island", category: "Abu Dhabi" },
  // { title: "Khalifa Port", category: "Abu Dhabi" },
  // { title: "Masdar City", category: "Abu Dhabi" },
  // { title: "Mina' Zayed", category: "Abu Dhabi" },
  // { title: "Mussafah", category: "Abu Dhabi" },
  // { title: "Saadiyat Island", category: "Abu Dhabi" },
  // { title: "Yas Island", category: "Abu Dhabi" },
  // { title: "Madinat Zayed", category: "Abu Dhabi" },
  // { title: "Ghayathi", category: "Abu Dhabi" },
  // { title: "Ghuwaifat", category: "Abu Dhabi" },
  // { title: "Habshan", category: "Abu Dhabi" },
  // { title: "Liwa Oasis", category: "Abu Dhabi" },
  // { title: "Marawah Island", category: "Abu Dhabi" },
  // { title: "Ruwais", category: "Abu Dhabi" },
  // { title: "Sila", category: "Abu Dhabi" },
  // { title: "Sir Bani Yas", category: "Abu Dhabi" },
  // { title: "Tarif", category: "Abu Dhabi" },
  // { title: "Al Ain City", category: "Abu Dhabi" },
  // { title: "Al-Faqa'", category: "Abu Dhabi" },
  // { title: "Al-Hayer", category: "Abu Dhabi" },
  // { title: "Al-Qu'a", category: "Abu Dhabi" },
  // { title: "Al-Shwaib", category: "Abu Dhabi" },
  // { title: "Al-Wagan", category: "Abu Dhabi" },
  // { title: "Al-Yahar", category: "Abu Dhabi" },
  // { title: "Mezyad", category: "Abu Dhabi" },
  // { title: "Nahil", category: "Abu Dhabi" },
  // { title: "Remah", category: "Abu Dhabi" },
  // { title: "Sa'ah", category: "Abu Dhabi" },
  // { title: "Sweihan", category: "Abu Dhabi" },
  // { title: "Dubai", category: "Dubai" },
  // { title: "Jebel Ali", category: "Dubai" },
  // { title: "Hatta", category: "Dubai" },
  // { title: "Sharjah", category: "Sharjah" },
  // { title: "Khor Fakkan", category: "Sharjah" },
  // { title: "Kalba", category: "Sharjah" },
  // { title: "Dhaid", category: "Sharjah" },
  // { title: "Dibba Al-Hisn", category: "Sharjah" },
  // { title: "Al Madam", category: "Sharjah" },
  // { title: "Fujairah", category: "Fujairah" },
  // { title: "Dibba Al-Fujairah", category: "Fujairah" },
  // { title: "Umm al-Quwain", category: "Umm al-Quwain" },
  // { title: "Ajman", category: "Ajman" },
  // { title: "RAK City", category: "Ras Al Khaima" },
  // { title: "Ras Al Khaima", category: "Ras Al Khaima" },
];
export const becomeAnAgentStepsSectionData = [
  {
    headingIcon: "skillSet",
    heading: "Assess your skill set",
    stepHeading: "Step 1",
    subHeading:
      "If you possess all or most of the following skills your success is inevitable",
  },
  {
    headingIcon: "rightCompany",
    heading: "Choose the right company",
    stepHeading: "Step 2",
    subHeading: "The company you choose must have the following qualities:",
  },
  {
    headingIcon: "visaProcess",
    heading: "Visa Process",
    stepHeading: "Step 3",
    subHeading: "",
  },
  {
    headingIcon: "reraCertification",
    heading: "RERA Certification",
    stepHeading: "Step 4",
    subHeading: "",
  },
  {
    headingIcon: "exam",
    heading: "The Exam",
    stepHeading: "Step 5",
    subHeading: "",
  },
  {
    headingIcon: "realEstateLicense",
    heading: "Get your license",
    stepHeading: "Step 6",
    subHeading: "",
  },
  {
    headingIcon: "startCareer",
    heading: "Start your career",
    stepHeading: "Step 7",
    subHeading: "",
  },
];
export const floorImages = [
  {
    imgLabel: "Ground Floor",
    imgPath:
      "https://www.arx.pt/wp-content/uploads/2016/08/Gr%C3%A2ndola-12-870x580.jpg",
    area: 123,
  },
  {
    imgLabel: "1st Floor",
    imgPath:
      "https://www.arx.pt/wp-content/uploads/2016/08/Gr%C3%A2ndola-13-870x580.jpg",
    area: 231,
  },
  {
    imgLabel: "2nd Floor",
    imgPath:
      "https://www.arx.pt/wp-content/uploads/2016/08/Gr%C3%A2ndola-14-870x580.jpg",
    area: 431,
  },
];

export const defaultBuildingImageImages = {
  images: [
    {
      label: "title",
      imgPath:
        "https://ik.imagekit.io/valcom123/images/manseel/holder/defaultBuilding.jpg?updatedAt=1690551036853",
    },
  ],
};

export const propertyAmenitiesArray = [
  "Balcony",
  "Basement Parking",
  "Built In Wardobes",
  "Broadband Ready",
  "Community View",
  "Covered Parking",
  "Drivers Room",
  "Fully Fitted Kitchen",
  "Fully Furnished",
  "Garden View",
  "Golf Course View",
  "Kitchen White Goods",
  "Landscaped Garden",
  "Maids Room",
  "Marble Floor",
  "On High Floor",
  "On Mid Floor",
  "Outdoor Entertaining Area",
  "Park View",
  "Partly Furnished",
  "Pets Allowed",
  "Private Garage",
  "Private Garden",
  "Private Jacuzzi",
  "Private Sauna",
  "Private Steam Room",
  "Private Swimming Pool",
  "Sea View",
  "Solid Wood Floors",
  "Study Room",
];

export const notAvailable = "Not Available";

export const comingSoonURL = "/comingsoon";

export const desirableNeighborhoods = [
  {
    imageUrl: `${CDNPath}/DesirableNeighborhoods/DowntownDubai.jpg`,
    title: "Downtown Dubai",
    buildingRefNumber: 99887465,
    buildingName: "Downtown Dubai",
    comingSoon: false,
    link: "/specificneighbourhood/Downtown Dubai",
  },
  {
    imageUrl: `${CDNPath}/DesirableNeighborhoods/JumeirahVillageCircle.jpg`,
    title: "Jumeirah Village Circle",
    buildingRefNumber: 99887876,
    buildingName: "Jumeirah Village Circle",
    comingSoon: false,
    link: "/specificneighbourhood/Jumeirah Village Circle",
  },
  {
    imageUrl: `${CDNPath}/DesirableNeighborhoods/BusinessBay.jpg`,
    title: "Business Bay",
    buildingRefNumber: 99887876,
    buildingName: "Business Bay",
    comingSoon: false,
    link: "/specificneighbourhood/Business Bay",
  },
  {
    imageUrl: `${CDNPath}/DesirableNeighborhoods/TheGreensViews.jpg`,
    title: "The Greens & Views",
    buildingRefNumber: 99887876,
    buildingName: "The Greens & Views",
    comingSoon: true,
    link: comingSoonURL,
  },
  {
    imageUrl: `${CDNPath}/mag/dm/hero/1.jpg`,
    title: "Dubai Marina",
    buildingRefNumber: 99887876,
    buildingName: "Dubai Marina",
    comingSoon: false,
    link: "/specificneighbourhood/Dubai Marina",
  },
  {
    imageUrl: `${CDNPath}/DesirableNeighborhoods/DubaiInternationalFinancialCenter(DIFC).jpg`,
    title: "Dubai International Financial Center (DIFC)",
    buildingRefNumber: 99887876,
    buildingName: "Dubai International Financial Center (DIFC)",
    comingSoon: false,
    link: "/specificneighbourhood/Dubai International Financial Center",
  },
  {
    imageUrl: `${CDNPath}/DesirableNeighborhoods/SheikhZayedRoad.jpg`,
    title: "Sheikh Zayed Road",
    buildingRefNumber: 99887876,
    buildingName: "Sheikh Zayed Road",
    comingSoon: true,
    link: comingSoonURL,
  },
  {
    imageUrl: `${CDNPath}/DesirableNeighborhoods/DubaiHills.jpg`,
    title: "Dubai Hills",
    buildingRefNumber: 99887876,
    buildingName: "Dubai Hills",
    comingSoon: true,
    link: comingSoonURL,
  },
  {
    imageUrl: `${CDNPath}/DesirableNeighborhoods/SustainableCity.jpg`,
    title: "Sustainable City",
    buildingRefNumber: 9988787687876,
    buildingName: "Sustainable City",
    comingSoon: true,
    link: comingSoonURL,
  },

  {
    imageUrl: `${CDNPath}/DesirableNeighborhoods/JumeirahVillageTriangle.jpg`,
    title: "Jumeirah Village Triangle",
    buildingRefNumber: 99887876,
    buildingName: "Jumeirah Village Triangle",
    comingSoon: true,
    link: comingSoonURL,
  },

  {
    imageUrl: `${CDNPath}/DesirableNeighborhoods/DistrictOne.jpg`,
    title: "District One",
    buildingRefNumber: 99887876,
    buildingName: "District One",
    comingSoon: true,
    link: comingSoonURL,
  },
  {
    imageUrl: `${CDNPath}/DesirableNeighborhoods/PalmJumeirah.jpg`,
    title: "Palm Jumeirah",
    buildingRefNumber: 99887876,
    buildingName: "Palm Jumeirah",
    comingSoon: true,
    link: comingSoonURL,
  },
  {
    imageUrl: `${CDNPath}/DesirableNeighborhoods/JumeirahLakeTowers.jpg`,
    title: "Jumeirah Lake Towers",
    buildingRefNumber: 99887876,
    buildingName: "Jumeirah Lake Towers",
    comingSoon: true,
    link: comingSoonURL,
  },
  {
    imageUrl: `${CDNPath}/DesirableNeighborhoods/DubaiCreekHarbour.jpg`,
    title: "Dubai Creek Harbour",
    buildingRefNumber: 99887465,
    buildingName: "Dubai Creek Harbour",
    comingSoon: false,
    link: comingSoonURL,
  },

  {
    imageUrl: `${CDNPath}/DesirableNeighborhoods/NshamaTownsquare.jpg`,
    title: "Nshama Townsquare",
    buildingRefNumber: 99887876,
    buildingName: "Nshama Townsquare",
    comingSoon: true,
    link: comingSoonURL,
  },
  {
    imageUrl: `${CDNPath}/DesirableNeighborhoods/LayanCommunity.jpg`,
    title: "Layan Community",
    buildingRefNumber: 99887876,
    buildingName: "Layan Community",
    comingSoon: true,
    link: comingSoonURL,
  },
  {
    imageUrl: `${CDNPath}/DesirableNeighborhoods/Arjan.jpg`,
    title: "Arjan",
    buildingRefNumber: 99887876,
    buildingName: "Arjan",
    comingSoon: true,
    link: comingSoonURL,
  },
  {
    imageUrl: `${CDNPath}/DesirableNeighborhoods/SheikhZayedRoad.jpg`,
    title: "Sheikh Zayed Road",
    buildingRefNumber: 99887876,
    buildingName: "Sheikh Zayed Road",
    comingSoon: true,
    link: comingSoonURL,
  },
  {
    imageUrl: `${CDNPath}/DesirableNeighborhoods/Jumeirah1.jpg`,
    title: "Jumeirah 1",
    buildingRefNumber: 99887876,
    buildingName: "Jumeirah 1",
    comingSoon: true,
    link: comingSoonURL,
  },
  {
    imageUrl: `${CDNPath}/DesirableNeighborhoods/JumeirahPark.jpg`,
    title: "Jumeirah Park",
    buildingRefNumber: 9988787687876,
    buildingName: "Jumeirah Park",
    comingSoon: true,
    link: comingSoonURL,
  },
  {
    imageUrl: `${CDNPath}/DesirableNeighborhoods/AlJaddaf.jpg`,
    title: "Al Jaddaf",
    buildingRefNumber: 99887876,
    buildingName: "Al Jaddaf",
    comingSoon: true,
    link: comingSoonURL,
  },
  {
    imageUrl: `${CDNPath}/DesirableNeighborhoods/ArabianRanchesI.jpg`,
    title: "Arabian Ranches I",
    buildingRefNumber: 99887876,
    buildingName: "Arabian Ranches I",
    comingSoon: true,
    link: comingSoonURL,
  },
  {
    imageUrl: `${CDNPath}/DesirableNeighborhoods/ArabianRanchesII.jpg`,
    title: "Arabian Ranches II",
    buildingRefNumber: 99887876,
    buildingName: "Arabian Ranches II",
    comingSoon: true,
    link: comingSoonURL,
  },
  {
    imageUrl: `${CDNPath}/DesirableNeighborhoods/ArabianRanchesIII.jpg`,
    title: "Arabian Ranches III",
    buildingRefNumber: 9988787687876,
    buildingName: "Arabian Ranches III",
    comingSoon: true,
  },
  {
    imageUrl: `${CDNPath}/DesirableNeighborhoods/BluewatersIsland.jpg`,
    title: "Bluewaters Island",
    buildingRefNumber: 99887876,
    buildingName: "Bluewaters Island",
    comingSoon: true,
    link: comingSoonURL,
  },
  {
    imageUrl: `${CDNPath}/DesirableNeighborhoods/JumeirahBeachResidences(JBR).jpg`,
    title: "Jumeirah Beach Residences (JBR)",
    buildingRefNumber: 99887876,
    buildingName: "Jumeirah Beach Residences (JBR)",
    comingSoon: true,
    link: comingSoonURL,
  },
  {
    imageUrl: `${CDNPath}/DesirableNeighborhoods/Meydan.jpg`,
    title: "Meydan",
    buildingRefNumber: 99887876,
    buildingName: "Meydan",
    comingSoon: true,
    link: comingSoonURL,
  },
  {
    imageUrl: `${CDNPath}/DesirableNeighborhoods/EmiratesHills.jpg`,
    title: "Emirates Hills",
    buildingRefNumber: 9988787687876,
    buildingName: "Emirates Hills",
    comingSoon: true,
    link: comingSoonURL,
  },
  {
    imageUrl: `${CDNPath}/DesirableNeighborhoods/MotorCity.jpg`,
    title: "Motor City",
    buildingRefNumber: 99887876,
    buildingName: "Motor City",
    comingSoon: true,
    link: comingSoonURL,
  },
  {
    imageUrl: `${CDNPath}/DesirableNeighborhoods/UmmSuqeim.jpg`,
    title: "Umm Suqeim",
    buildingRefNumber: 99887876,
    buildingName: "Umm Suqeim",
    comingSoon: true,
    link: comingSoonURL,
  },
  {
    imageUrl: `${CDNPath}/DesirableNeighborhoods/AlBarari.jpg`,
    title: "Al Barari",
    buildingRefNumber: 99887876,
    buildingName: "Al Barari",
    comingSoon: true,
    link: comingSoonURL,
  },
  {
    imageUrl: `${CDNPath}/DesirableNeighborhoods/TheMeadows.jpg`,
    title: "The Meadows",
    buildingRefNumber: 99887876,
    buildingName: "The Meadows",
    comingSoon: true,
    link: comingSoonURL,
  },
  {
    imageUrl: `${CDNPath}/DesirableNeighborhoods/MotorCity.jpg`,
    title: "Motor City",
    buildingRefNumber: 99887876,
    buildingName: "Motor City",
    comingSoon: true,
    link: comingSoonURL,
  },
  {
    imageUrl: `${CDNPath}/DesirableNeighborhoods/TheSprings.jpg`,
    title: "The Springs",
    buildingRefNumber: 99887876,
    buildingName: "The Springs",
    comingSoon: true,
    link: comingSoonURL,
  },

  // Add more image objects here
];
