import type { ResearchedArticle } from "./types";

export const coffeeArticles: ResearchedArticle[] = [
  {
    slug: "decaf-coffee-methods-caffeine-buying-guide",
    title: "Buying Decaf: Process, Freshness and Residual Caffeine",
    description: "Compare water, carbon-dioxide and solvent decaffeination, understand residual caffeine, and choose decaf by roast information rather than marketing claims.",
    category: "Bean Picks",
    image: "/images/coffee-cheers.jpg",
    imageAlt: "Coffee cups illustrating a guide to choosing decaffeinated coffee",
    purpose: "Decaffeination and buying criteria, absent from the existing roast, origin and freshness articles.",
    intro: "Choosing decaf should still be about finding coffee you look forward to drinking. Process names can help you understand a bag, but they will not tell you whether it suits your espresso or morning filter brew. Look at the roast date and flavour description alongside the decaffeination method—and remember that decaf retains some caffeine.",
    sections: [
      {
        heading: "Decaffeination usually happens before roasting",
        paragraphs: [
          "Commercial decaffeination generally treats green coffee before it reaches the roaster. Water, temperature and a caffeine-removal mechanism are used to reduce caffeine while trying to preserve desirable coffee material. The coffee is subsequently dried and roasted.",
          "The roast comes later, so a light or dark roast label tells you something different from the decaffeination method. Read the process, origin and roast information together, then judge the coffee by its flavour and brewing behaviour rather than bean colour alone.",
        ],
      },
      {
        heading: "What the process names mean",
        paragraphs: [
          "Water processes use water-based extraction and filtration. Swiss Water is a specific branded process, not a generic term for every water-decaffeinated coffee. Its process description explains the use of green coffee extract and carbon filtration.",
          "Other commercial approaches use carbon dioxide or solvents such as ethyl acetate or methylene chloride. The name of a solvent alone does not establish the finished coffee’s taste or its regulatory compliance. Terms such as sugarcane process describe part of a process story, not a promise that the beverage contains sugar or tastes sweet.",
        ],
        table: {
          headers: ["Label", "What it helps identify", "What it does not guarantee"],
          rows: [
            ["Swiss Water", "A particular branded water process", "A specific roast, origin or flavour"],
            ["CO₂", "Carbon-dioxide-based caffeine removal", "Zero caffeine in the finished cup"],
            ["Ethyl acetate / sugarcane", "A solvent-based process description", "Sweetness or superior freshness"],
            ["Decaf, no process named", "A reduced-caffeine product", "Which method was used"],
          ],
        },
      },
      {
        heading: "How much caffeine is left?",
        paragraphs: [
          "The FDA explains that decaffeinated coffee still contains caffeine, typically around 2–15 mg in an 8-ounce cup. That is a general range, not a measurement of your bag or of a concentrated double espresso. Serving size, coffee and preparation affect the amount.",
          "If caffeine avoidance is medically important, ask a qualified clinician and seek product-specific information rather than relying on a process logo. Do not interpret a percentage removed from green beans as an exact caffeine dose in your finished drink.",
        ],
      },
      {
        heading: "Choose a bag for the way you drink it",
        paragraphs: [
          "With those process terms in mind, look for a named roaster, a roast date and enough origin or blend information to understand the intended flavour. Ask about anything missing. Choose a quantity you can comfortably use rather than letting a large-bag discount make the decision.",
          "Try a manageable bag before committing to a large order. For espresso with milk, a chocolate-forward description may be more relevant than an elaborate list of fruit notes. For black filter coffee, clarity and roast balance may matter more. These are preference questions, not a fixed quality ladder.",
        ],
      },
      {
        heading: "Dial in the decaf as its own coffee",
        paragraphs: [
          "Do not assume your regular beans’ grind and dose will transfer perfectly. Start within the basket’s intended range, weigh the beverage and adjust one variable at a time. If the result flows differently, that is a reason to test the recipe, not automatically evidence of poor coffee.",
          "If the grinder is shared with regular coffee, plan how you will switch bags and clear grounds from the grinding path using the equipment instructions. Some regular coffee may carry over; an unmeasured purge cannot guarantee a caffeine-free dose.",
        ],
      },
      {
        heading: "What to ask the roaster",
        paragraphs: [
          "Ask which process was used, when the current batch was roasted, which brewing methods it was developed for and whether the decaf offering changes seasonally. Those answers are more actionable than a claim that one process always tastes best.",
          "Once you find a promising bag, brew it a few times with a consistent recipe before deciding whether to buy more. Our freshness article covers storage, and the troubleshooting guide can help with espresso adjustments. If residual caffeine is the deciding factor, seek product-specific information from the supplier.",
        ],
      },
    ],
    sources: [
      { label: "FDA: caffeine, including residual caffeine in decaf", url: "https://www.fda.gov/consumers/consumer-updates/spilling-beans-how-much-caffeine-too-much" },
      { label: "National Coffee Association: decaffeination methods", url: "https://www.aboutcoffee.org/beans/decaf-coffee/" },
      { label: "Swiss Water: explanation of its branded process", url: "https://swisswater.com/process" },
    ],
    links: [
      { label: "Read roast dates and manage freshness", path: "/blog/logistics-and-freshness-journey-to-your-local-shelf" },
      { label: "Compare grinder workflows for switching coffee", path: "/blog/turin-df54-vs-baratza-encore-esp" },
      { label: "Troubleshoot espresso with a repeatable recipe", path: "/blog/espresso-sour-bitter-channeling-troubleshooting" },
    ],
  },
  {
    slug: "coffee-labels-organic-fairtrade-direct-trade",
    title: "Organic, Fairtrade, Direct Trade: Read Coffee Labels",
    description: "Separate certified production standards, trading terms and flavour claims so you can ask better questions about the coffee you buy.",
    category: "Coffee Culture",
    image: "/images/coffee-farmer-cherries.jpg",
    imageAlt: "Coffee-growing context for understanding production and trading labels",
    purpose: "A label-verification framework, distinct from the existing farmer-life and origin-flavour articles.",
    intro: "Two bags can carry impressive labels and tell you very different things. Organic describes a regulated production and handling standard; Fairtrade points to a certification system with trading requirements. Direct trade describes a buying relationship without naming one universal certification. Reading each claim on its own terms makes it easier to choose coffee that matches both your preferences and your priorities.",
    sections: [
      {
        heading: "Start by asking what the claim is actually about",
        paragraphs: [
          "First, separate the story into its parts: growing practices, trading arrangements, origin, roast and flavour. Then ask who is responsible for each claim and what evidence you can check. A certification may answer one question well while leaving the others open.",
          "Look for a certification name and an identifiable roaster rather than treating a green colour scheme, a farm photograph or the word sustainable as proof. A detailed story can be informative, but a story alone is not an independently verified standard.",
        ],
      },
      {
        heading: "What USDA Organic does—and does not—establish",
        paragraphs: [
          "In the United States, organic labelling is governed by USDA rules and certification requirements, with different categories for different organic claims. Check the certifying information and the exact wording rather than assuming every mention of an organic ingredient permits the same seal.",
          "The rules concern defined production practices and permitted substances. They do not mean that a crop has never encountered any pesticide, and they do not establish flavour quality or a particular farmer income. Keep those separate questions in mind when comparing an organic claim with other information on the bag.",
        ],
      },
      {
        heading: "Fairtrade is about a defined trading system",
        paragraphs: [
          "Fairtrade’s coffee framework includes minimum-price and premium provisions, with conditions that depend on the applicable standard and product. Prices and implementation dates can change, so a number quoted in an old article should not be treated as the current universal rate.",
          "The premium has a defined role within that system rather than representing a fixed personal bonus for every farmer. Look for the named certification and supporting information. The broad phrase fair trade and a specific Fairtrade mark can refer to different arrangements.",
        ],
      },
      {
        heading: "Direct trade needs details, not just a confident label",
        paragraphs: [
          "A direct relationship can support traceability and communication, but the phrase does not identify one globally uniform certification. Ask who bought from whom, whether the relationship is ongoing and what information is published about the transaction.",
          "A farm name is a useful beginning, but follow the relationship beyond the name. Exporters, importers and local processing organisations can still play important roles. What matters is how the arrangement works for producers, not simply whether an intermediary appears in the chain.",
        ],
        table: {
          headers: ["Claim", "Ask for", "Do not infer"],
          rows: [
            ["Organic", "The relevant certification and labelling category", "Superior flavour or guaranteed income"],
            ["Fairtrade", "The named system and applicable standard", "One permanent worldwide price"],
            ["Direct trade", "A documented relationship and buying details", "A universal third-party certification"],
            ["Specialty", "The attributes and evaluation being described", "A replacement for production certification"],
          ],
        },
      },
      {
        heading: "Specialty describes value and attributes, not every ethical issue",
        paragraphs: [
          "The Specialty Coffee Association’s definition recognises coffee or a coffee experience for distinctive attributes that create higher marketplace value. Reducing that to a single score or using it as a stand-in for every environmental and labour claim loses important distinctions.",
          "A coffee can be interesting and traceable without displaying every certification. Certification can also involve costs and access barriers. Ask for evidence proportionate to the specific claim instead of assuming the absence of one logo proves poor farming or unfair treatment.",
        ],
      },
      {
        heading: "A practical way to choose a bag",
        paragraphs: [
          "Decide which question matters most to you—production practices, trading arrangements, traceability or flavour—then check the evidence relevant to that question. Add roast date, bag size and brewing preference so a label does not distract from whether you will actually use and enjoy the coffee.",
          "If a bag tells an appealing story but leaves the central claim unclear, ask the roaster for the relevant certification or buying details. Then explore the farmer and processing articles for the work behind the label. Certification is one part of that picture, not a substitute for understanding the coffee itself.",
        ],
      },
    ],
    sources: [
      { label: "USDA: organic labelling categories and certification requirements", url: "https://www.ams.usda.gov/grades-standards/organic-labeling-standards" },
      { label: "Fairtrade: minimum-price and premium framework", url: "https://www.fairtrade.net/content/dam/fairtrade/global/minimum-price-table/Master_To%20do%20PDFs_Fairtrade_Minimum_Price_and_Premium_Table_EN_PUBLIC.pdf" },
      { label: "Specialty Coffee Association: what specialty coffee means", url: "https://sca.coffee/what-is-specialty-coffee" },
    ],
    links: [
      { label: "Understand the lives of coffee farmers", path: "/blog/seed-to-sprout-secret-lives-of-coffee-farmers" },
      { label: "Learn what processing changes in the cup", path: "/blog/the-magic-of-processing-washing-and-drying-shapes-flavor" },
      { label: "Separate decaf process claims from flavour", path: "/blog/decaf-coffee-methods-caffeine-buying-guide" },
    ],
  },
];
