import type { ResearchedArticle } from "./types";

export const techniqueArticles: ResearchedArticle[] = [
  {
    slug: "espresso-sour-bitter-channeling-troubleshooting",
    title: "Sour or Bitter Espresso? Diagnose Before Adjusting",
    description: "Use a controlled espresso troubleshooting routine to separate weak concentration, under-extraction, bitterness and channeling without changing everything.",
    category: "Brewing Guides",
    image: "/images/espresso-pour-cup.jpg",
    imageAlt: "Espresso flowing into a cup during extraction",
    purpose: "A repeatable diagnostic process, rather than another beginner-machine recommendation.",
    intro: "You pull a sour shot, grind finer, and the next one tastes harsh. Now what? Before making another adjustment, give yourself a recipe you can repeat. Sourness can come from under-extraction or the coffee’s natural acidity; bitterness can come from extraction, roast or old coffee oils. A few notes on dose, yield and flavour will tell you more than changing every setting at once.",
    sections: [
      {
        heading: "Record a baseline you can actually repeat",
        paragraphs: [
          "Use fresh water approved for the machine, the same coffee and the correct basket. Record the dry coffee mass, beverage mass and time. For a conventional double basket, 18 grams in and 36 grams out is an illustrative 1:2 starting ratio—not an instruction to force 18 grams into a basket designed for less.",
          "Keep the basket dry before dosing, distribute consistently and tamp level. Follow the machine’s warm-up procedure. Choose whether to start timing at pump activation or first liquid, then stick with it; otherwise, your notes may show a difference that comes from the stopwatch rather than the coffee.",
        ],
      },
      {
        heading: "Separate concentration from extraction",
        paragraphs: [
          "Concentration describes how strong the drink is; extraction describes what was dissolved from the grounds. A short shot can be intense but sour. A long shot can be diluted yet harsh. Adding water after brewing changes concentration without continuing extraction through the puck.",
          "Taste the espresso after it cools slightly, then try a little plain hot water in a separate portion. If the flavour is pleasant but too intense, a shorter ratio is not necessarily the answer. If unpleasant flavours remain when diluted, investigate extraction, roast character and cleanliness.",
        ],
        table: {
          headers: ["Observation", "First check", "Controlled next experiment"],
          rows: [
            ["Fast, thin and sharply sour", "Dose, grind and puck preparation", "Grind a little finer at the same dose and yield"],
            ["Slow, drying and harsh", "Overly fine grind or excessive yield", "Change grind OR shorten yield, not both"],
            ["Sour and bitter together; irregular flow", "Uneven preparation or channeling", "Improve distribution before chasing temperature"],
            ["Stable flow but persistent smoky bitterness", "Roast, old oils and water", "Clean as instructed; compare a different roast"],
          ],
        },
      },
      {
        heading: "Use time as a clue, not a pass mark",
        paragraphs: [
          "A familiar time window can help you notice a large change, but it does not certify flavour. Pre-infusion, basket design and roast level affect the relationship between time and taste. A shot outside a popular target is not automatically wrong.",
          "Change the grind a small amount while holding dose and beverage yield steady. If the grinder manufacturer requires adjustments while running, follow that procedure safely. Allow for coffee remaining inside the grinder before deciding what the new setting did.",
        ],
      },
      {
        heading: "When more yield helps—and when it does not",
        paragraphs: [
          "If preparation is consistent and a shot remains sharply underdeveloped, a slightly longer beverage yield can help you test whether more extraction improves balance. Weigh the result; adding five grams of beverage is a more interpretable experiment than pressing a vaguely longer button.",
          "Stop if the result becomes thin and drying rather than sweeter. You are not obliged to make every coffee work at one ratio. For a lighter roast, the machine’s temperature capability or your grinder may limit the result. For a dark roast, a lower yield may preserve body without drawing out as much harshness.",
        ],
      },
      {
        heading: "Channeling can make apparently contradictory flavours",
        paragraphs: [
          "Water can travel through easier paths while leaving other areas less extracted. That can produce a sharp and harsh cup at the same time. Look for inconsistent preparation, obvious cracking, spraying from a bottomless basket or large unexplained changes between shots.",
          "Use those signs to check preparation first: the correct basket fill, even distribution and a level tamp. Changing temperature will not fix an uneven puck. If flow remains abnormal after approved cleaning, consult the manual or service support rather than dismantling hot equipment.",
        ],
      },
      {
        heading: "Keep a three-shot notebook instead of wasting a bag",
        paragraphs: [
          "Write the baseline, one adjustment and the tasting result. Repeat the promising change once before deciding it solved the problem. If results swing unpredictably, stop changing the recipe and check preparation, grinder behaviour and machine readiness.",
          "Keep the method suited to your equipment. A pressurised basket, pod machine or fully automatic unit has different adjustment options from an open-basket setup. Use the controls its manual supports and judge progress by whether the result becomes both better tasting and easier to repeat.",
        ],
      },
    ],
    sources: [
      { label: "KitchenAid: espresso troubleshooting by taste and flow", url: "https://www.kitchenaid.com/countertop-appliances/pinch-of-help/espresso-troubleshooting" },
      { label: "Breville Oracle Jet manual: preparation and adjustment guidance", url: "https://assets.breville.com/BES985/BES985_USCM_IB_A24_LR.pdf" },
    ],
    links: [
      { label: "Check whether your accessories and basket fit", path: "/blog/espresso-accessory-fit-54mm-58mm" },
      { label: "Check your brewing water", path: "/blog/espresso-water-hardness-alkalinity-guide" },
      { label: "Understand dark-roast espresso profiles", path: "/blog/top-5-dark-roast-beans-for-espresso-in-2026" },
    ],
  },
  {
    slug: "espresso-machine-cleaning-vs-descaling",
    title: "Cleaning vs Descaling an Espresso Machine",
    description: "Understand coffee-oil cleaning, backflushing, milk hygiene and mineral descaling, with a model-first routine that avoids unsafe universal recipes.",
    category: "Brewing Guides",
    image: "/images/products/la-specialista-main.jpg",
    imageAlt: "An espresso machine illustrating the equipment that needs model-specific care",
    purpose: "Maintenance safety and task selection; no existing article systematically covers these distinctions.",
    intro: "Your machine asks for a cleaning cycle, but the bottle in the cupboard says descaler. Can you use it? Not as a substitute. Cleaning removes coffee oils, grounds and milk residue; descaling tackles mineral deposits in the water path. Knowing which job is due helps you choose the right product and avoid a cycle that leaves the original problem untouched.",
    sections: [
      {
        heading: "Identify the machine before choosing a procedure",
        paragraphs: [
          "Find the full model number and current manual. A traditional portafilter machine, a fully automatic brewing unit and a capsule machine do not share one universal cleaning method. A video featuring a similar-looking machine is not enough evidence that the procedure is safe for yours.",
          "Backflushing is particularly easy to misunderstand. Some machines have the valve arrangement and approved cleaning cycle for it; others do not. Only use a blind basket, cleaning disc or detergent backflush when the manufacturer explicitly supports that operation. Never improvise a blocked water outlet.",
        ],
      },
      {
        heading: "Separate food residue from mineral scale",
        paragraphs: [
          "Once you have the right manual, separate the jobs by what you are removing. Coffee oils collect on baskets, portafilters and accessible brewing surfaces. Milk residue needs attention around wands, jugs and automatic milk systems. Scale forms in water-contact areas according to water chemistry and operating conditions.",
          "A descaler is not a general milk-system cleaner. A coffee-cleaning tablet is not a substitute for the correct descaling product. Keep products labelled, follow their intended concentration and rinse instructions, and never mix cleaning chemicals.",
        ],
        table: {
          headers: ["Task", "What it addresses", "Important boundary"],
          rows: [
            ["Basket and portafilter cleaning", "Grounds and coffee oils", "Check which materials may soak"],
            ["Approved group cleaning cycle", "Residue in supported brewing paths", "Not every machine supports backflushing"],
            ["Milk-system cleaning", "Milk-contact residue", "Clean promptly; use the correct procedure"],
            ["Descaling", "Mineral deposits", "Model, product and water dependent"],
          ],
        },
      },
      {
        heading: "Build the small daily routine first",
        paragraphs: [
          "Remove spent coffee, rinse the appropriate removable parts and empty the drip tray before it becomes a spill. Follow the instructions for wiping and purging the wand after milk preparation. Avoid touching hot metal or directing steam toward skin.",
          "For automatic milk systems, disassemble and clean only the parts specified by the manufacturer. Do not assume an automatic rinse sanitises every milk-contact surface. Let cleaned parts dry as directed rather than sealing damp residue in a container.",
        ],
      },
      {
        heading: "A schedule should follow water and usage",
        paragraphs: [
          "Use the machine’s prompts and maintenance schedule as the starting point. A calendar recommendation from a different household may not fit your water hardness or number of drinks. Keep a short record of filter changes, cleaning cycles and any water tests.",
          "Descaling more often is not automatically safer. The wrong acid, concentration or process can damage equipment. Some systems have service-specific guidance that differs from consumer thermoblock machines; follow the matching manual or ask authorised support.",
        ],
      },
      {
        heading: "Do not use vinegar as a universal shortcut",
        paragraphs: [
          "A common household product is not automatically approved for every internal water path. Before substituting vinegar, citric acid or another cleaner, check the exact manual. Odour, residues and material compatibility are reasons not to guess.",
          "If a machine stops flowing, leaks, trips an electrical circuit or behaves abnormally after maintenance, stop using it and seek model-specific support. Unplug and allow cooling when the instructions require it. Do not open a pressurised boiler or loosen hot fittings to investigate.",
        ],
      },
      {
        heading: "How this helps flavour troubleshooting",
        paragraphs: [
          "If a reliable recipe suddenly tastes stale or bitter, check for overdue cleaning before adjusting the grind and dose. Start with a clean system, then return to the beans, water and recipe if the flavour still seems wrong.",
          "Keep a simple record of the job, date and product used. That makes the next prompt easier to interpret and gives support staff useful information if a problem develops. Use your model’s manual for the procedure and the water guide to understand why a filter alone may not solve scaling.",
        ],
      },
    ],
    sources: [
      { label: "Breville BES875 manual: separate cleaning and descaling procedures", url: "https://assets.breville.com/BES875/BES875_ANZ_IB_F22_FA_LR.pdf" },
      { label: "Philips EP5544/90: model support and maintenance conditions", url: "https://www.usa.philips.com/c-p/EP5544_90/series-5500-fully-automatic-espresso-machine" },
      { label: "Ninja ES700-series care and preparation guidance", url: "https://support.sharkninja.com/article/ES700-Series-Ninja-Luxe-Cafe-Pro-Series-Getting-to-Know" },
    ],
    links: [
      { label: "Hardness, alkalinity and filtration", path: "/blog/espresso-water-hardness-alkalinity-guide" },
      { label: "Milk frothers and steam-wand care", path: "/blog/steam-wand-vs-electric-milk-frother" },
      { label: "Diagnose a sour or bitter shot", path: "/blog/espresso-sour-bitter-channeling-troubleshooting" },
    ],
  },
  {
    slug: "espresso-water-hardness-alkalinity-guide",
    title: "Espresso Water: Hardness Is Not Alkalinity",
    description: "Learn what hardness, alkalinity, TDS and filtration can tell you about espresso water—and why machine-specific limits matter more than a universal recipe.",
    category: "Brewing Guides",
    image: "/images/espresso-pour-cup.jpg",
    imageAlt: "Espresso in a cup, illustrating why brewing water affects the finished drink",
    purpose: "Water-testing and treatment decisions, distinct from recipes and routine maintenance.",
    intro: "Your tap water tastes fine, and the pitcher filter makes it taste better. Is it ready for the espresso machine? Not necessarily. A taste filter may leave hardness largely unchanged, while a TDS reading tells you little about which minerals are present. Before choosing a treatment, learn what your machine requires and what is in the water you put into its tank.",
    sections: [
      {
        heading: "Hardness, alkalinity and TDS answer different questions",
        paragraphs: [
          "Hardness mainly reflects calcium and magnesium. Alkalinity describes buffering: how strongly water resists a change in acidity. Total dissolved solids, commonly estimated with a conductivity meter, is a broad measure of dissolved material. A TDS number does not reveal which minerals are present.",
          "Two waters can have similar TDS but behave differently in the cup or inside a boiler. Likewise, a filter that improves chlorine odour may leave hardness largely unchanged. Read what a filter is designed and rated to do before assuming it reduces scale risk.",
        ],
        table: {
          headers: ["Measurement", "Useful question", "What it cannot prove alone"],
          rows: [
            ["Hardness", "How much calcium/magnesium is present?", "Overall corrosion risk or flavour balance"],
            ["Alkalinity", "How much buffering does the water provide?", "That the water meets every machine limit"],
            ["TDS", "Has dissolved content changed?", "Which minerals or contaminants are present"],
            ["Chloride", "Is a corrosion-related limit exceeded?", "That all other requirements are satisfied"],
          ],
        },
      },
      {
        heading: "Use manufacturer ranges as requirements, not a universal recipe",
        paragraphs: [
          "La Marzocco’s published guidance, for example, lists total hardness of 70–100 ppm and alkalinity of 40–80 ppm, along with other limits. Those are manufacturer-specific specifications, not an instruction that every espresso machine must use identical water.",
          "Before comparing a water report with those limits, check the units. Hardness and alkalinity can be reported as calcium-carbonate equivalents, often written “as CaCO₃.” A bottle label listing calcium itself is reporting a different quantity. Ask the manufacturer or treatment supplier to clarify an unfamiliar unit rather than comparing the numbers directly.",
        ],
      },
      {
        heading: "Test the water at the point you actually use it",
        paragraphs: [
          "A municipal report describes the supply, not necessarily the water after a household softener, a tired cartridge or a storage tank. Use an appropriate test for the required measurements. Follow the kit instructions and test cold source water, not a sample from a hot machine.",
          "Record the date, source and filter status. Recheck when you change cartridges, move, or see a material supply change. If the results are outside the machine’s limits, resolve that before treating frequent descaling as your only defence.",
        ],
      },
      {
        heading: "Why distilled water is not an automatic answer",
        paragraphs: [
          "Removing almost all minerals can create other problems. La Marzocco warns that very low-mineral water may be corrosive and can interfere with some level sensors. That is why “no scale” and “suitable water” are not equivalent claims.",
          "Reverse-osmosis systems and remineralisation products must be evaluated together. Do not improvise salt mixtures based on a recipe written for a different machine or a filter-coffee competition. Follow the equipment guidance and obtain qualified advice when the chemistry is uncertain.",
        ],
      },
      {
        heading: "Bottled water is not one consistent specification",
        paragraphs: [
          "Mineral content varies between brands and sources. A label saying spring water or mineral water does not establish machine compatibility. Find the analysis for the actual source and compare it with the required measurements.",
          "If you use a pitcher, check both its treatment mechanism and rated service life. A cartridge is not effective forever, and remaining life depends on the incoming water and consumption. The cheapest container is not necessarily the cheapest way to protect an expensive machine.",
        ],
      },
      {
        heading: "Compare flavour after the water meets the limits",
        paragraphs: [
          "If a light roast tastes muted or sharply acidic, water may contribute, but grind, ratio and roast also matter. Change the water only within the machine’s approved requirements and hold the brewing recipe steady when comparing.",
          "Keep the decision in this order: find the limits, test the source, choose suitable treatment, then compare flavour with a steady recipe. That leaves you with a water routine you can maintain instead of a series of changes whose effects are hard to separate.",
        ],
      },
    ],
    sources: [
      { label: "La Marzocco: water specifications, testing and low-mineral-water cautions", url: "https://www.lamarzocco.com/uk/en/technical-questions/la-marzocco-water-specifications" },
      { label: "Breville Duo-Temp Pro manual: water filtration and maintenance guidance", url: "https://assets.breville.com/Instruction-Booklets/ANZ/BES810_ANZ_IB_I21_FA_WEB.pdf" },
    ],
    links: [
      { label: "Understand cleaning versus descaling", path: "/blog/espresso-machine-cleaning-vs-descaling" },
      { label: "Diagnose extraction before changing every variable", path: "/blog/espresso-sour-bitter-channeling-troubleshooting" },
      { label: "Compare eight espresso machines under $3,000", path: "/blog/stepping-up-what-crossing-1000-mark-actually-buys-you" },
    ],
  },
  {
    slug: "steam-wand-vs-electric-milk-frother",
    title: "Steam Wand or Milk Frother? Match the Texture",
    description: "Choose between a steam wand and an electric frother by milk texture, cleanup, drink size and plant-milk behaviour—not by foam volume alone.",
    category: "Brewing Guides",
    image: "/images/products/nespresso-aeroccino4-main.jpeg",
    imageAlt: "Nespresso Aeroccino 4 electric milk frother",
    purpose: "Milk-texture workflow and troubleshooting; distinct from café-history FAQs defining milk drinks.",
    intro: "Do you want glossy milk that flows into the espresso, or a generous spoonful of foam on top? Start there, rather than with the appliance. A steam wand gives you direct control over heating and aeration; an electric frother offers a more contained routine. The best fit depends on the texture you enjoy and how much practice you want to put into making it.",
    sections: [
      {
        heading: "What actually changes between the two methods",
        paragraphs: [
          "A wand injects steam while you position the pitcher. You control when to introduce air and when to keep the milk circulating. An electric frother generally heats and agitates a measured amount in a dedicated vessel. Different programs can produce different textures, but do not assume every frother behaves like a café steam wand.",
          "Between them is the automatic wand, which uses steam while handling some positioning or temperature decisions for you. Compare what each system asks you to do, from filling the vessel to washing it, rather than deciding from a manual-versus-automatic label.",
        ],
      },
      {
        heading: "For fine texture, introduce air and then integrate it",
        paragraphs: [
          "With a manual wand, start with cold milk in the recommended fill range and purge as the manual directs. Briefly introduce air near the surface, then adjust the position to keep the milk circulating. Avoid repeatedly lifting the tip into open air, which encourages large bubbles and splashing.",
          "Stop at the temperature recommended for the milk and equipment; do not use boiling as a goal. A thermometer is more repeatable than guessing from how hot a pitcher feels. Steam burns are serious, so do not put fingers near the tip or remove a pitcher while steam is still running.",
        ],
      },
      {
        heading: "Why changing the milk can change everything",
        paragraphs: [
          "Technique is only part of the result. Protein, fat and formulation affect how bubbles form and hold, so two oat drinks can behave very differently with the same equipment. A barista-labelled plant milk is a useful starting point when you want to compare textures.",
          "If the foam collapses or separates, keep the method constant and try a different formulation before replacing the equipment. If the problem appears only after heating, review temperature and storage. Do not assume a result from one brand proves that an entire category of plant milk cannot work.",
        ],
      },
      {
        heading: "Respect the two different maximum-fill marks",
        paragraphs: [
          "A frother may permit more milk for heating than for frothing, because aeration increases volume. Nespresso’s Aeroccino 4 assistance pages distinguish milk and froth capacities and also separate older and refreshed versions. Use the markings and manual for your unit.",
          "Overfilling is not a shortcut to two drinks. It can create spills and leave more residue around the lid. If you regularly prepare several large milk drinks, compare usable frothing capacity and cleaning between batches rather than the vessel’s apparent size.",
        ],
        table: {
          headers: ["Priority", "Consider", "Check carefully"],
          rows: [
            ["Fine, pourable microfoam", "Steam wand with practice", "Steam power, control and milk formulation"],
            ["Simple repeatable preparation", "Electric frother or automatic wand", "Program texture and usable capacity"],
            ["Cold foam", "A model with a supported cold setting", "Cold foam is not steamed milk"],
          ],
        },
      },
      {
        heading: "Cleanup is part of the brewing method",
        paragraphs: [
          "Wipe and purge a wand according to its instructions immediately after use. For an electric frother, clean the whisk and milk-contact surfaces before residue dries. Never immerse an electrical base unless the manual specifically allows the relevant component to be washed that way.",
          "Some Aeroccino 4 components have dishwasher guidance that differs from other frothers. Do not transfer that permission to a different brand or model. Remove only parts designed for removal, and never scrape a coated surface with an unsuitable metal tool.",
        ],
      },
      {
        heading: "A low-waste way to improve your result",
        paragraphs: [
          "Choose one drink, one milk and a small supported batch. Record the program or wand routine, then change only one factor: aeration, final temperature or milk formulation. Pour promptly; textured milk changes while it stands.",
          "If the result suits your coffee, there is no need to chase a different texture for its own sake. A reliable frother may be enough for your daily drink. If you enjoy practising and want more control over the pour, a wand gives you room to develop that skill.",
        ],
      },
    ],
    sources: [
      { label: "Breville: steaming technique and equipment guidance", url: "https://www.breville.com/us/en/blog/coffee-and-espresso/how-to-steam-milk.html" },
      { label: "Nespresso: Aeroccino 4 original-version assistance", url: "https://www.nespresso.com/us/en/machine-assistance/aero4" },
      { label: "Nespresso: Aeroccino 4 refreshed-version assistance", url: "https://www.nespresso.com/us/en/machine-assistance/aero4refresh" },
    ],
    links: [
      { label: "How the Ninja ES701 handles milk preparation", path: "/blog/ninja-luxe-cafe-pro-es701-guide" },
      { label: "How LatteGo changes a household’s routine", path: "/blog/philips-5500-lattego-ownership-guide" },
      { label: "Keep milk-system cleaning separate from descaling", path: "/blog/espresso-machine-cleaning-vs-descaling" },
    ],
  },
];
