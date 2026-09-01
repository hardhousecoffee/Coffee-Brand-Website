export type ExperienceVideoCategory =
  | "Coffeehouse Jazz"
  | "Piano & Ambience"
  | "Coffee Festivals & Expos"
  | "Cafés & Culture"
  | "Coffee Craft"
  | "Competition Stage"
  | "COFFEE THROUGH TIME";

export interface ExperienceMedia {
  id: string;
  title: string;
  creator: string;
  category: ExperienceVideoCategory;
  description: string;
  format: string;
}

export interface ExperienceMusicSession {
  id: string;
  title: string;
  creator: string;
  mood: string;
  description: string;
}

/**
 * This collection intentionally uses official YouTube players instead of
 * hosting downloaded audio or video files. The first featured video is the
 * existing Jazz & Coffee popup video and must remain unchanged.
 */
export const featuredExperienceVideo: ExperienceMedia = {
  id: "Z6Dx-o3vfJY",
  title: "Featured coffeehouse session",
  creator: "Hard House Coffee",
  category: "Coffeehouse Jazz",
  description: "An opening session from the Hard House Coffee homepage.",
  format: "Featured session",
};

export const experienceMusicSessions: ExperienceMusicSession[] = [
  {
    id: "BywDOO99Ia0",
    title: "Coffee Shop Music",
    creator: "Cafe Music BGM channel",
    mood: "Soft jazz · guitar · piano",
    description: "A relaxed instrumental session for an unhurried cup.",
  },
  {
    id: "Dx5qFachd3A",
    title: "Relaxing Jazz Piano Radio",
    creator: "Cafe Music BGM channel",
    mood: "Slow piano · focus",
    description: "A piano-led room for reading, work, and quiet mornings.",
  },
  {
    id: "aNwCVv1kvcw",
    title: "Chill Latte + Work",
    creator: "Cafe Music BGM channel",
    mood: "Cafe jazz · work",
    description: "An easygoing soundtrack for deep work and espresso breaks.",
  },
  {
    id: "_cI2pG7gshA",
    title: "Slow Celebration",
    creator: "Cafe Music BGM channel",
    mood: "Elegant jazz · evening",
    description: "Understated cafe music for a softer end to the day.",
  },
  {
    id: "-PcGM1zo1y4",
    title: "Timeless Corner",
    creator: "Cafe Music BGM channel",
    mood: "Paris jazz · vinyl",
    description: "A warm, cinematic set with the feeling of a favorite corner table.",
  },
];

export const experienceVideos: ExperienceMedia[] = [
  {
    id: "mQerK4DgBuw",
    title: "Uganda Coffee & Cocoa Expo 2026",
    creator: "Uganda Media Centre",
    category: "Coffee Festivals & Expos",
    description: "A look at producers, exporters, and industry voices shaping East Africa's coffee future.",
    format: "Expo feature",
  },
  {
    id: "DcC1U7MCWZI",
    title: "World of Coffee Expo — San Diego 2026",
    creator: "Coffee industry event coverage",
    category: "Coffee Festivals & Expos",
    description: "An on-the-floor view of new ideas, equipment, and people at a global coffee gathering.",
    format: "Expo tour",
  },
  {
    id: "oLw8M2LWD4g",
    title: "Africa Coffee & Tea Expo 2026",
    creator: "Africa Coffee & Tea Expo coverage",
    category: "Coffee Festivals & Expos",
    description: "Industry leaders, producers, and coffee communities gather in Kigali for a major regional event.",
    format: "Expo feature",
  },
  {
    id: "HVoHoMhzy2w",
    title: "Jack Simpson, Australia — 2025 Finals",
    creator: "World Coffee Championships",
    category: "Competition Stage",
    description: "A front-row view of a World Barista Championship final performance.",
    format: "15 min",
  },
  {
    id: "4HQ5YqBlzgE",
    title: "Hiroki Ito, Japan — 2025 Finals",
    creator: "World Coffee Championships",
    category: "Competition Stage",
    description: "Precision, hospitality, and inventive service on the world stage.",
    format: "15 min",
  },
  {
    id: "MgJO2A1-5ak",
    title: "Bavis Kwong, Hong Kong — 2026 Brewers Cup Finals",
    creator: "World Coffee Championships",
    category: "Competition Stage",
    description: "A contemporary competition brew built around place and consistency.",
    format: "Finals performance",
  },
  {
    id: "PiR1cR_ctSM",
    title: "Elysia Tan, Singapore — 2025 Brewers Cup Finals",
    creator: "World Coffee Championships",
    category: "Competition Stage",
    description: "A focused championship brew with the story and technique in the spotlight.",
    format: "10 min",
  },
  {
    id: "VXqsI2Udwok",
    title: "Ben Put, Canada — 2025 Finals",
    creator: "World Coffee Championships",
    category: "Competition Stage",
    description: "A polished finals routine from specialty coffee's biggest stage.",
    format: "15 min",
  },
  {
    id: "Ed8w-RKhR5U",
    title: "Carlos Medina, Chile — 2023 Brewers Cup Finals",
    creator: "World Coffee Championships",
    category: "Competition Stage",
    description: "A measured championship brew where technique, storytelling, and the final cup meet.",
    format: "Finals performance",
  },
  {
    id: "oZjFsOhn4iM",
    title: "Edwin Tascon, Colombia — 2023 Barista Championship",
    creator: "World Coffee Championships",
    category: "Competition Stage",
    description: "A Colombian competitor brings origin, precision, and hospitality to the world stage.",
    format: "Competition performance",
  },
  {
    id: "9KyrhBmsQZU",
    title: "The Story of Coffee — Full Episode",
    creator: "PBS Food",
    category: "Cafés & Culture",
    description: "A journey from Colombian farms to the global ritual coffee became.",
    format: "Full episode",
  },
  {
    id: "zGad_tdfghU",
    title: "Blending, Roasting and Tasting",
    creator: "PBS Food",
    category: "Coffee Craft",
    description: "A close look at how roasting and blending become flavor in the cup.",
    format: "Documentary",
  },
  {
    id: "QZk3FThWI9Q",
    title: "Sustainable Coffee Farms and African Forests",
    creator: "Nature on PBS",
    category: "Cafés & Culture",
    description: "Coffee, conservation, and the communities protecting both.",
    format: "27 min",
  },
  {
    id: "SL_fNEFj2Eo",
    title: "How Coffee Is Made in 10 Countries",
    creator: "Epicurious",
    category: "Cafés & Culture",
    description: "Ten preparations, ten traditions, and the people behind each ritual.",
    format: "Culture feature",
  },
  {
    id: "dqnZkvKIo0g",
    title: "How Climate Change Threatens Coffee Production",
    creator: "DW Documentary",
    category: "Cafés & Culture",
    description: "A global investigation into the future of the crop behind the cup.",
    format: "Documentary",
  },
  {
    id: "8rksHRyG0bE",
    title: "7 Coffee Shops You Must Visit",
    creator: "European Coffee Trip",
    category: "Cafés & Culture",
    description: "A considered tour of specialty cafes shaping Europe's coffee scene.",
    format: "Travel feature",
  },
  {
    id: "DMGFqZtjeL0",
    title: "Barcelona Coffee Guide",
    creator: "European Coffee Trip",
    category: "Cafés & Culture",
    description: "A city guide through the cafes and people making Barcelona worth the detour.",
    format: "City guide",
  },
  {
    id: "3mxZUa28MQ8",
    title: "Discovering Copenhagen's Coffee Culture",
    creator: "European Coffee Trip",
    category: "Cafés & Culture",
    description: "A considered tour through April, Coffee Collective, La Cabra, and Copenhagen's modern coffee identity.",
    format: "City guide",
  },
  {
    id: "XvpkFlzgiL0",
    title: "Why Vienna's Coffee Culture Is So Special",
    creator: "Culture feature",
    category: "Cafés & Culture",
    description: "Historic coffee houses, rituals, and the enduring atmosphere behind Vienna's café tradition.",
    format: "Culture feature",
  },
  {
    id: "vWrlXRHtS9s",
    title: "Verve Coffee Roastery Tour & Cupping",
    creator: "Verve Coffee Roasters",
    category: "Coffee Craft",
    description: "Inside a roastery and cupping experience with a respected specialty coffee company.",
    format: "Roastery tour",
  },
  {
    id: "OFLaCs99lWY",
    title: "HARIO V60 — How to Brew",
    creator: "HARIO Official Channel",
    category: "Coffee Craft",
    description: "A clear, official guide to brewing with the V60 dripper.",
    format: "Brewing guide",
  },
  {
    id: "Tgc8ICOLDVc",
    title: "Pour-Over Methods That Extract Unique Flavors",
    creator: "Intelligentsia Coffee",
    category: "Coffee Craft",
    description: "A practical look at recipes that bring different flavor profiles forward.",
    format: "Brewing guide",
  },
  {
    id: "wmCW8xSWGZY",
    title: "The 4:6 Method by Tetsu Kasuya",
    creator: "HARIO",
    category: "Coffee Craft",
    description: "The World Brewers Cup champion's method for controlling balance and strength.",
    format: "Brewing guide",
  },
  {
    id: "N6BJVM5tvnw",
    title: "Coffee Roasting Explained",
    creator: "James Hoffmann",
    category: "Coffee Craft",
    description: "A clear, visually rich explanation of what heat does to coffee in the roaster.",
    format: "Roasting guide",
  },
  {
    id: "Iq34gq2ihMk",
    title: "Why All Coffee Is Fermented",
    creator: "James Hoffmann",
    category: "Coffee Craft",
    description: "A field-level look at fermentation and why it shapes the cup.",
    format: "Field story",
  },
  {
    id: "2I6NZcVDc6A",
    title: "Inside the George Howell Roastery",
    creator: "George Howell Coffee",
    category: "Coffee Craft",
    description: "A behind-the-scenes roastery tour from a respected specialty coffee name.",
    format: "Roastery tour",
  },
  {
    id: "T0CcrvtQjd4",
    title: "A Coffee Landmark in Coyoacán",
    creator: "Connie Chew",
    category: "COFFEE THROUGH TIME",
    description: "Visit El Jarocho, the mid-century neighborhood café that made coffee part of daily life in Mexico City.",
    format: "Mexico City · Café history",
  },
  {
    id: "zOCejq92pdo",
    title: "The Kissaten Keeper",
    creator: "Life Where I'm From",
    category: "COFFEE THROUGH TIME",
    description: "Spend a day inside an old-school Japanese café where careful service keeps kissaten culture alive.",
    format: "Japan · Living history",
  },
  {
    id: "loU0K0bEPEQ",
    title: "From Bean to Cup in Colombia",
    creator: "happy®",
    category: "COFFEE THROUGH TIME",
    description: "Meet the people and growing communities whose work ties coffee to Colombia's landscape and identity.",
    format: "Colombia · Origin story",
  },
  {
    id: "I8uStVXNf0M",
    title: "The Birth of Espresso",
    creator: "James Hoffmann",
    category: "COFFEE THROUGH TIME",
    description: "Follow the inventions and café rituals that transformed Italian espresso into a worldwide language.",
    format: "Italy · Coffee history",
  },
  {
    id: "0mUv5DtGpig",
    title: "The Machines That Changed Coffee",
    creator: "Barista Hustle",
    category: "COFFEE THROUGH TIME",
    description: "Trace the early patents and engineering milestones that moved espresso from steam to modern pressure.",
    format: "Espresso machines · Part one",
  },
];

export const experienceVideoGroups: ExperienceVideoCategory[] = [
  "Coffeehouse Jazz",
  "Piano & Ambience",
  "Coffee Festivals & Expos",
  "Cafés & Culture",
  "Coffee Craft",
  "Competition Stage",
  "COFFEE THROUGH TIME",
];