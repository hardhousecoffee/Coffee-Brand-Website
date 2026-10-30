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
    intro: "Good decaf shopping starts with three questions: which process was used, when was the coffee roasted, and how much caffeine do you need to avoid? A process label describes how caffeine was removed; it does not guarantee flavour, freshness or zero caffeine. Choose the coffee as carefully as you would a regular bag.",
    sections: [
      {
        heading: "Decaffeination usually happens before roasting",
        paragraphs: [
          "Commercial decaffeination generally treats green coffee before it reaches the roaster. Water, temperature and a caffeine-removal mechanism are used to reduce caffeine while trying to preserve desirable coffee material. The coffee is subsequently dried and roasted.",
          "That means a light or dark roast is not itself a decaffeination method. Nor should a brown-looking bean be identified as a particular roast solely by appearance. Read the bag for process, origin and roast date, then use flavour and brewing behaviour to judge whether it suits you.",
        ],
      },
      {
        heading: "Understand the process names without ranking them by fear",
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
        heading: "Decaf is not a caffeine-free medical guarantee",
        paragraphs: [
          "The FDA explains that decaffeinated coffee still contains caffeine, typically around 2–15 mg in an 8-ounce cup. That is a general range, not a measurement of your bag or of a concentrated double espresso. Serving size, coffee and preparation affect the amount.",
          "If caffeine avoidance is medically important, ask a qualified clinician and seek product-specific information rather than relying on a process logo. Do not interpret a percentage removed from green beans as an exact caffeine dose in your finished drink.",
        ],
      },
      {
        heading: "Use a buying checklist instead of a universal best-decaf list",
        paragraphs: [
          "Look for a named roaster, a roast date, a clearly described process and enough origin or blend information to understand the intended flavour. If that information is missing, ask the roaster. A subscription or large discount is not useful if you cannot finish the quantity while you enjoy it.",
          "Try a manageable bag before committing to a large order. For espresso with milk, a chocolate-forward description may be more relevant than an elaborate list of fruit notes. For black filter coffee, clarity and roast balance may matter more. These are preference questions, not a fixed quality ladder.",
        ],
      },
      {
        heading: "Dial in the decaf as its own coffee",
        paragraphs: [
          "Do not assume your regular beans’ grind and dose will transfer perfectly. Start within the basket’s intended range, weigh the beverage and adjust one variable at a time. If the result flows differently, that is a reason to test the recipe, not automatically evidence of poor coffee.",
          "For a shared grinder, consider how you will switch bags and deal with coffee left in the grinding path. Follow the equipment instructions; do not claim a decaf dose is free of regular-coffee carryover after an unmeasured purge.",
        ],
      },
      {
        heading: "What to ask the roaster",
        paragraphs: [
          "Ask which process was used, when the current batch was roasted, which brewing methods it was developed for and whether the decaf offering changes seasonally. Those answers are more actionable than a claim that one process always tastes best.",
          "We have not tasted or measured caffeine in a shortlist of products, so this is a decision guide rather than a fabricated ranking. Use our freshness article for storage and our troubleshooting guide for espresso adjustments; neither replaces product-specific caffeine information.",
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
    intro: "Coffee labels answer different questions. Organic concerns a regulated production and handling standard. Fairtrade concerns a certification system with trading requirements. Direct trade can describe a buying relationship without identifying one universal certification. None of those labels, by itself, tells you whether you will enjoy the coffee.",
    sections: [
      {
        heading: "Start by asking what the claim is actually about",
        paragraphs: [
          "A bag can describe growing practices, financial arrangements, origin, roast or flavour. Those are not interchangeable. A meaningful assessment separates the claim, the organisation responsible for it and the evidence you can check.",
          "Look for a certification name and an identifiable roaster rather than treating a green colour scheme, a farm photograph or the word sustainable as proof. A detailed story can be informative, but a story alone is not an independently verified standard.",
        ],
      },
      {
        heading: "What USDA Organic does—and does not—establish",
        paragraphs: [
          "In the United States, organic labelling is governed by USDA rules and certification requirements, with different categories for different organic claims. Check the certifying information and the exact wording rather than assuming every mention of an organic ingredient permits the same seal.",
          "Organic is not a flavour score or a guarantee of higher farmer income. It also should not be translated into an absolute claim that a crop has never encountered any pesticide; the rules concern defined production practices and permitted substances. Use the standard’s actual scope, not a simplified marketing version.",
        ],
      },
      {
        heading: "Fairtrade is about a defined trading system",
        paragraphs: [
          "Fairtrade’s coffee framework includes minimum-price and premium provisions, with conditions that depend on the applicable standard and product. Prices and implementation dates can change, so a number quoted in an old article should not be treated as the current universal rate.",
          "A premium has a defined role within the system; it is not the same as proof that every individual farmer receives a fixed personal bonus. Ask which certification is involved and what the roaster can document. Similar-looking terms such as fair trade and a specific Fairtrade mark should not be assumed to represent identical arrangements.",
        ],
      },
      {
        heading: "Direct trade needs details, not just a confident label",
        paragraphs: [
          "A direct relationship can support traceability and communication, but the phrase does not identify one globally uniform certification. Ask who bought from whom, whether the relationship is ongoing and what information is published about the transaction.",
          "A disclosed farm name is useful but does not reveal the entire supply chain. Exporters, importers and local processing organisations can still play important roles. Do not assume an intermediary is automatically exploitative or that removing one always improves the producer’s outcome.",
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
          "This guide does not audit a farm or certify a roaster. It gives you a framework for reading claims and asking useful follow-up questions. For the day-to-day realities of cultivation and processing, continue with our existing farmer and processing articles rather than treating certification as the whole story.",
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
