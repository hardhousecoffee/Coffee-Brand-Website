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
    intro: "The difference shows up before you pull a shot: do you want to weigh beans for each drink, or keep a bag in the hopper and return to a familiar setting? The DF54 is built around single dosing and stepless adjustment. The original Encore ESP offers numbered steps and a hopper-based routine. Both deserve a closer look, but your daily habits are a better starting point than a flat-versus-conical argument.",
    sections: [
      {
        heading: "Compare the right versions",
        paragraphs: [
          "Turin’s current listing identifies a DF54 v4.1 with 54 mm flat burrs, stepless adjustment and revised chute and declumper details. The photograph here shows the DF54 family rather than documenting every current revision. Check the version included in the listing you are comparing.",
          "On the other side is the original Encore ESP, whose manual divides 40 settings into an espresso range, 1–20, and a filter range, 21–40. It is different from an ordinary Encore, so look for the full model name and check local support rather than relying on the Encore name alone.",
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
          "When reading a taste or retention comparison, look for the coffee, recipe and measurement method behind it. A claim such as “zero clumping” tells you little without that context. Use the documented adjustment system and maintenance procedure to judge fit, then treat taste comparisons as evidence from a particular setup.",
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
        heading: "Which routine would you rather repeat?",
        paragraphs: [
          "For someone learning espresso with one regular bag, clear steps can reduce indecision. For someone already weighing doses and wanting small adjustments, the DF54’s workflow is more aligned with that habit. If most of your coffee is filter coffee, first decide whether you really need an espresso-oriented grinder.",
          "If you are undecided, walk through a normal day: your first coffee, a second drink, a possible switch to decaf and cleanup. Would weighing each dose feel satisfying or tiresome? Would numbered steps make returning to yesterday’s recipe easier? The answers help turn two specification lists into a choice you can live with.",
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
    intro: "The first cup is only half the decision. What happens to the rest of the pot while you make breakfast or head back to your desk? The Moccamaster KB keeps a glass carafe on a hotplate; the OXO 9-Cup holds coffee in an insulated carafe. Start with how your household drinks a batch, then compare the controls and cleanup around it.",
    sections: [
      {
        heading: "First, make sure the models match",
        paragraphs: [
          "Moccamaster sells several brewers with different baskets, switches and carafes. This guide is about the KB with a manual drip-stop basket, not the KBGV Select or a KBT thermal model. The manufacturer’s KB listing describes the glass carafe, hotplate controls and basket selector.",
          "Likewise, OXO’s 9-Cup is not its 8-Cup single-serve-capable model. The 9-Cup uses a thermal carafe and an automated batch-brewing routine. Confirm the exact version and included carafe before relying on a review of another OXO brewer.",
        ],
      },
      {
        heading: "A coffee-maker cup is not necessarily your mug",
        paragraphs: [
          "Capacity labels are manufacturer-defined. Count how much water your household actually drinks rather than assuming nine coffee-maker cups will fill nine large mugs. Measure a normal serving once and compare the brewer’s marked volume with that amount.",
          "That measurement also helps you choose a batch size. A brewer that suits a busy breakfast table may be less convenient for one small cup, and making too much leaves you holding coffee you did not need. Check each machine’s supported minimum batch before planning around a single mug.",
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
          "For a starting recipe, about 60 grams per litre gives you a simple reference: a 750 ml batch uses 45 grams. Work within the brewer’s instructions, taste the result and adjust from there. Keeping the water volume and coffee mass written down makes the next batch easier to compare.",
        ],
      },
      {
        heading: "Which household fits each one?",
        paragraphs: [
          "The KB suits someone who likes a straightforward switch-based routine and does not mind managing the basket and glass pot. The OXO suits someone who values an insulated carafe and more automated batch management. Check service, replacement carafes and cleaning access before deciding.",
          "Picture where the pot will sit after brewing and how you will wash it when empty. If you finish coffee at the breakfast table, a glass-carafe routine may suit you. If you take the pot to a desk or another room, the insulated-carafe approach is worth considering. Neither makes brewing more coffee than you need a good habit.",
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
    intro: "The listing says 54 mm, your machine says 54 mm, and the new portafilter still will not lock in. Diameter alone cannot settle accessory fit. A tamper has to move freely inside the basket, while a portafilter needs the right mounting ears, clearance and locking geometry. A few checks before ordering can save you an awkward return—or damage from forcing the wrong part.",
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
          "Expect a learning curve and some mess. Keep your face and hands clear of hot liquid, and use the intended cup clearance. Concentrate on even distribution and a level tamp; the visible flow is useful feedback, not the final verdict on how the coffee tastes.",
        ],
      },
      {
        heading: "Choose tools for the problem you want to solve",
        paragraphs: [
          "A dosing funnel can reduce spilled grounds; a knock box can simplify cleanup. A tamper with a compatible base may improve comfort. Those are clear purposes. A large kit can include tools you do not need, with a size that fits one part of your setup but not another.",
          "Start with the original equipment and identify the inconvenience: spilled grounds, an uncomfortable handle or slow cleanup. Change one item that addresses it, then see whether the routine improves. Store chemical cleaning products separately from coffee and food-preparation tools.",
        ],
      },
      {
        heading: "A five-minute fit checklist",
        paragraphs: [
          "Before deciding, confirm the exact machine, basket, proposed accessory dimensions, supplier compatibility statement and return conditions. Save that information. It is much easier to resolve an incorrect part while it is unused than after it has been forced into the group.",
          "Keep original parts that work well. If a supplier cannot confirm the proposed replacement against your exact machine and basket, wait for a clear answer rather than relying on a photograph or a matching size label.",
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
