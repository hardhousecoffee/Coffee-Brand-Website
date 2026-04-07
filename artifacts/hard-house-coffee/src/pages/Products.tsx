import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageNav from "@/components/PageNav";

const categories = ["All", "Espresso Machines", "Coffee Machines", "Coffee Grinders", "Accessories"];
const accessorySubcategories = ["All Accessories", "Kettles", "Coffee Mugs", "Glass/Cappuccino Mugs", "Insulated Mugs", "Spoons/Stirrers", "Milk Frothers", "Steaming Pitchers", "Barista Sets", "Coasters"];

const products = [
  {
    id: 1,
    category: "Espresso Machines",
    name: "De'Longhi La Specialista Touch",
    tagline: "Cold brew to espresso. One machine, limitless craft.",
    desc: "The La Specialista Touch combines sensor grinding, active temperature control, and cold brew extraction in a single machine. Designed for those who demand full creative control without sacrificing convenience.",
    price: "$999",
    originalPrice: "$1,199",
    rating: 4.8,
    reviews: 2134,
    badge: "Editor's Pick",
    badgeColor: "#8b2f2f",
    image: "/images/products/la-specialista-main.jpg",
    hoverImage: "/images/products/la-specialista-hover.jpg",
    pros: ["Sensor grinding with zero retention", "Cold brew extraction built-in", "Active temperature control", "Auto milk frothing system"],
  },
  {
    id: 2,
    category: "Espresso Machines",
    name: "De'Longhi Eletta Explore",
    tagline: "Full automation. Cold brew reimagined.",
    desc: "The Eletta Explore is a fully automatic machine that brings cold brew technology into your daily routine. With LatteCrema Hot & Cold, it crafts 12 signature beverages at the touch of a button.",
    price: "$1,299",
    originalPrice: "$1,499",
    rating: 4.7,
    reviews: 1456,
    badge: "Best Seller",
    badgeColor: "#a14f1f",
    image: "/images/products/p2.jpg",
    hoverImage: "/images/products/eletta-explore-hover.jpg",
    pros: ["One-touch cold brew", "LatteCrema Hot & Cold frother", "12 beverages on demand", "Built-in conical grinder"],
  },
  {
    id: 3,
    category: "Espresso Machines",
    name: "De'Longhi Dinamica Plus",
    tagline: "Smart brewing. Endless possibilities.",
    desc: "The Dinamica Plus features an intuitive 8.9\" touchscreen and the My LatteCrema system for perfectly textured hot and cold milk. Create and save your custom drink recipes with ease.",
    price: "$749",
    originalPrice: "$899",
    rating: 4.6,
    reviews: 3211,
    badge: "Smart Pick",
    badgeColor: "#5a3a1a",
    image: "/images/products/dinamica-plus-main.jpg",
    hoverImage: "/images/products/p6.jpg",
    pros: ["8.9\" TFT color touchscreen", "My LatteCrema milk system", "Customizable saved recipes", "Integrated bean-to-cup grinder"],
  },
  {
    id: 4,
    category: "Espresso Machines",
    name: "Breville Oracle Jet",
    tagline: "Hands-free barista. Zero compromise.",
    desc: "The Oracle Jet automates every step of the espresso-making process — from grinding and tamping to milk texturing — delivering third-wave specialty coffee at the press of a button.",
    price: "$1,999",
    originalPrice: "$2,299",
    rating: 4.9,
    reviews: 987,
    badge: "Ultra Premium",
    badgeColor: "#8b2f2f",
    image: "/images/products/oracle-jet-main.jpg",
    hoverImage: "/images/products/oracle-jet-hover.jpg",
    pros: ["Fully automated grinding & tamping", "Hands-free milk texturing", "Dual boiler system", "Heated group head for precision"],
  },
  {
    id: 5,
    category: "Espresso Machines",
    name: "Breville Barista Touch",
    tagline: "Guided espresso. Effortless mastery.",
    desc: "The Barista Touch features a guided touchscreen interface that walks you through every step of the brew process, from grind size to milk temperature — making barista-level espresso approachable for all.",
    price: "$999",
    originalPrice: "$1,199",
    rating: 4.8,
    reviews: 4562,
    badge: "Fan Favorite",
    badgeColor: "#a14f1f",
    image: "/images/products/p14.jpg",
    hoverImage: "/images/products/barista-touch-hover.jpg",
    pros: ["Guided touchscreen display", "Built-in conical burr grinder", "Auto milk texturing wand", "30 grind settings"],
  },
  {
    id: 6,
    category: "Espresso Machines",
    name: "Ninja Luxe Café Pro",
    tagline: "Premium café drinks. Ninja-engineered precision.",
    desc: "The Ninja Luxe Café Pro delivers up to 20 bars of pressure for rich, authentic espresso. Five brew styles and a built-in frother make it the most versatile machine in its class.",
    price: "$279",
    originalPrice: "$349",
    rating: 4.5,
    reviews: 6823,
    badge: "Best Value",
    badgeColor: "#5a3a1a",
    image: "/images/products/ninja-luxe-main.jpg",
    hoverImage: "/images/products/ninja-luxe-hover.jpg",
    pros: ["20-bar pressure pump", "5 brew styles in one machine", "Built-in steam frother", "Compact countertop footprint"],
  },
  {
    id: 7,
    category: "Espresso Machines",
    name: "Bosch 800 Series Espresso",
    tagline: "German engineering. Barista perfection.",
    desc: "The Bosch 800 Series brings Milk Express Plus technology and AROMA+ brewing to your countertop. Control every setting remotely with the Home Connect app for a seamless coffee ritual.",
    price: "$1,499",
    originalPrice: "$1,699",
    rating: 4.7,
    reviews: 1234,
    badge: "Premium Build",
    badgeColor: "#8b2f2f",
    image: "/images/products/p10.jpg",
    hoverImage: "/images/products/bosch-800-hover.jpg",
    pros: ["Milk Express Plus frother", "AROMA+ brewing technology", "HomeConnect app control", "Fully automatic cleaning program"],
  },
  {
    id: 8,
    category: "Espresso Machines",
    name: "Gaggia Magenta Prestige",
    tagline: "Super-automatic. Authentically Italian.",
    desc: "The Magenta Prestige combines Gaggia's legendary Italian espresso heritage with modern super-automatic convenience. Its ceramic flat burr grinder ensures a consistent, flavorful grind every time.",
    price: "$599",
    originalPrice: "$749",
    rating: 4.6,
    reviews: 1876,
    badge: "Italian Craft",
    badgeColor: "#a14f1f",
    image: "/images/products/gaggia-magenta-main.jpg",
    hoverImage: "/images/products/gaggia-magenta-hover.jpg",
    pros: ["Ceramic flat burr grinder", "One-touch specialty beverages", "Automatic steam wand", "Compact, stylish footprint"],
  },
  {
    id: 9,
    category: "Espresso Machines",
    name: "Philips 5500 LatteGo",
    tagline: "LatteGo frother. Effortless milk magic.",
    desc: "The Philips 5500 features the award-winning LatteGo milk system — the fastest, easiest-to-clean frother on the market. Paired with 5 grind settings and app connectivity, it's precision without pretension.",
    price: "$699",
    originalPrice: "$849",
    rating: 4.7,
    reviews: 5341,
    badge: "Easy Clean",
    badgeColor: "#5a3a1a",
    image: "/images/products/philips-5500-main.jpg",
    hoverImage: "/images/products/philips-5500-hover.jpg",
    pros: ["LatteGo milk system (2-part only)", "My Beverage app integration", "5 grind settings", "Auto descaling & cleaning"],
  },
  {
    id: 10,
    category: "Accessories",
    subcategory: "Kettles",
    name: "Fellow Stagg EKG Electric Kettle",
    tagline: "Pour-over perfection. Built for precision.",
    desc: "The Stagg EKG offers precision pour control with a temperature range of 135°F-212°F and a hold mode that maintains your desired temperature for 60 minutes.",
    price: "$169",
    originalPrice: "$195",
    rating: 4.8,
    reviews: 5621,
    badge: "Most Popular",
    badgeColor: "#8b2f2f",
    image: "/images/product-fellow.png",
    hoverImage: "/images/products/fellow-stagg-hover.webp",
    pros: ["±0.5° temperature accuracy", "Hold mode up to 60 min", "Precision pour spout"],
  },
  {
    id: 11,
    category: "Coffee Machines",
    name: "Technivorm Moccamaster KB",
    tagline: "Dutch precision. Perfect drip every time.",
    desc: "The Moccamaster brews coffee at the ideal temperature of 196-205°F and saturates the coffee grounds evenly for full extraction. Built to last a lifetime.",
    price: "$349",
    originalPrice: "$369",
    rating: 4.7,
    reviews: 3102,
    badge: "Best Drip",
    badgeColor: "#a14f1f",
    image: "/images/products/moccamaster-main.jpg",
    hoverImage: "/images/products/moccamaster-hover.webp",
    hoverImage2: "/images/products/moccamaster-hover2.webp",
    mainPosition: "center 30%",
    pros: ["Brews in 4-6 minutes", "Built to last decades", "Certified by ECBC"],
  },
  {
    id: 12,
    category: "Coffee Machines",
    name: "Breville Precision Brewer Thermal",
    tagline: "Gold Cup certified. Engineered for perfection.",
    desc: "The Precision Brewer is the only home coffee maker to earn SCA Gold Cup certification at this price point. It automatically adjusts brew time and water temperature for peak extraction every single brew.",
    price: "$170",
    originalPrice: "$220",
    rating: 4.8,
    reviews: 12847,
    badge: "SCA Certified",
    badgeColor: "#8b2f2f",
    image: "/images/products/breville-precision-main.jpg",
    hoverImage: "/images/products/breville-precision-hover.jpg",
    hoverImage2: "/images/products/breville-precision-hover2.jpg",
    pros: ["SCA Gold Cup certified", "Bloom & brew technology", "60 oz thermal carafe", "Precise temp control 200°F"],
  },
  {
    id: 13,
    category: "Coffee Machines",
    name: "OXO Brew 9-Cup Coffee Maker",
    tagline: "Rainmaker showerhead. Flawless saturation.",
    desc: "The OXO Brew 9-Cup earns SCA certification with its Rainmaker showerhead that distributes water evenly across the grounds for full, balanced extraction. A premium build for the serious home brewer.",
    price: "$180",
    originalPrice: "$230",
    rating: 4.7,
    reviews: 8934,
    badge: "SCA Certified",
    badgeColor: "#a14f1f",
    image: "/images/products/oxo-brew-main.jpg",
    hoverImage: "/images/products/oxo-brew-hover.jpg",
    hoverImage2: "/images/products/oxo-brew-hover2.jpg",
    hoverImage3: "/images/products/oxo-brew-hover3.jpg",
    pros: ["Rainmaker showerhead", "SCA Gold Cup certified", "Stainless thermal carafe", "Brew pause feature"],
  },
  {
    id: 15,
    category: "Coffee Machines",
    name: "Cuisinart DCC-3200P1 Perfectemp",
    tagline: "14 cups. Fully programmable. Always ready.",
    desc: "The Perfectemp is Cuisinart's most popular brewer for good reason. It holds coffee at the perfect serving temperature, brews a full 14 cups, and lets you program it the night before — reliable, bold, and built to last.",
    price: "$80",
    originalPrice: "$100",
    rating: 4.6,
    reviews: 89241,
    badge: "Top Seller",
    badgeColor: "#a14f1f",
    image: "/images/products/cuisinart-3200-main.jpg",
    hoverImage: "/images/products/cuisinart-3200-hover.jpg",
    pros: ["14-cup capacity", "Adjustable brew strength", "24-hour programmable", "Brew-pause feature"],
  },
  {
    id: 16,
    category: "Coffee Machines",
    name: "Ninja DualBrew Pro CFP301",
    tagline: "Drip or pod. One machine. Zero compromise.",
    desc: "The DualBrew Pro is Ninja's most capable coffee system — brewing a full 12-cup carafe with ground coffee or a single serve with any K-Cup pod, all from one sleek machine. With 5 brew styles, a built-in frother, and fold-away design, it's the most versatile coffee maker on the market.",
    price: "$179",
    originalPrice: "$229",
    rating: 4.8,
    reviews: 41203,
    badge: "Most Versatile",
    badgeColor: "#8b2f2f",
    image: "/images/products/ninja-cm401-hover.jpg",
    hoverImage: "/images/products/ninja-dualbrew-hover.webp",
    hoverImage2: "/images/products/ninja-dualbrew-hover2.webp",
    hoverImage3: "/images/products/ninja-dualbrew-hover3.webp",
    pros: ["Dual brew: full carafe + K-Cup pod compatible", "5 brew styles including specialty concentrate", "Built-in fold-away frother", "12-cup carafe + single-serve in one machine"],
  },
  {
    id: 17,
    category: "Coffee Grinders",
    name: "Fellow Ode Brew Grinder Gen 2",
    tagline: "Precision flat burrs. Barista-grade results at home.",
    desc: "The Ode Gen 2 is Fellow's acclaimed flat burr grinder, rebuilt with next-generation 64mm steel burrs for stunning clarity and consistency in every cup. Single-dose focused with near-zero retention, it's the grinder coffee enthusiasts actually save up for.",
    price: "$299",
    originalPrice: "$345",
    rating: 4.8,
    reviews: 1847,
    badge: "Award Winner",
    badgeColor: "#8b2f2f",
    image: "/images/products/fellow-ode-main.jpg",
    hoverImage: "/images/products/fellow-ode-hover.jpg",
    hoverImage2: "/images/products/fellow-ode-hover2.webp",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["64mm flat steel burrs for exceptional clarity", "Single-dose hopper with 0.3g retention", "31 grind settings — filter to AeroPress", "Acaia scale compatible anti-static grounds cup"],
    specs: [
      { label: "Burr Size", value: "64mm flat steel" },
      { label: "Grind Settings", value: "31 steps" },
      { label: "Retention", value: "~0.3g" },
      { label: "Hopper Capacity", value: "75g single-dose" },
      { label: "Grind Speed", value: "1.5–2g / sec" },
      { label: "Weight", value: "5.4 lbs" },
    ],
  },
  {
    id: 18,
    category: "Coffee Grinders",
    name: "Baratza Encore ESP",
    tagline: "Espresso-grade precision. Everyday approachability.",
    desc: "The Encore ESP is Baratza's most complete entry-level grinder — engineered with a stepped micro-adjustment ring for espresso-level control. With 40 grind settings spanning Turkish to French press, it covers every brew method with professional-grade Mahlkönig-sourced burrs.",
    price: "$195",
    originalPrice: "$229",
    rating: 4.7,
    reviews: 3214,
    badge: "Editor's Choice",
    badgeColor: "#a14f1f",
    image: "/images/products/baratza-encore-esp-hover2.jpg",
    hoverImage: "/images/products/baratza-encore-esp-main.webp",
    mainFit: "cover",
    mainPosition: "center 30%",
    pros: ["40mm conical steel burrs (Mahlkönig sourced)", "40 grind settings: Turkish to French press", "Pulse function for manual control", "Compact 9.5oz hopper with 4.4oz grounds bin"],
    specs: [
      { label: "Burr Size", value: "40mm conical" },
      { label: "Grind Settings", value: "40 steps" },
      { label: "Hopper Capacity", value: "9.5 oz" },
      { label: "Grounds Container", value: "4.4 oz" },
      { label: "Motor", value: "110V AC DC" },
      { label: "Weight", value: "7 lbs" },
    ],
  },
  {
    id: 19,
    category: "Coffee Grinders",
    name: "Breville Smart Grinder Pro",
    tagline: "60 grind settings. One perfect cup.",
    desc: "The Smart Grinder Pro brings professional consistency to your kitchen countertop. With 60 grind settings dialed via an intuitive LCD display, you can dose by time for single or double shots, cups of drip, or full carafes. The 18oz hopper handles family-sized demands.",
    price: "$199",
    originalPrice: "$239",
    rating: 4.5,
    reviews: 5641,
    badge: "Best Value",
    badgeColor: "#2b6cb0",
    image: "/images/products/breville-smart-grinder-main.jpg",
    hoverImage: "/images/products/breville-smart-grinder-hover.webp",
    hoverImage2: "/images/products/breville-smart-grinder-hover2.jpg",
    hoverImage3: "/images/products/breville-smart-grinder-hover3.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["60 precise grind settings via LCD dial", "Dose by time for shots, cups, or carafes", "60mm conical stainless steel burrs", "18oz sealed hopper with safety lock"],
    specs: [
      { label: "Burr Size", value: "60mm conical" },
      { label: "Grind Settings", value: "60 steps" },
      { label: "Hopper Capacity", value: "18 oz" },
      { label: "Display", value: "LCD precision dial" },
      { label: "Dose Mode", value: "Time-based (shots/cups)" },
      { label: "Weight", value: "7.3 lbs" },
    ],
  },
  {
    id: 20,
    category: "Coffee Grinders",
    name: "OXO Brew Conical Burr Grinder",
    tagline: "Simple operation. Specialty-grade results.",
    desc: "The OXO Brew Conical Burr delivers barista-quality grinding at an accessible price point. Its stainless steel burrs produce an even, uniform grind across 15 settings from espresso-fine to French press coarse. One button. One cup. No fuss.",
    price: "$109",
    originalPrice: "$129",
    rating: 4.4,
    reviews: 6823,
    badge: "Crowd Favorite",
    badgeColor: "#2b6cb0",
    image: "/images/products/oxo-conical-main.jpg",
    hoverImage: "/images/products/oxo-conical-hover.jpg",
    hoverImage2: "/images/products/oxo-conical-hover2.jpg",
    mainFit: "cover",
    mainPosition: "center 40%",
    pros: ["40mm stainless steel conical burrs", "15 grind settings for all brew methods", "Anti-static grounds container for easy use", "One-button start with auto shutoff"],
    specs: [
      { label: "Burr Size", value: "40mm conical" },
      { label: "Grind Settings", value: "15 steps" },
      { label: "Hopper Capacity", value: "0.5 lb beans" },
      { label: "Grounds Container", value: "Included" },
      { label: "Auto Shutoff", value: "Yes" },
      { label: "Weight", value: "4.2 lbs" },
    ],
  },

  {
    id: 49,
    category: "Coffee Grinders",
    name: "Turin DF54 Single Dose Flat Burr Grinder",
    tagline: "54mm flat burrs. Single-dose precision. Unbeatable value.",
    desc: "The Turin DF54 V3/V4 delivers specialty-grade flat burr performance at an entry-level price. Its 54mm stainless steel burrs produce an exceptionally uniform grind with low retention — rivaling grinders twice the price. The magnetic grounds cup, stepless adjustment collar, and cork-topped single-dose funnel make it the sleekest budget-to-mid grinder on the market.",
    price: "$229",
    originalPrice: "$279",
    rating: 4.8,
    reviews: 2841,
    badge: "Best Value Flat Burr",
    badgeColor: "#8b2f2f",
    image: "/images/products/turin-df54-main.jpg",
    hoverImage: "/images/products/turin-df54-hover.jpg",
    hoverImage2: "/images/products/turin-df54-hover2.webp",
    hoverImage3: "/images/products/turin-df54-hover3.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["54mm stainless steel flat burrs", "Stepless micro-adjustment collar", "Near-zero retention single-dose design", "Magnetic grounds cup with anti-static coating"],
    specs: [
      { label: "Burr Size", value: "54mm flat steel" },
      { label: "Adjustment", value: "Stepless collar" },
      { label: "Retention", value: "<0.2g" },
      { label: "RPM", value: "1350 rpm" },
      { label: "Hopper", value: "Single-dose funnel" },
      { label: "Weight", value: "4.1 lbs" },
    ],
  },

  // ── COFFEE MUGS ───────────────────────────────────────────
  {
    id: 21,
    category: "Accessories",
    subcategory: "Coffee Mugs",
    name: "Elama Diamond Waves Mug Set",
    tagline: "Colorful, ceramic, coffee-ready.",
    desc: "The Elama Diamond Waves 6-piece mug set brings bold color and café-style geometry to your morning routine. Each 12oz ceramic mug features a distinct hand-painted diamond wave design, finished with a matching stand for a cohesive display on any counter.",
    price: "$22.99",
    rating: 4.5,
    reviews: 1842,
    badge: "Colorful Set",
    badgeColor: "#8b2f2f",
    image: "https://i5.walmartimages.com/seo/Elama-Diamond-Waves-6-Piece-12-oz-Mug-Set-with-Stand-Assorted-Colors_1d8f7b22-3993-4412-aedb-1c6529cfd3b8.6a4dd008fd8f01a7b10e50adff5bc017.jpeg",
    hoverImage: "https://i5.walmartimages.com/asr/9c88e4eb-3c3a-4b5f-8a11-0a8969cf3a9f.1c778b5ede42c3362c483b1b3966b37f.jpeg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["6-piece set with stand included", "12oz ceramic mugs", "Dishwasher safe", "Bold diamond wave pattern"],
  },
  {
    id: 22,
    category: "Accessories",
    subcategory: "Coffee Mugs",
    name: "Crate & Barrel Moderno Glass Mug Set",
    tagline: "Modern clarity. Pure coffee pleasure.",
    desc: "The Moderno glass mug set from Crate & Barrel pairs minimalist Scandinavian lines with borosilicate glass. Clear walls showcase your espresso layers and latte art while the comfortable C-handle keeps hands protected from heat.",
    price: "$26.95",
    rating: 4.6,
    reviews: 924,
    badge: "C&B Exclusive",
    badgeColor: "#2b6cb0",
    image: "https://cb.scene7.com/is/image/Crate/s675803_s1?$web_zoom_furn_hero$",
    hoverImage: "https://cb.scene7.com/is/image/Crate/s675803_s2?$web_zoom_furn_hero$",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["Borosilicate glass construction", "Clear walls show latte art", "Sturdy C-handle design", "Dishwasher & microwave safe"],
  },
  {
    id: 23,
    category: "Accessories",
    subcategory: "Coffee Mugs",
    name: "Better Homes & Gardens Porcelain Mug Set",
    tagline: "Clean lines. Classic porcelain.",
    desc: "Better Homes & Gardens' porcelain mug set delivers a minimalist café aesthetic at a budget-friendly price. The square silhouette and matte white glaze bring clean, contemporary style to your coffee ritual. Set of 6 at 12oz each.",
    price: "$15.84",
    rating: 4.4,
    reviews: 6312,
    badge: "Best Value",
    badgeColor: "#5a3a1a",
    image: "https://i5.walmartimages.com/seo/Better-Homes-Gardens-Porcelain-12-ounce-Square-Mugs-White-Set-of-6_304afa73-353f-4abf-868a-3e3cd80b49ee_2.539b5cd24fa207e9f6e3be3d2ee51f76.jpeg",
    hoverImage: "https://m.media-amazon.com/images/I/71IJCVTTMmL._AC_SL1500_.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["Set of 6 porcelain mugs", "12oz capacity each", "Microwave & dishwasher safe", "Square silhouette, matte white finish"],
  },
  {
    id: 24,
    category: "Accessories",
    subcategory: "Coffee Mugs",
    name: "Matte Black Stoneware Mug Set",
    tagline: "Dark roast energy. Matte black aesthetic.",
    desc: "The Mainstays Alessandra matte black stoneware mug is built for the coffee lover who takes their ritual seriously. Stoneware construction retains heat longer than porcelain, while the sleek matte black exterior blends with any dark-themed coffee station.",
    price: "$9.92",
    rating: 4.3,
    reviews: 4418,
    badge: "Dark Aesthetic",
    badgeColor: "#8b2f2f",
    image: "https://i5.walmartimages.com/seo/Mainstays-Alessandra-Matte-Black-Stoneware-Mug-14-Ounce_51232c43-3b52-4aa3-bf77-75f5061c5636.173e6537ef9ff21d59d884e0cea5c32d.jpeg",
    hoverImage: "https://m.media-amazon.com/images/I/613rojbid8L._AC_SL1500_.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["14oz stoneware construction", "Superior heat retention", "Matte black finish", "Dishwasher safe"],
  },

  // ── GLASS / CAPPUCCINO MUGS ───────────────────────────────
  {
    id: 25,
    category: "Accessories",
    subcategory: "Glass/Cappuccino Mugs",
    name: "Zwilling Double Wall Glass Mug Set",
    tagline: "German engineering. Zero condensation.",
    desc: "ZWILLING's Sorrento Plus double-wall glass mugs are handblown from borosilicate glass with a suspended inner chamber that eliminates condensation and protects your hands from heat. The 12oz size is perfect for cappuccinos, lattes, or drip coffee.",
    price: "$28.50",
    rating: 4.7,
    reviews: 2103,
    badge: "German Craft",
    badgeColor: "#2b6cb0",
    image: "https://www.zwilling.com/dw/image/v2/BCGV_PRD/on/demandware.static/-/Sites-zwilling-master-catalog/default/dw2b1b1d45/images/large/39500-095_1.jpg?sw=800&sh=800&sm=fit",
    hoverImage: "https://www.zwilling.com/dw/image/v2/BCGV_PRD/on/demandware.static/-/Sites-zwilling-master-catalog/default/dw14fe2342/images/large/000008267.jpg?sw=800&sh=800&sm=fit",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["2-pc set, 12oz each", "Borosilicate double-wall glass", "Handblown construction", "Microwave, freezer & dishwasher safe"],
  },
  {
    id: 26,
    category: "Accessories",
    subcategory: "Glass/Cappuccino Mugs",
    name: "JoyJolt Double Wall Glass Mug Set",
    tagline: "Stay hot. Stay cool. Stay elegant.",
    desc: "JoyJolt's Savor double-wall mugs suspend your beverage in mid-air between crystal-clear borosilicate walls. This gravity-defying effect looks stunning with lattes and espresso drinks, while keeping beverages at temperature far longer than a standard glass.",
    price: "$23.95",
    rating: 4.6,
    reviews: 8945,
    badge: "Glass Art",
    badgeColor: "#2b6cb0",
    image: "https://www.joyjolt.com/cdn/shop/files/JG10251-Savor-Glass.jpg?v=1711686260&width=1946",
    hoverImage: "https://www.joyjolt.com/cdn/shop/files/JG10251-Savor-13.5oz-Se-of-2-2000x2000_-8.jpg?v=1771956227&width=1946",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["2-pc double-wall borosilicate set", "Floating beverage visual effect", "No condensation on exterior", "Freezer, microwave & dishwasher safe"],
  },
  {
    id: 27,
    category: "Accessories",
    subcategory: "Glass/Cappuccino Mugs",
    name: "Better Homes & Gardens Ribbed Glass Mug",
    tagline: "Ribbed texture. Everyday elegance.",
    desc: "BHG's ribbed 15oz double-wall glass mug brings café-quality drinking to your home counter. The ribbed exterior provides a comfortable grip, while the double-wall insulation keeps drinks hot without the mug burning your hand.",
    price: "$4.98",
    rating: 4.5,
    reviews: 3271,
    badge: "Everyday Pick",
    badgeColor: "#5a3a1a",
    image: "https://i5.walmartimages.com/seo/Better-Homes-Gardens-Ribbed-15-oz-Double-Wall-Glass-Mug-with-Handle_61cbdf4d-6c72-4ca8-9e5c-5a8db0156d28.d720f0d38bbd92a2aed838703c3f4438.jpeg",
    hoverImage: "https://i5.walmartimages.com/seo/2-pack-Better-Homes-Gardens-Ribbed-15-oz-Double-Wall-Glass-Mug-with-Handle_9c1ab68e-fc1d-458a-83b6-7a06e066b431.585462c616c8df9bc6290518468adbfd.jpeg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["15oz double-wall glass", "Ribbed exterior grip", "Stays cool to the touch", "Handle included"],
  },
  {
    id: 28,
    category: "Accessories",
    subcategory: "Glass/Cappuccino Mugs",
    name: "Double Wall Glass Mug Set",
    tagline: "Barista presentation. Home pricing.",
    desc: "A premium set of double-wall glass mugs that delivers professional café aesthetics at an accessible price. The floating coffee effect through clear borosilicate walls turns every cup into a display, while true insulation extends drink temperature significantly.",
    price: "$15.34",
    rating: 4.4,
    reviews: 5618,
    badge: "Smart Buy",
    badgeColor: "#5a3a1a",
    image: "https://m.media-amazon.com/images/I/714m9leLFSL._AC_SL1500_.jpg",
    hoverImage: "https://m.media-amazon.com/images/I/71k73LkkpYL._AC_SL1500_.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["Set of 4 double-wall mugs", "Borosilicate glass construction", "Temperature-retaining insulation", "Dishwasher safe"],
  },

  // ── INSULATED / KEEP-HOT MUGS ─────────────────────────────
  {
    id: 29,
    category: "Accessories",
    subcategory: "Insulated Mugs",
    name: "YETI Rambler Mug",
    tagline: "Zero compromise. Built for the wild.",
    desc: "The YETI Rambler Mug redefines what a coffee mug can do. With 18/8 stainless steel double-wall vacuum insulation, it keeps coffee hot for hours and is virtually indestructible. The MagSlider lid locks in temperature while resisting spills on the go.",
    price: "$30.00",
    rating: 4.8,
    reviews: 47231,
    badge: "Legendary",
    badgeColor: "#8b2f2f",
    image: "https://yeti-webmedia.imgix.net/asset/1dbbfe65-ed3a-46c0-b88d-1c997a63f3ea/W/Site_Studio_Drinkware_Rambler_Mug_24oz_Ridgeline_Front_4117_Layers_F_B_2400x2400.png?bg=0fff&auto=format,compress&w=1200&h=1200",
    hoverImage: "https://yeti-webmedia.imgix.net/m/5b61c521074b4e93/original/230077_PDP_R24_MS_Mug_Product_Overview_P1.jpg?auto=format,compress&fit=crop&w=1200&h=900",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["18/8 stainless steel vacuum insulation", "MagSlider lid included", "Dishwasher safe", "Hours of temperature retention"],
  },
  {
    id: 30,
    category: "Accessories",
    subcategory: "Insulated Mugs",
    name: "Owala SmoothSip Insulated Mug",
    tagline: "Smooth sipping. All-day insulation.",
    desc: "Owala's SmoothSip mug features their signature leak-proof lid with a protective cover that shields the spout from dust and grime. The double-wall vacuum insulation keeps coffee hot up to 8 hours in a colorful, BPA-free stainless steel body.",
    price: "$29.99",
    rating: 4.6,
    reviews: 12847,
    badge: "Leak-Proof",
    badgeColor: "#a14f1f",
    image: "https://m.media-amazon.com/images/I/311JdFvhtVL._AC_SL1500_.jpg",
    hoverImage: "https://m.media-amazon.com/images/I/41O8IdnN9HL._AC_SL1500_.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["Double-wall vacuum insulation", "SmoothSip leak-proof lid", "8+ hours hot retention", "BPA-free stainless steel"],
  },
  {
    id: 31,
    category: "Accessories",
    subcategory: "Insulated Mugs",
    name: "Contigo Travel Mug",
    tagline: "Auto-seal. Go-anywhere coffee.",
    desc: "The Contigo Huron 2.0 features SNAPSEAL technology — a fully automatic lid that seals itself between sips, preventing spills even when the mug is inverted. The 16oz stainless vacuum keeps coffee hot up to 7 hours, making it the commuter's most trusted companion.",
    price: "$19.94",
    rating: 4.6,
    reviews: 28934,
    badge: "Commuter Favorite",
    badgeColor: "#a14f1f",
    image: "https://i5.walmartimages.com/seo/Contigo-Huron-2-0-Stainless-Steel-Travel-Mug-with-SNAPSEAL-Lid-Licorice-16-fl-oz_2cd64e2b-22cf-4194-ab0f-8ca05a30615f.9f9e0fa9d6a167e831fe3045b3b79e82.jpeg",
    hoverImage: "https://m.media-amazon.com/images/I/7140OpuaTDL._AC_SL1500_.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["SNAPSEAL auto-seal lid", "16oz stainless steel", "Hot up to 7 hours", "One-handed operation"],
  },
  {
    id: 32,
    category: "Accessories",
    subcategory: "Insulated Mugs",
    name: "Ozark Trail Insulated Mug",
    tagline: "Rugged. Reliable. Ridiculously priced.",
    desc: "Ozark Trail's insulated stainless steel tumbler brings genuine double-wall vacuum performance at a fraction of premium brand pricing. The 22oz capacity, narrow base (fits most cup holders), and push-on lid make it a true everyday carry for coffee lovers who don't want to overspend.",
    price: "$16.47",
    rating: 4.4,
    reviews: 15622,
    badge: "Budget King",
    badgeColor: "#5a3a1a",
    image: "https://i5.walmartimages.com/seo/Ozark-Trail-22-oz-Insulated-Stainless-Steel-Tumbler-Tan_77b132b2-ca77-4ec2-9018-5904aaadec5e.734b0897d5017163cf68a40581c77673.jpeg",
    hoverImage: "https://m.media-amazon.com/images/I/710QmREH80L._AC_SL1500_.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["22oz double-wall vacuum", "Fits standard cup holders", "BPA-free stainless body", "Sweat-free exterior"],
  },

  // ── SPOONS / STIRRERS ─────────────────────────────────────
  {
    id: 33,
    category: "Accessories",
    subcategory: "Spoons/Stirrers",
    name: "Bar Above Cocktail Spoon",
    tagline: "Twisted precision for the serious barista.",
    desc: "The Bar Above cocktail spoon doubles brilliantly as a long-handled coffee stirrer. The 12-inch twisted shaft reaches to the bottom of the tallest glass, while the flat paddle end helps layer lattes and stir sugar syrups to full dissolution.",
    price: "$24.00",
    rating: 4.7,
    reviews: 3841,
    badge: "Barista Tool",
    badgeColor: "#a14f1f",
    image: "https://m.media-amazon.com/images/I/71d9Wp6Nn4L._AC_SL1500_.jpg",
    hoverImage: "https://m.media-amazon.com/images/I/31BReWcqCtL._AC_SL1500_.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["12-inch twisted stainless steel shaft", "Ideal for layering & stirring", "Dishwasher safe", "Set of 4"],
  },
  {
    id: 34,
    category: "Accessories",
    subcategory: "Spoons/Stirrers",
    name: "Gourmet Settings Windermere Long Spoon",
    tagline: "Elegant handle. Everyday reach.",
    desc: "The Gourmet Settings Windermere long-handle iced tea spoon is a refined stirring utensil with a classic filigree handle pattern. At 8.5 inches, it reaches the bottom of tall latte glasses and large mugs with ease, in polished 18/10 stainless steel.",
    price: "$2.38",
    rating: 4.5,
    reviews: 2218,
    badge: "Classic Style",
    badgeColor: "#5a3a1a",
    image: "https://i5.walmartimages.com/seo/Gourmet-Settings-Windermere-Iced-Tea-Spoon_d6726cb8-1f82-4fc7-8c03-f3bc8f19bc60.fe6951cda669dbe7815134f2da89a00e.jpeg",
    hoverImage: "https://m.media-amazon.com/images/I/611uoxzL2rL._AC_SL1500_.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["8.5-inch long handle design", "18/10 polished stainless steel", "Windermere filigree pattern", "Dishwasher safe"],
  },
  {
    id: 35,
    category: "Accessories",
    subcategory: "Spoons/Stirrers",
    name: "Latte Long Handle Spoon Set",
    tagline: "Reach every drop. Stir every layer.",
    desc: "Purpose-built for tall latte glasses and oversized mugs, this long-handle spoon set combines extra length with a traditional rounded bowl. The smooth stainless finish pairs well with any coffee setup, and the set of 6 means you're covered for the whole household.",
    price: "$11.49",
    rating: 4.5,
    reviews: 4712,
    badge: "Latte Essential",
    badgeColor: "#8b2f2f",
    image: "https://m.media-amazon.com/images/I/615TumECpFL._AC_SL1500_.jpg",
    hoverImage: "https://m.media-amazon.com/images/I/31nmiD9pVuL._AC_SL1500_.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["Set of 6 long-handle spoons", "Stainless steel construction", "Reaches tall glasses easily", "Dishwasher safe"],
  },
  {
    id: 36,
    category: "Accessories",
    subcategory: "Spoons/Stirrers",
    name: "Bamboo Stir Spoon",
    tagline: "Natural stir. Zero plastic.",
    desc: "A minimalist bamboo coffee stirrer that's both eco-friendly and perfectly functional. The smooth tapered end stirs espresso, cortados, and pour-overs without scratching delicate glass walls, while the natural bamboo finish complements any organic coffee aesthetic.",
    price: "$0.97",
    rating: 4.3,
    reviews: 6891,
    badge: "Eco Pick",
    badgeColor: "#5a3a1a",
    image: "https://m.media-amazon.com/images/I/41wtirWTXyL._AC_SL1500_.jpg",
    hoverImage: "https://m.media-amazon.com/images/I/61Lmg-fKtxL._AC_SL1500_.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["100% natural bamboo", "Won't scratch glass", "Biodegradable & compostable", "Pack of 100"],
  },

  // ── MILK FROTHERS ─────────────────────────────────────────
  {
    id: 37,
    category: "Accessories",
    subcategory: "Milk Frothers",
    name: "Dreo Electric Milk Frother",
    tagline: "Four modes. Barista-perfect texture.",
    desc: "The Dreo CF201 electric milk frother produces professional foam for lattes, cappuccinos, and matcha. With four whisking modes — hot foam, cold foam, hot milk, and cold milk — it handles any café-style beverage. The automatic shutoff and non-stick interior make it the most convenient frother at this price.",
    price: "$59.99",
    rating: 4.6,
    reviews: 7218,
    badge: "Top Rated",
    badgeColor: "#8b2f2f",
    image: "https://www.dreo.com/cdn/shop/files/DR-HHM006S_65ab8b6d-d026-468e-a870-c2537e2450b9.png?v=1732011176&width=1080",
    hoverImage: "https://m.media-amazon.com/images/I/41PRkdw6ngL._AC_SL1500_.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["4 frothing modes", "Non-stick interior coating", "Auto shutoff safety", "450ml capacity"],
  },
  {
    id: 38,
    category: "Accessories",
    subcategory: "Milk Frothers",
    name: "Bodum Electric Milk Frother",
    tagline: "Danish design. Velvety foam.",
    desc: "BODUM's Bistro electric milk frother delivers barista-quality foam with minimalist Scandinavian style. A 15-second whisk cycle produces rich, creamy foam at the touch of a button — hot or cold. The stainless steel carafe is dishwasher safe, making cleanup effortless.",
    price: "$24.49",
    rating: 4.5,
    reviews: 9341,
    badge: "Danish Design",
    badgeColor: "#2b6cb0",
    image: "https://m.media-amazon.com/images/I/51ewwJtQM6L._AC_SL1500_.jpg",
    hoverImage: "https://m.media-amazon.com/images/I/61SvYFEp4UL._AC_SL1500_.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["15-second foam cycle", "Hot & cold foam modes", "Stainless steel carafe", "Dishwasher safe lid & whisk"],
  },
  {
    id: 39,
    category: "Accessories",
    subcategory: "Milk Frothers",
    name: "Instant 4-in-1 Milk Frother",
    tagline: "One frother. Four functions.",
    desc: "Instant's 4-in-1 milk frother covers every café-style milk preparation in a single device: hot frothing, cold frothing, hot milk, and cold milk. The 10oz capacity handles enough for two drinks per cycle, with quiet operation and a one-touch interface.",
    price: "$29.99",
    rating: 4.6,
    reviews: 11823,
    badge: "Versatile",
    badgeColor: "#a14f1f",
    image: "https://m.media-amazon.com/images/I/61HftJTWaUL._AC_SL1500_.jpg",
    hoverImage: "https://m.media-amazon.com/images/I/61ocYSTduVL._AC_SL1500_.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["4-in-1 hot & cold modes", "10oz capacity (serves 2)", "Whisper-quiet operation", "Non-stick interior"],
  },
  {
    id: 40,
    category: "Accessories",
    subcategory: "Milk Frothers",
    name: "Ventus Electric Milk Frother",
    tagline: "Compact power. Luxurious foam.",
    desc: "The Ventus electric milk frother delivers professional-grade foam in a sleek, counter-friendly footprint. With a 300ml capacity and three foam density settings, it customizes texture for flat whites, cappuccinos, and macchiatos — all in under 60 seconds.",
    price: "$29.99",
    rating: 4.5,
    reviews: 5431,
    badge: "Compact Pro",
    badgeColor: "#a14f1f",
    image: "https://m.media-amazon.com/images/I/61XaUMmP7OL._AC_SL1500_.jpg",
    hoverImage: "https://m.media-amazon.com/images/I/51vEXaDx+iL._AC_SL1500_.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["3 foam density settings", "300ml capacity", "Ready in under 60 seconds", "Auto shutoff protection"],
  },

  // ── STEAMING PITCHERS ─────────────────────────────────────
  {
    id: 41,
    category: "Accessories",
    subcategory: "Steaming Pitchers",
    name: "Williams Sonoma Milk Frothing Pitcher",
    tagline: "Barista-ready. Beautifully precise.",
    desc: "Williams-Sonoma's stainless steel milk frothing pitcher is machined to exact barista tolerances. The curved spout produces a fine stream for latte art, while the mirror-polished 18/10 stainless body is easy to read temperature through tactile feel. A must for any serious home espresso setup.",
    price: "$22.95",
    rating: 4.7,
    reviews: 4218,
    badge: "WS Exclusive",
    badgeColor: "#8b2f2f",
    image: "https://assets.wsimgs.com/wsimgs/rk/images/dp/ecm/202614/3305/001/002.jpg",
    hoverImage: "https://assets.wsimgs.com/wsimgs/rk/images/dp/ecm/202614/3305/001/015.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["18/10 mirror-polished stainless", "Precision latte art spout", "Exact temperature feel", "Dishwasher safe"],
  },
  {
    id: 42,
    category: "Accessories",
    subcategory: "Steaming Pitchers",
    name: "De'Longhi Stainless Steel Frothing Pitcher",
    tagline: "Official De'Longhi. Perfect pairing.",
    desc: "De'Longhi's official frothing pitcher is purpose-designed to pair with their espresso machine steam wands. The tapered base fits snugly under the wand, while the straight pour spout and measurement markings help you nail milk ratios every time.",
    price: "$19.95",
    rating: 4.6,
    reviews: 6827,
    badge: "De'Longhi Official",
    badgeColor: "#8b2f2f",
    image: "https://m.media-amazon.com/images/I/61qpJ7dCyHL._AC_SL1500_.jpg",
    hoverImage: "https://m.media-amazon.com/images/I/51hLBFRjQ4L._AC_SL1500_.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["Official De'Longhi accessory", "Measurement markings inside", "Tapered base for steam wand fit", "Dishwasher safe 18/10 steel"],
  },
  {
    id: 43,
    category: "Accessories",
    subcategory: "Steaming Pitchers",
    name: "Fino Stainless Steel Frothing Pitcher",
    tagline: "Budget barista. Zero compromise.",
    desc: "Fino's stainless steel frothing pitcher delivers real latte-art capability at a price that won't hurt your wallet. The angled pour spout and graduated interior markings help beginners and pros alike hit the perfect milk ratios for any espresso drink.",
    price: "$10.00",
    rating: 4.5,
    reviews: 8931,
    badge: "Best Value",
    badgeColor: "#5a3a1a",
    image: "https://m.media-amazon.com/images/I/61lfM6f26gL._AC_SL1500_.jpg",
    hoverImage: "https://m.media-amazon.com/images/I/31X3Y5CqOFL._AC_SL1500_.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["Angled latte art spout", "Graduated measurement markings", "18/8 stainless steel", "Dishwasher safe"],
  },
  {
    id: 44,
    category: "Accessories",
    subcategory: "Steaming Pitchers",
    name: "De'Longhi Premium Frothing Pitcher",
    tagline: "Premium performance. Iconic brand.",
    desc: "De'Longhi's premium milk jug elevates the frothing experience with a thicker stainless wall that maintains temperature longer during wanding. The wider base provides stability, while the precision-rolled spout creates the controlled pour stream required for rosettes and hearts.",
    price: "$29.95",
    rating: 4.7,
    reviews: 3124,
    badge: "Premium",
    badgeColor: "#8b2f2f",
    image: "https://m.media-amazon.com/images/I/613guaQmW+L._AC_SL1500_.jpg",
    hoverImage: "https://m.media-amazon.com/images/I/61iaHBReq2L._AC_SL1500_.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["Thicker stainless steel walls", "Precision-rolled pour spout", "Wide stable base", "Rosette & heart pattern capable"],
  },

  // ── BARISTA SETS / TAMPING KITS ───────────────────────────
  {
    id: 45,
    category: "Accessories",
    subcategory: "Barista Sets",
    name: "Normcore Barista Compact Essentials Kit",
    tagline: "The complete arsenal. Compact form.",
    desc: "Normcore's Compact Barista Essentials Kit bundles their most-loved tools — the V5 spring-loaded tamper, distribution tool, WDT needle stirrer, and dosing funnel — into one cohesive set. Each tool is precision-machined from stainless steel and designed to fit the workflow of the serious home barista.",
    price: "$282.99",
    rating: 4.9,
    reviews: 1847,
    badge: "Normcore Pro",
    badgeColor: "#8b2f2f",
    image: "https://m.media-amazon.com/images/I/61MPI4fxxoL._AC_SL1500_.jpg",
    hoverImage: "https://m.media-amazon.com/images/I/71mwEg3YmwL._AC_SL1500_.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["Spring-loaded tamper V5", "WDT distribution needle tool", "Dosing funnel included", "Full 18/10 stainless construction"],
  },
  {
    id: 54,
    category: "Accessories",
    subcategory: "Barista Sets",
    name: "Normcore Barista Essential Tool Kit",
    tagline: "Everything you need. Nothing you don't.",
    desc: "Normcore's Barista Essential Tool Kit is the definitive home espresso setup — a complete collection featuring the V4 tamper, leveler/distributor, WDT needle stirrer, dosing ring, puck screen, and an organizational mat to keep it all in place. Precision-machined from stainless steel and available in matte black or white, this kit transforms your counter into a proper espresso station.",
    price: "$319.00",
    rating: 4.9,
    reviews: 2341,
    badge: "Full Kit",
    badgeColor: "#8b2f2f",
    image: "/images/products/normcore-kit-main.jpeg",
    hoverImage: "/images/products/normcore-kit-hover1.jpeg",
    hoverImage2: "/images/products/normcore-kit-hover2.jpeg",
    hoverImage3: "/images/products/normcore-kit-hover3.jpeg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["V4 tamper + leveler/distributor combo", "WDT needle stirrer & dosing ring", "Puck screen included", "Org mat keeps tools station-ready"],
  },
  {
    id: 55,
    category: "Accessories",
    subcategory: "Barista Sets",
    name: "Normcore Barista Complete Essentials Kit - With Portafilter",
    tagline: "The full barista station. Portafilter included.",
    desc: "Normcore's Complete Barista Essentials Kit takes their precision-engineered tool lineup one step further — adding a bottomless portafilter to the set. Includes the V4 tamper, leveler/distributor, WDT needle stirrer, portafilter brush, and an oak organizational board. Crafted from stainless steel and finished in matte white, this is the complete counter setup for the serious home barista.",
    price: "$389.00",
    rating: 4.9,
    reviews: 1563,
    badge: "Complete Set",
    badgeColor: "#8b2f2f",
    image: "/images/products/normcore-complete-main.jpeg",
    hoverImage: "/images/products/normcore-complete-hover1.jpeg",
    hoverImage2: "/images/products/normcore-complete-hover2.jpeg",
    hoverImage3: "/images/products/normcore-complete-hover3.jpeg",
    hoverImage4: "/images/products/normcore-complete-hover4.jpeg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["Bottomless portafilter included", "V4 tamper + leveler/distributor", "WDT needle stirrer & portafilter brush", "Oak organizational display board"],
  },
  {
    id: 46,
    category: "Accessories",
    subcategory: "Barista Sets",
    name: "Williams Sonoma Espresso Tamp Set",
    tagline: "Precision staging. Williams-Sonoma standards.",
    desc: "Williams-Sonoma's espresso tamper and stand set brings professional puck preparation to the home barista. The weighted stainless tamper delivers consistent 30-lb pressure, while the matching stand holds everything cleanly on your counter between pulls.",
    price: "$114.95",
    rating: 4.7,
    reviews: 2314,
    badge: "WS Premium",
    badgeColor: "#a14f1f",
    image: "https://assets.wsimgs.com/wsimgs/rk/images/dp/ecm/202614/3233/001/002.jpg",
    hoverImage: "https://assets.wsimgs.com/wsimgs/rk/images/dp/ecm/202614/3233/001/003.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["Weighted stainless tamper", "Matching tamper stand included", "30-lb consistent pressure", "Counter-ready storage design"],
  },
  {
    id: 47,
    category: "Accessories",
    subcategory: "Barista Sets",
    name: "22-Piece Espresso Tool Kit",
    tagline: "Every tool. One complete kit.",
    desc: "This comprehensive 22-piece espresso tool set has everything the home barista needs to master puck preparation. Includes a tamper, distribution tool, WDT stirrer, dosing ring, two pitchers, and a full suite of cleaning accessories — all in stainless steel with a storage case.",
    price: "$38.99",
    rating: 4.5,
    reviews: 6821,
    badge: "Complete Set",
    badgeColor: "#a14f1f",
    image: "https://m.media-amazon.com/images/I/71A7aW8oMqL._AC_SL1500_.jpg",
    hoverImage: "https://m.media-amazon.com/images/I/71+V2fL2UbL._AC_SL1500_.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["22-piece complete barista kit", "Tamper, distributor & WDT tool", "Two frothing pitchers included", "Stainless steel with storage case"],
  },
  {
    id: 48,
    category: "Accessories",
    subcategory: "Barista Sets",
    name: "Crema Coffee Tamper & Distributor",
    tagline: "Two tools. One precision movement.",
    desc: "Crema Coffee's dual-head tamper and distributor is the most efficient tool a home barista can own. Flip it over to switch between the flat-base tamper and the leveling distributor — eliminating channeling and ensuring a perfectly flat puck every time with one instrument.",
    price: "$44.00",
    rating: 4.8,
    reviews: 4217,
    badge: "Editor's Choice",
    badgeColor: "#8b2f2f",
    image: "https://m.media-amazon.com/images/I/61wGLDPS-xL._AC_SL1500_.jpg",
    hoverImage: "https://m.media-amazon.com/images/I/51wmJ0-FIaL._AC_SL1500_.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["Dual-head tamper & distributor", "Eliminates channeling", "Precision stainless machining", "Fits 58mm baskets"],
  },

  // ── COASTERS ──────────────────────────────────────────────
  {
    id: 50,
    category: "Accessories",
    subcategory: "Coasters",
    name: "Marble Coaster Set",
    tagline: "Natural stone. Timeless elegance.",
    desc: "Hand-cut from genuine white marble with natural grey veining, these 4-inch coasters provide the most premium surface protection money can buy at this price point. Each piece is unique thanks to nature's own patterning, and the cork base prevents any scratching.",
    price: "$15.00",
    rating: 4.6,
    reviews: 5412,
    badge: "Natural Stone",
    badgeColor: "#5a3a1a",
    image: "https://m.media-amazon.com/images/I/51phOsKh6OL._AC_SL1500_.jpg",
    hoverImage: "https://m.media-amazon.com/images/I/61xesnj+dpL._AC_SL1500_.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["Genuine marble stone", "Unique natural veining each piece", "Cork non-slip base", "Set of 4"],
  },
  {
    id: 51,
    category: "Accessories",
    subcategory: "Coasters",
    name: "Stainless Steel Coaster Set",
    tagline: "Industrial chic. Zero-rust protection.",
    desc: "A set of 4 mirror-polished stainless steel coasters that bring industrial elegance to your coffee station. The raised rim catches all condensation and the non-slip rubber base keeps them planted on any surface. Built to last indefinitely without staining or rusting.",
    price: "$9.42",
    rating: 4.4,
    reviews: 3271,
    badge: "Rust-Free",
    badgeColor: "#2b6cb0",
    image: "https://m.media-amazon.com/images/I/61Dr3tGwvML._AC_SL1500_.jpg",
    hoverImage: "https://m.media-amazon.com/images/I/71UUyzS+2iL._AC_SL1500_.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["Mirror-polished 18/10 stainless", "Raised rim catches condensation", "Rubber non-slip base", "Rust-free & stain-resistant"],
  },
  {
    id: 52,
    category: "Accessories",
    subcategory: "Coasters",
    name: "Acacia Wood Coaster Set",
    tagline: "Warm grain. Natural protection.",
    desc: "Sustainably sourced acacia wood coasters that add warm, natural texture to your coffee corner. The food-grade lacquer coating repels moisture and heat while preserving the rich caramel-toned grain patterns that make acacia one of the world's most beautiful hardwoods.",
    price: "$15.00",
    rating: 4.6,
    reviews: 4182,
    badge: "Sustainably Made",
    badgeColor: "#5a3a1a",
    image: "https://m.media-amazon.com/images/I/81VIUnJDIuL._AC_SL1500_.jpg",
    hoverImage: "https://m.media-amazon.com/images/I/71PyhVC-Q5L._AC_SL1500_.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["Sustainably sourced acacia", "Food-grade lacquer finish", "Heat & moisture resistant", "Set of 4"],
  },
  {
    id: 53,
    category: "Accessories",
    subcategory: "Coasters",
    name: "Wood Coaster Set with Holder",
    tagline: "Organized. Natural. Ready to serve.",
    desc: "A charming wood coaster set with an integrated holder that keeps your coasters organized and display-ready on any counter. The smooth finish and included holder make this the most presentable coaster solution for coffee stations and dining tables alike.",
    price: "$9.99",
    rating: 4.5,
    reviews: 7812,
    badge: "With Holder",
    badgeColor: "#5a3a1a",
    image: "https://m.media-amazon.com/images/I/71e4PrFm61L._AC_SL1500_.jpg",
    hoverImage: "https://m.media-amazon.com/images/I/71pn+xuoTGL._AC_SL1500_.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["Includes wood holder/stand", "Set of 4 coasters", "Smooth natural finish", "Counter-display ready"],
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSubcategory, setActiveSubcategory] = useState("All Accessories");
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [cycleIndex, setCycleIndex] = useState(0);
  const cycleTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleMouseEnter = (product: any) => {
    setHoveredId(product.id);
    setCycleIndex(0);
    const hoverImages = [product.hoverImage, product.hoverImage2, product.hoverImage3, product.hoverImage4].filter(Boolean);
    if (hoverImages.length > 1) {
      cycleTimerRef.current = setInterval(() => {
        setCycleIndex((prev) => prev + 1);
      }, 1800);
    }
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
    setCycleIndex(0);
    if (cycleTimerRef.current) {
      clearInterval(cycleTimerRef.current);
      cycleTimerRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      if (cycleTimerRef.current) clearInterval(cycleTimerRef.current);
    };
  }, []);

  const filtered = (() => {
    if (activeCategory === "All") return products;
    if (activeCategory !== "Accessories") return products.filter((p) => p.category === activeCategory);
    const acc = products.filter((p) => p.category === "Accessories");
    if (activeSubcategory === "All Accessories") return acc;
    return acc.filter((p) => (p as any).subcategory === activeSubcategory);
  })();

  return (
    <div style={{ backgroundColor: "#0b0b0b", color: "#f2f2f2", minHeight: "100vh" }}>
      <Navbar />

      {/* Page header */}
      <div
        className="pt-32 pb-16 px-6 text-center"
        style={{
          background: "linear-gradient(to bottom, #2b1e16 0%, #0b0b0b 100%)",
          borderBottom: "1px solid rgba(161,79,31,0.2)",
        }}
      >
        <p className="section-subtitle" style={{ color: "#a14f1f" }}>Recommended Gear</p>
        <div className="divider-orange mx-auto" />
        <h1 className="section-title mt-4" style={{ fontSize: "clamp(2rem,5vw,3.5rem)" }}>
          Coffee Equipment
        </h1>
        <p style={{ color: "#b0a090", maxWidth: "480px", margin: "1rem auto 0", lineHeight: 1.7 }}>
          Expert-tested espresso machines, coffee makers and brewing gear — curated for serious coffee lovers.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Category filter */}
        <div className="flex flex-wrap gap-3 mb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setActiveSubcategory("All Accessories"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              style={{
                padding: "0.45rem 1.2rem",
                borderRadius: "6px",
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.25s ease",
                background: activeCategory === cat ? "#8b2f2f" : "transparent",
                color: activeCategory === cat ? "#f2f2f2" : "#b0a090",
                border: activeCategory === cat ? "1px solid #a14f1f" : "1px solid rgba(161,79,31,0.25)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accessories subcategory filter */}
        {activeCategory === "Accessories" && (
          <div className="flex flex-wrap gap-2 mb-10">
            {accessorySubcategories.map((sub) => (
              <button
                key={sub}
                onClick={() => { setActiveSubcategory(sub); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                style={{
                  padding: "0.3rem 0.9rem",
                  borderRadius: "20px",
                  fontSize: "0.7rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  background: activeSubcategory === sub ? "rgba(161,79,31,0.2)" : "transparent",
                  color: activeSubcategory === sub ? "#d4b896" : "#7a6a5a",
                  border: activeSubcategory === sub ? "1px solid rgba(161,79,31,0.5)" : "1px solid rgba(161,79,31,0.12)",
                }}
              >
                {sub}
              </button>
            ))}
          </div>
        )}

        {/* Affiliate disclosure */}
        <div
          className="mb-8 p-4"
          style={{
            background: "#131313",
            borderRadius: "6px",
            border: "1px solid rgba(161,79,31,0.15)",
            fontSize: "0.78rem",
            color: "#b0a090",
          }}
        >
          <strong style={{ color: "#a14f1f" }}>Affiliate Disclosure:</strong> Hard House Coffee may earn a commission when you purchase through our links — at no extra cost to you. We only recommend gear we've personally tested and trust.
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => {
            const isHovered = hoveredId === product.id;
            return (
              <div
                key={product.id}
                style={{
                  background: "#131313",
                  borderRadius: "10px",
                  border: "1px solid rgba(161,79,31,0.25)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                  transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                  boxShadow: isHovered ? "0 8px 32px rgba(161,79,31,0.25)" : "none",
                  borderColor: isHovered ? "rgba(161,79,31,0.5)" : "rgba(161,79,31,0.25)",
                }}
                onMouseEnter={() => handleMouseEnter(product)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Image with hover swap */}
                <div className="relative overflow-hidden" style={{ height: "220px" }}>
                  {(() => {
                    const hoverImages = [product.hoverImage, (product as any).hoverImage2, (product as any).hoverImage3, (product as any).hoverImage4].filter(Boolean) as string[];
                    const activeCycleIdx = hoverImages.length > 0 ? cycleIndex % hoverImages.length : 0;
                    return (
                      <>
                        {/* Main image */}
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full absolute inset-0"
                          style={{
                            objectFit: (product as any).mainFit || "cover",
                            objectPosition: (product as any).mainPosition || "center",
                            opacity: isHovered && hoverImages.length > 0 ? 0 : 1,
                            transform: isHovered ? `scale(${((product as any).mainScale ?? 1) * 1.06})` : `scale(${(product as any).mainScale ?? 1})`,
                            transition: "opacity 0.55s ease, transform 0.55s ease",
                            filter: "brightness(0.65)",
                          }}
                        />
                        {/* Hover images — cycle through on timer */}
                        {hoverImages.map((src, idx) => (
                          <img
                            key={idx}
                            src={src}
                            alt={`${product.name} view ${idx + 1}`}
                            className="w-full h-full absolute inset-0"
                            style={{
                              objectFit: "cover",
                              objectPosition: "center",
                              opacity: isHovered && activeCycleIdx === idx ? 1 : 0,
                              transform: isHovered && activeCycleIdx === idx
                                ? `scale(${(product as any).hoverScale ?? 1.03})`
                                : `scale(${(product as any).hoverScale ?? 1.01})`,
                              transition: "opacity 0.55s ease, transform 0.55s ease",
                              filter: "brightness(0.85)",
                            }}
                          />
                        ))}
                      </>
                    );
                  })()}

                  {/* Badges */}
                  <div
                    className="absolute top-3 left-3 px-2 py-1"
                    style={{
                      background: product.badgeColor,
                      borderRadius: "4px",
                      fontSize: "0.6rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#f2f2f2",
                      fontWeight: 700,
                      zIndex: 2,
                    }}
                  >
                    {product.badge}
                  </div>
                  <div
                    className="absolute top-3 right-3 px-2 py-1"
                    style={{
                      background: "rgba(11,11,11,0.8)",
                      borderRadius: "4px",
                      fontSize: "0.65rem",
                      color: "#a14f1f",
                      fontWeight: 600,
                      zIndex: 2,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {product.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#f2f2f2",
                      marginBottom: "0.3rem",
                    }}
                  >
                    {product.name}
                  </h3>
                  <p style={{ fontSize: "0.78rem", color: "#a14f1f", marginBottom: "0.8rem", fontStyle: "italic" }}>
                    {product.tagline}
                  </p>
                  <p style={{ fontSize: "0.8rem", color: "#b0a090", lineHeight: 1.6, marginBottom: "1rem" }}>
                    {product.desc}
                  </p>

                  {/* Pros */}
                  <ul className="mb-4">
                    {product.pros.map((pro) => (
                      <li
                        key={pro}
                        style={{
                          fontSize: "0.78rem",
                          color: "#c0a880",
                          marginBottom: "0.3rem",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <span style={{ color: "#a14f1f", fontSize: "0.9rem" }}>✓</span>
                        {pro}
                      </li>
                    ))}
                  </ul>

                  {/* Stars */}
                  <div className="flex items-center gap-2 mb-3">
                    <div style={{ color: "#a14f1f", fontSize: "0.9rem" }}>
                      {"★".repeat(Math.floor(product.rating))}
                    </div>
                    <span style={{ fontSize: "0.75rem", color: "#b0a090" }}>
                      {product.rating} ({product.reviews.toLocaleString()} reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-3 mb-4">
                    <span style={{ fontSize: "1.4rem", fontWeight: 700, color: "#f2f2f2" }}>
                      {product.price}
                    </span>
                    <span style={{ fontSize: "0.9rem", color: "#6b5a4e", textDecoration: "line-through" }}>
                      {product.originalPrice}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2 mt-auto">
                    <button className="btn-primary w-full" style={{ fontSize: "0.78rem" }}>
                      Buy Now
                    </button>
                    <div className="flex gap-2">
                      <button className="btn-secondary flex-1" style={{ fontSize: "0.72rem" }}>
                        View Product
                      </button>
                      <button className="btn-dark flex-1" style={{ fontSize: "0.72rem" }}>
                        Read Review
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <PageNav nextPath="/about" nextLabel="Our Story" />
      <Footer />
    </div>
  );
}
