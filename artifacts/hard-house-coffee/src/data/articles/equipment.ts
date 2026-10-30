import type { ResearchedArticle } from "./types";

export const equipmentArticles: ResearchedArticle[] = [
  {
    slug: "turin-df54-vs-baratza-encore-esp",
    title: "DF54 vs Encore ESP: Choose a Grinding Workflow",
    description: "Compare the Turin DF54 and original Baratza Encore ESP by adjustment, single dosing, switching brew methods, cleaning, and daily workflow.",
    category: "Gear Reviews",
    image: "/images/products/turin-df54-hover2.webp",
    imageAlt: "Turin DF54 bean inlet and adjustment collar with its anti-popcorn insert removed",
    purpose: "Two specific grinders compared by workflow; complements rather than duplicates the general grinder-first buying guide.",
    intro: "Choose the DF54 if you want to weigh individual doses and make continuous espresso adjustments. Choose the original Encore ESP if a stepped adjustment system and the option of keeping beans in a hopper better match your routine. Neither burr shape nor the number on a dial can tell you which grinder will taste better with every coffee.",
    sections: [
      {
        heading: "Compare the right versions",
        paragraphs: [
          "This comparison concerns the DF54 family and the original Encore ESP, not every grinder with an Encore name. Turin’s current listing identifies a DF54 v4.1 with 54 mm flat burrs, stepless adjustment and revised chute and declumper details. The preserved catalog photograph illustrates the DF54 family; it is not evidence that every accessory or revision is identical.",
          "Baratza’s original Encore ESP manual divides its 40 settings into an espresso range, 1–20, and a filter range, 21–40. That is a different mechanism from an ordinary Encore. Check the exact version and local support arrangements before treating an older review as a description of today’s package.",
        ],
      },
      {
        heading: "The practical difference between stepped and stepless",
        paragraphs: [
          "Stepped adjustment gives you repeatable reference positions. If your recipe works at a particular number, returning there is straightforward. The compromise is that one step may move the extraction farther than you wanted. You can sometimes compensate with dose or beverage yield, but those changes also change the recipe.",
          "A stepless collar lets you move between those positions. That helps when a small grind change matters, but returning precisely to a previous setting requires your own reference. Neither system eliminates the need to taste, and dial numbers cannot be compared between different grinders.",
        ],
        table: {
          headers: ["Daily habit", "DF54 approach", "Original Encore ESP approach"],
          rows: [
            ["One bag, repeated drinks", "Weigh each dose", "Hopper or weighed doses"],
            ["Fine espresso adjustment", "Continuous collar movement", "Fixed espresso steps"],
            ["Switch to filter and back", "Record collar positions and recheck", "Record steps and recheck"],
          ],
        },
      },
      {
        heading: "Switching coffee is not the same as switching settings",
        paragraphs: [
          "A single-dose routine can be attractive if one person drinks decaf and another drinks regular coffee. Weigh the beans, grind, and check the output. Do not infer zero retention from the presence of a bellows or an anti-static system; some coffee can remain in a grinder, and the amount depends on conditions and technique.",
          "If you switch between espresso and pour-over, mark your references and expect to verify the next dose. Coffee left inside can mix with the next batch. Do not waste an arbitrary quantity on a universal purge recommendation: consult the manual, inspect the output and choose a repeatable routine.",
        ],
        image: { src: "/images/products/baratza-encore-esp-hover2.jpg", alt: "Baratza Encore ESP grinder from the preserved equipment catalog", caption: "The original Encore ESP uses separate espresso and filter adjustment ranges. Check the exact model, not just the Encore name." },
      },
      {
        heading: "Flat versus conical is not a flavour guarantee",
        paragraphs: [
          "The DF54’s flat-burr format and the Encore ESP’s conical design are useful specifications, but they do not establish a simple clarity-versus-body rule. Burr geometry, alignment, coffee, grind setting and brewing method all affect the cup.",
          "We have not performed a controlled taste, noise or retention comparison. Treat claims such as “zero clumping” or “better espresso every time” cautiously unless the review explains its method. For a buyer, adjustment and repeatability are easier to assess from documentation than a universal taste ranking.",
        ],
      },
      {
        heading: "Maintenance can decide which one stays pleasant to use",
        paragraphs: [
          "Look at how to reach the burrs and chute, which parts must remain dry and what happens to your calibration after cleaning. Unplug the grinder before the manual’s cleaning procedure; do not put water into its motor or burr chamber.",
          "Before choosing, check who supplies replacement parts and handles a warranty claim in your country. A slightly different daily routine may be acceptable; a grinder that is difficult to service locally may not be. Avoid comparing the sticker price while ignoring those ownership questions.",
        ],
      },
      {
        heading: "A useful decision, without declaring a universal winner",
        paragraphs: [
          "For someone learning espresso with one regular bag, clear steps can reduce indecision. For someone already weighing doses and wanting small adjustments, the DF54’s workflow is more aligned with that habit. If most of your coffee is filter coffee, first decide whether you really need an espresso-oriented grinder.",
          "Our broader grinder-first guide explains what to prioritise before buying. This comparison narrows that question to two specific adjustment systems; it does not repeat a list of every grinder on the market or create separate reviews merely to increase article count.",
        ],
      },
    ],
    sources: [
      { label: "Turin: current DF54 specifications and revision information", url: "https://www.turingrinders.com/products/turin-df54-single-dose-flat-burr-grinder-1" },
      { label: "Baratza: original Encore ESP instruction manual", url: "https://assets.breville.com/ZCG495/manual-encoreesp-v1-0-en-010923.pdf" },
    ],
    links: [
      { label: "Start with the grinder-first buying guide", path: "/blog/why-every-coffee-lover-needs-a-grinder-first-2026-guide" },
      { label: "Use grind changes to diagnose espresso", path: "/blog/espresso-sour-bitter-channeling-troubleshooting" },
      { label: "How to choose decaf beans", path: "/blog/decaf-coffee-methods-caffeine-buying-guide" },
    ],
  },
  {
    slug: "moccamaster-kb-vs-oxo-9-cup",
    title: "Moccamaster KB vs OXO 9-Cup: The Carafe Decision",
    description: "Compare the glass-carafe Moccamaster KB and thermal-carafe OXO 9-Cup by batch routine, drip control, holding coffee, cleanup and model differences.",
    category: "Gear Reviews",
    image: "/images/products/moccamaster-main.jpg",
    imageAlt: "Technivorm Moccamaster KB with its glass carafe",
    purpose: "Batch-filter ownership comparison; not covered by the manual pour-over recipe or espresso articles.",
    intro: "The most useful difference between these brewers is where your coffee goes after brewing. The Moccamaster KB uses a glass carafe and hotplate; the OXO 9-Cup uses an insulated carafe. If everyone pours immediately, that difference matters less. If you drink slowly or carry the pot to another room, it becomes central to the decision.",
    sections: [
      {
        heading: "Do not compare family names instead of models",
        paragraphs: [
          "Moccamaster sells several brewers with different baskets, switches and carafes. This guide is about the KB with a manual drip-stop basket, not the KBGV Select or a KBT thermal model. The manufacturer’s KB listing describes the glass carafe, hotplate controls and basket selector.",
          "Likewise, OXO’s 9-Cup is not its 8-Cup single-serve-capable model. The 9-Cup uses a thermal carafe and an automated batch-brewing routine. Confirm the exact version and included carafe before relying on a review of another OXO brewer.",
        ],
      },
      {
        heading: "A coffee-maker cup is not necessarily your mug",
        paragraphs: [
          "Capacity labels are manufacturer-defined. Count how much water your household actually drinks rather than assuming nine coffee-maker cups will fill nine large mugs. Measure a normal serving once and compare the brewer’s marked volume with that amount.",
          "Match the batch to your routine. A machine can suit a busy breakfast table but be less convenient for one small cup. Brewing a larger batch than you need also creates the holding problem you were trying to avoid. Check supported minimum batches instead of improvising a tiny brew in a full-sized basket.",
        ],
        image: { src: "/images/products/oxo-brew-main.jpg", alt: "OXO Brew 9-Cup coffee maker with an insulated carafe", caption: "The OXO 9-Cup’s thermal-carafe workflow differs from the KB’s glass carafe and hotplate." },
      },
      {
        heading: "Manual basket control versus automated batch management",
        paragraphs: [
          "The KB’s manual drip-stop gives you direct control over the basket outlet. That is useful only if you remember to use it correctly. Follow the manual’s position for the intended batch, and do not leave a closed basket unattended while water continues to enter.",
          "OXO describes automatic management of brewing time and temperature through its BetterBrew system. That can suit a household that wants to start a batch and move on. Automation does not compensate for a badly matched grind, a wrong filter or stale coffee, so use a consistent recipe first.",
        ],
      },
      {
        heading: "Think about the second cup, not only the first",
        paragraphs: [
          "A hotplate supplies heat after brewing; a thermal carafe slows heat loss. Neither method stops brewed coffee changing over time. Choose the design that suits how quickly you finish a batch rather than assuming a warmer second cup is automatically a better-tasting one.",
          "With an insulated pot, preheating and securing the lid according to the instructions can matter. With a glass carafe, keep the base and hotplate clean and respect the operating guidance. Do not put an insulated carafe on a stove or hotplate.",
        ],
      },
      {
        heading: "Use a fair comparison recipe",
        paragraphs: [
          "If you can evaluate both brewers, use the same coffee, water and starting brew ratio. Record the actual water volume instead of comparing unmatched “cup” marks. Adjust grind separately for each brewer rather than forcing the same setting to prove a point.",
          "A practical starting ratio for filter coffee is about 60 grams per litre, adjusted to taste and the brewer’s instructions. A 750 ml batch at that ratio uses 45 grams. That arithmetic is a recipe example, not a manufacturer-certified optimum for every coffee.",
        ],
      },
      {
        heading: "Which household fits each one?",
        paragraphs: [
          "The KB suits someone who likes a straightforward switch-based routine and does not mind managing the basket and glass pot. The OXO suits someone who values an insulated carafe and more automated batch management. Check service, replacement carafes and cleaning access before deciding.",
          "This is a specification-based comparison, not a timed brewing test or blind tasting. Both model families remain represented by manufacturer information at the research date; we do not claim that these are newly released machines or guarantee local stock.",
        ],
      },
    ],
    sources: [
      { label: "Moccamaster KB: official model and manual drip-stop description", url: "https://us.moccamaster.com/collections/glass-carafe-brewers/products/kb" },
      { label: "OXO: 9-Cup specifications and thermal-carafe description", url: "https://www.oxo.com/oxo-brew-9-cup-coffee-maker-matte-black.html" },
      { label: "OXO: matching 9-Cup replacement carafe", url: "https://www.oxo.com/oxo-on-9-cup-coffee-maker-carafe-rp.html" },
    ],
    links: [
      { label: "Learn a repeatable manual pour-over recipe", path: "/blog/the-art-of-the-perfect-pour-over" },
      { label: "Understand coffee-water minerals", path: "/blog/espresso-water-hardness-alkalinity-guide" },
      { label: "Understand roast dates and freshness", path: "/blog/logistics-and-freshness-journey-to-your-local-shelf" },
    ],
  },
  {
    slug: "espresso-accessory-fit-54mm-58mm",
    title: "54 mm or 58 mm? Avoid Espresso Accessory Fit Mistakes",
    description: "Check tamper diameter, basket depth, portafilter lugs and puck-screen clearance before choosing espresso accessories. A matching number is not enough.",
    category: "Gear Reviews",
    image: "/images/products/normcore-portafilter-main.jpg",
    imageAlt: "A bottomless espresso portafilter from the preserved Normcore accessory catalog",
    purpose: "Accessory compatibility checklist, not a duplicate machine or grinder review.",
    intro: "A matching diameter is the beginning of an espresso accessory check, not the end. A tamper needs to fit inside the basket; a replacement portafilter also needs the correct ears, handle clearance and locking geometry for your group. Buying a kit before checking those differences is an easy way to collect tools that do not work together.",
    sections: [
      {
        heading: "Separate the four dimensions people often mix up",
        paragraphs: [
          "Basket family, basket internal diameter, tamper diameter and portafilter attachment are related but different measurements. A machine sold as 54 mm does not require a tamper that is exactly 54.0 mm across. Manufacturers may specify a slightly smaller base so it moves without binding.",
          "Normcore’s accessory guidance illustrates why model-specific fit matters. A size label is useful, but a machine-family chart can still be too broad. Cross-check it with the machine manual and the particular basket you own. Do not assume every machine from one brand uses the same size.",
        ],
        table: {
          headers: ["Part", "Check before choosing", "Why the nominal diameter is insufficient"],
          rows: [
            ["Tamper", "Base size, basket taper and working depth", "A close fit may bind lower in the basket"],
            ["Portafilter", "Ear geometry, lock position and machine model", "Matching basket diameter does not ensure attachment"],
            ["Basket", "Rim, depth and portafilter clearance", "A deep basket may not fit a spouted holder"],
            ["Puck screen", "Diameter, thickness and headspace", "Extra thickness can contact the shower screen"],
          ],
        },
      },
      {
        heading: "Use the part you already own as the reference",
        paragraphs: [
          "Write down the machine’s full model number and photograph the original basket and portafilter. If a replacement supplier lists compatibility, check that exact code rather than a broad brand label. Ask the supplier to confirm ambiguous combinations before you order.",
          "If you measure, use an appropriate tool carefully and without modifying the part. Measuring only the rim can miss a taper inside the basket. Do not file a portafilter ear, force a handle into the group or grind down a tamper to make an uncertain purchase fit.",
        ],
      },
      {
        heading: "Basket depth changes how the dose behaves",
        paragraphs: [
          "A basket’s rated dose is a useful starting point, not a fixed mass for every coffee. Beans with different roast levels and densities can occupy different volumes at the same weight. Leave the headspace the machine and basket instructions require.",
          "Overfilling can make a puck touch the shower screen; underfilling can leave a shallow bed in a basket designed for more coffee. Diagnose the basket and recipe before buying a distributor or a new tamper. Adding another accessory does not solve a mismatch between the dose and basket.",
        ],
      },
      {
        heading: "A bottomless portafilter is a diagnostic tool",
        paragraphs: [
          "Removing the spouts lets you see where coffee exits the basket. Spraying can reveal uneven extraction, but the absence of spraying does not prove ideal flavour. Taste and repeatability still matter.",
          "A bottomless holder can also make a mess and expose you to hot liquid. Use it at the intended cup clearance and do not place your face or hands under an extraction. If you are learning, consistent distribution and a level tamp are more useful than buying a bottomless holder merely for photographs.",
        ],
      },
      {
        heading: "Buy a kit only if every important part earns its place",
        paragraphs: [
          "A dosing funnel can reduce spilled grounds; a knock box can simplify cleanup. A tamper with a compatible base may improve comfort. Those are clear purposes. A large kit can include tools you do not need, with a size that fits one part of your setup but not another.",
          "Start with the original equipment, identify the actual inconvenience and change one item. Keep accessories and chemical cleaning products away from food-preparation mix-ups. A tidy workstation is useful; a matching collection of tools is not evidence of better extraction.",
        ],
      },
      {
        heading: "A five-minute fit checklist",
        paragraphs: [
          "Before deciding, confirm the exact machine, basket, proposed accessory dimensions, supplier compatibility statement and return conditions. Save that information. It is much easier to resolve an incorrect part while it is unused than after it has been forced into the group.",
          "The preserved catalog photograph is an illustration of a bottomless portafilter, not a promise that the pictured model fits your machine. This guide explains the checks; it does not endorse a universal 54-to-58 mm conversion or recommend replacing properly functioning original parts.",
        ],
      },
    ],
    sources: [
      { label: "Normcore: tamper sizing and compatibility guidance", url: "https://www.normcorewares.com/products/normcore-heavy-coffee-tamper" },
      { label: "Breville BES985 manual: supplied portafilter and basket instructions", url: "https://assets.breville.com/BES985/BES985_USCM_IB_A24_LR.pdf" },
    ],
    links: [
      { label: "Diagnose uneven espresso before buying accessories", path: "/blog/espresso-sour-bitter-channeling-troubleshooting" },
      { label: "Build a budget setup around the essentials", path: "/blog/the-300-dollar-sweet-spot-real-espresso-at-home" },
      { label: "Understand machine cleaning procedures", path: "/blog/espresso-machine-cleaning-vs-descaling" },
    ],
  },
];
