export type LoungeCategory =
  | "Coffeehouse Jazz"
  | "Piano Lounge"
  | "Coffee Ambience"
  | "Coffee Documentaries"
  | "Coffee Culture"
  | "Coffee Roasting"
  | "Brewing"
  | "Barista Competitions";

export interface LoungeVideo {
  id: string;
  title: string;
  channel: string;
  category: LoungeCategory;
  description: string;
  duration: string;
}

/**
 * A deliberately editorial list rather than a YouTube search feed.
 * Every item points to a public YouTube watch page and is rendered with
 * YouTube's official no-cookie embed player in the Lounge.
 */
export const loungeVideos: LoungeVideo[] = [
  {
    id: "BywDOO99Ia0",
    title: "Coffee Shop Music — Relax Jazz Cafe Piano and Guitar",
    channel: "Cafe Music BGM channel",
    category: "Coffeehouse Jazz",
    description: "Soft instrumental jazz for an unhurried cup and a late afternoon table.",
    duration: "Long mix",
  },
  {
    id: "-PcGM1zo1y4",
    title: "Timeless Corner",
    channel: "Cafe Music BGM channel",
    category: "Coffeehouse Jazz",
    description: "A polished cafe-jazz set with a warm, quietly cinematic feel.",
    duration: "Official music video",
  },
  {
    id: "Dx5qFachd3A",
    title: "Relaxing Jazz Piano Radio",
    channel: "Cafe Music BGM channel",
    category: "Piano Lounge",
    description: "A slow piano-led room for reading, focus, and the first pour of the day.",
    duration: "24/7 radio",
  },
  {
    id: "_cI2pG7gshA",
    title: "Slow Celebration",
    channel: "Cafe Music BGM channel",
    category: "Piano Lounge",
    description: "Elegant cafe piano and understated jazz for a softer evening pace.",
    duration: "Official music video",
  },
  {
    id: "aNwCVv1kvcw",
    title: "Chill Latte + Work",
    channel: "Cafe Music BGM channel",
    category: "Coffee Ambience",
    description: "An easygoing soundtrack for deep work, espresso breaks, and slow mornings.",
    duration: "Official music video",
  },
  {
    id: "9KyrhBmsQZU",
    title: "The Story of Coffee — Full Episode",
    channel: "PBS Food",
    category: "Coffee Documentaries",
    description: "A journey from Colombian farms to the global ritual that coffee became.",
    duration: "Full episode",
  },
  {
    id: "zGad_tdfghU",
    title: "Blending, Roasting and Tasting",
    channel: "PBS Food",
    category: "Coffee Documentaries",
    description: "The final chapter of Original Fare's close look at how coffee becomes flavor.",
    duration: "Documentary episode",
  },
  {
    id: "QZk3FThWI9Q",
    title: "How Sustainable Coffee Farms Could Save an African Forest",
    channel: "Nature on PBS",
    category: "Coffee Documentaries",
    description: "A thoughtful look at coffee, conservation, and the communities protecting both.",
    duration: "27 min",
  },
  {
    id: "SL_fNEFj2Eo",
    title: "How Coffee Is Made in 10 Countries",
    channel: "Epicurious",
    category: "Coffee Culture",
    description: "Ten preparations, ten traditions, and the people behind each daily ritual.",
    duration: "Culture feature",
  },
  {
    id: "dqnZkvKIo0g",
    title: "How Climate Change Threatens Coffee Production",
    channel: "DW Documentary",
    category: "Coffee Documentaries",
    description: "A global investigation into the future of the crop behind every morning cup.",
    duration: "Documentary",
  },
  {
    id: "8rksHRyG0bE",
    title: "7 Coffee Shops You Must Visit",
    channel: "European Coffee Trip",
    category: "Coffee Culture",
    description: "A considered tour of standout specialty cafes shaping Europe's coffee scene.",
    duration: "Travel feature",
  },
  {
    id: "DMGFqZtjeL0",
    title: "Barcelona Coffee Guide",
    channel: "European Coffee Trip",
    category: "Coffee Culture",
    description: "A city guide through the cafes and people making Barcelona worth the detour.",
    duration: "City guide",
  },
  {
    id: "N6BJVM5tvnw",
    title: "Coffee Roasting Explained",
    channel: "James Hoffmann",
    category: "Coffee Roasting",
    description: "A clear, visually rich explanation of what heat does to coffee in the roaster.",
    duration: "Roasting guide",
  },
  {
    id: "lrRdRxAqMHc",
    title: "How To Brew Better Dark Roasts",
    channel: "James Hoffmann",
    category: "Coffee Roasting",
    description: "A practical guide to unlocking more balance from darker roasted coffees.",
    duration: "13 min",
  },
  {
    id: "AI4ynXzkSQo",
    title: "The Ultimate V60 Technique",
    channel: "James Hoffmann",
    category: "Brewing",
    description: "A repeatable pour-over method built for clarity, consistency, and better mornings.",
    duration: "Brewing guide",
  },
  {
    id: "K_r5kpXPRYo",
    title: "Brew Your Coffee with Boiling Water",
    channel: "James Hoffmann",
    category: "Brewing",
    description: "A useful reset on water temperature and why hotter can often taste better.",
    duration: "9 min",
  },
  {
    id: "ipB6P1uzNYM",
    title: "Coffee Brewing Ratios Explained",
    channel: "James Hoffmann",
    category: "Brewing",
    description: "The simple math behind repeatable filter coffee, without taking the ritual away.",
    duration: "Brewing guide",
  },
  {
    id: "st571DYYTR8",
    title: "The Ultimate French Press Technique",
    channel: "James Hoffmann",
    category: "Brewing",
    description: "A patient French press method for a cleaner, more expressive cup.",
    duration: "Brewing guide",
  },
  {
    id: "xb3IxAr4RCo",
    title: "How I Make Espresso: Tools and Techniques",
    channel: "James Hoffmann",
    category: "Brewing",
    description: "Puck prep, tools, and repeatable technique for a more dialed-in espresso.",
    duration: "Espresso guide",
  },
  {
    id: "j6VlT_jUVPc",
    title: "The Ultimate AeroPress Technique",
    channel: "James Hoffmann",
    category: "Brewing",
    description: "A thoughtful default recipe that leaves room for your own experiments.",
    duration: "Brewing guide",
  },
  {
    id: "HVoHoMhzy2w",
    title: "Jack Simpson, Australia — 2025 Finals",
    channel: "World Coffee Championships",
    category: "Barista Competitions",
    description: "A front-row view of a high-pressure World Barista Championship final performance.",
    duration: "15 min",
  },
  {
    id: "4HQ5YqBlzgE",
    title: "Hiroki Ito, Japan — 2025 Finals",
    channel: "World Coffee Championships",
    category: "Barista Competitions",
    description: "Precision, hospitality, and an inventive service on the world competition stage.",
    duration: "15 min",
  },
  {
    id: "VXqsI2Udwok",
    title: "Ben Put, Canada — 2025 Finals",
    channel: "World Coffee Championships",
    category: "Barista Competitions",
    description: "A polished finals routine from one of specialty coffee's biggest stages.",
    duration: "15 min",
  },
  {
    id: "PiR1cR_ctSM",
    title: "Elysia Tan, Singapore — 2025 Brewers Cup Finals",
    channel: "World Coffee Championships",
    category: "Barista Competitions",
    description: "A focused championship brew with the story and technique left in the spotlight.",
    duration: "10 min",
  },
  {
    id: "MgJO2A1-5ak",
    title: "Bavis Kwong, Hong Kong — 2026 Brewers Cup Finals",
    channel: "World Coffee Championships",
    category: "Barista Competitions",
    description: "A contemporary competition brew built around diversity, consistency, and place.",
    duration: "Finals performance",
  },
];

export const loungeCategories: Array<"All" | LoungeCategory> = [
  "All",
  "Coffeehouse Jazz",
  "Piano Lounge",
  "Coffee Ambience",
  "Coffee Documentaries",
  "Coffee Culture",
  "Coffee Roasting",
  "Brewing",
  "Barista Competitions",
];