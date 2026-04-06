import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageNav from "@/components/PageNav";

const categories = ["All", "Espresso Machines", "Coffee Machines", "Coffee Grinders", "Accessories"];
const accessorySubcategories = ["All Accessories", "Kettles", "Coasters", "Barista Sets", "Milk Frothers", "Stirring Spoons", "Insulated Mugs", "Steaming Pitchers", "Glass Mugs"];

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

  // ── COASTERS ──────────────────────────────────────────────
  {
    id: 21,
    category: "Accessories",
    subcategory: "Coasters",
    name: "LAMOTI Genuine Leather Coasters",
    tagline: "Handcrafted leather. Timeless protection.",
    desc: "Premium full-grain leather coasters set of 6, hand-stitched with a microfiber base to protect your surfaces in style. The natural leather develops a rich patina over time, making each set uniquely yours.",
    price: "$29",
    originalPrice: "$39",
    rating: 4.6,
    reviews: 3241,
    badge: "Artisan Craft",
    badgeColor: "#5a3a1a",
    image: "/images/products/lamoti-coasters-main.jpg",
    hoverImage: "/images/products/lamoti-coasters-hover.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["Full-grain genuine leather", "Microfiber non-slip base", "Set of 6 with holder", "Absorbs condensation naturally"],
  },
  {
    id: 22,
    category: "Accessories",
    subcategory: "Coasters",
    name: "Natural Cork Coaster Set",
    tagline: "Eco-friendly. Heat-resistant. Always stylish.",
    desc: "A clean, modern set of 6 cork coasters backed with anti-slip silicone. Natural cork is heat-resistant up to 480°F, absorbs moisture, and pairs beautifully with any coffee station aesthetic.",
    price: "$22",
    originalPrice: "$29",
    rating: 4.5,
    reviews: 5182,
    badge: "Eco Favorite",
    badgeColor: "#5a3a1a",
    image: "/images/products/bby-coasters-main.jpg",
    hoverImage: "/images/products/bby-coasters-hover.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["100% natural cork material", "Heat-resistant up to 480°F", "Anti-slip silicone base", "Absorbs moisture & condensation"],
  },
  {
    id: 23,
    category: "Accessories",
    subcategory: "Coasters",
    name: "Acacia Wood Coaster Set",
    tagline: "Natural grain. Warm aesthetics.",
    desc: "Hand-carved acacia wood coasters with a smooth lacquered finish that repels moisture and heat. Each coaster features unique wood grain patterns, making every set a one-of-a-kind display piece for your coffee corner.",
    price: "$34",
    originalPrice: "$44",
    rating: 4.7,
    reviews: 2876,
    badge: "Handcrafted",
    badgeColor: "#a14f1f",
    image: "/images/products/bby-coasters2-main.jpg",
    hoverImage: "/images/products/bby-coasters2-hover.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["Genuine acacia hardwood", "Lacquered moisture-resistant finish", "Unique grain per piece", "Included bamboo holder"],
  },
  {
    id: 24,
    category: "Accessories",
    subcategory: "Coasters",
    name: "Absorbent Ceramic Coasters",
    tagline: "Stone-dry. Silent protection.",
    desc: "Diatomite stone coasters that absorb moisture instantly and dry within minutes. The matte finish and minimalist design complement any home coffee setup, while the cork backing prevents scratches on all surfaces.",
    price: "$19",
    originalPrice: "$26",
    rating: 4.4,
    reviews: 8134,
    badge: "Quick-Dry",
    badgeColor: "#2b6cb0",
    image: "/images/products/bby-coasters3-main.jpg",
    hoverImage: "/images/products/bby-coasters3-hover.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["Ultra-absorbent diatomite stone", "Dries within minutes", "Non-slip cork base", "Set of 4 with holder"],
  },

  // ── BARISTA SETS ──────────────────────────────────────────
  {
    id: 25,
    category: "Accessories",
    subcategory: "Barista Sets",
    name: "Normcore Walnut Tamping Station",
    tagline: "Precision staging. Walnut craftsmanship.",
    desc: "The Normcore Tamping Station holds your portafilter at the perfect angle for consistent tamping, with dedicated slots for your tamper, distributor, and WDT tool. Crafted from solid walnut with a polished stainless steel stand — the centerpiece of any espresso setup.",
    price: "$89",
    originalPrice: "$109",
    rating: 4.8,
    reviews: 1543,
    badge: "Editor's Pick",
    badgeColor: "#8b2f2f",
    image: "/images/products/normcore-station-main.jpg",
    hoverImage: "/images/products/normcore-station-hover.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["Solid walnut base with stainless steel", "Holds portafilter at optimal angle", "Slots for tamper, distributor & WDT tool", "Compatible with 54mm & 58mm portafilters"],
  },
  {
    id: 26,
    category: "Accessories",
    subcategory: "Barista Sets",
    name: "IKAPE Espresso Accessories Set",
    tagline: "Complete toolkit. Barista-ready.",
    desc: "The IKAPE complete espresso station set includes a tamping mat, walnut-handle WDT tool, tamper stand, and grounds container — all finished in matching brushed stainless and walnut. Everything you need to set up a serious home barista station.",
    price: "$54",
    originalPrice: "$72",
    rating: 4.7,
    reviews: 2398,
    badge: "Best Value",
    badgeColor: "#a14f1f",
    image: "/images/products/ikape-station-main.jpg",
    hoverImage: "/images/products/ikape-station-hover.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["Complete 5-piece matching set", "Walnut handle WDT distribution tool", "Anti-slip tamping mat included", "Universal 58mm portafilter fit"],
  },
  {
    id: 27,
    category: "Accessories",
    subcategory: "Barista Sets",
    name: "Breville Knock Box Mini",
    tagline: "Compact design. Professional-grade knock.",
    desc: "The Breville Knock Box Mini keeps your espresso workflow clean and efficient. Its stainless steel bar handles repeated knocking without flex, and the rubberized base stays firmly planted on your counter. A must-have for any home espresso setup.",
    price: "$45",
    originalPrice: "$59",
    rating: 4.7,
    reviews: 4219,
    badge: "Pro Workflow",
    badgeColor: "#a14f1f",
    image: "/images/products/knock-box-main.jpg",
    hoverImage: "/images/products/knock-box-hover.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["Stainless steel knock bar", "Removable rubber base for stability", "Dishwasher-safe components", "Compact footprint for counter use"],
  },
  {
    id: 28,
    category: "Accessories",
    subcategory: "Barista Sets",
    name: "OXO Brew Grounds Keeper",
    tagline: "Store it fresh. Pull it perfect.",
    desc: "The OXO Brew Grounds Keeper is a dual-function knock box and grounds storage container. The airtight lid keeps used grounds fresh for composting while the stainless bar handles your daily puck disposal — all in one minimal, countertop-ready form.",
    price: "$35",
    originalPrice: "$45",
    rating: 4.5,
    reviews: 3187,
    badge: "2-in-1 Design",
    badgeColor: "#2b6cb0",
    image: "/images/products/oxo-knock-box-main.jpg",
    hoverImage: "/images/products/oxo-knock-box-hover.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["Knock box and grounds storage in one", "Airtight lid keeps grounds contained", "Non-slip base with soft grip handle", "Dishwasher-safe for easy cleanup"],
  },

  // ── MILK FROTHERS ─────────────────────────────────────────
  {
    id: 29,
    category: "Accessories",
    subcategory: "Milk Frothers",
    name: "Breville Milk Cafe Frother",
    tagline: "Café-quality foam. No barista required.",
    desc: "The Milk Cafe automatically heats and froths milk to your desired temperature and texture — from flat white foam to cappuccino froth. The induction heating system brings milk to precise temperature without scorching, producing consistently silky results every time.",
    price: "$99",
    originalPrice: "$119",
    rating: 4.6,
    reviews: 3872,
    badge: "Top Frother",
    badgeColor: "#8b2f2f",
    image: "/images/products/breville-milk-cafe-main.jpg",
    hoverImage: "/images/products/breville-milk-cafe-hover.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["Induction heating for precise temperature", "Hot & cold frothing modes", "Includes 3 interchangeable discs", "Temperature dial from latte to cappuccino"],
  },
  {
    id: 30,
    category: "Accessories",
    subcategory: "Milk Frothers",
    name: "Nespresso Aeroccino 4",
    tagline: "Four textures. One button. Pure magic.",
    desc: "The Aeroccino 4 produces four distinct milk textures — warm froth, cold froth, warm milk, and latte macchiato — each with a single button press. Compatible with all Nespresso machines and most home espresso setups.",
    price: "$79",
    originalPrice: "$99",
    rating: 4.7,
    reviews: 6184,
    badge: "Nespresso Official",
    badgeColor: "#a14f1f",
    image: "/images/products/aeroccino4-main.jpg",
    hoverImage: "/images/products/aeroccino4-hover.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["4 milk preparation modes", "Non-stick interior coating", "Auto-off when complete", "Compatible with all Nespresso systems"],
  },
  {
    id: 31,
    category: "Accessories",
    subcategory: "Milk Frothers",
    name: "PowerLix Handheld Milk Frother",
    tagline: "Pocket-sized power. Barista froth anywhere.",
    desc: "The PowerLix handheld milk frother produces rich, creamy foam in seconds with its high-speed stainless steel whisk. Compact and battery-operated, it works with hot or cold milk for lattes, cappuccinos, matcha, and more.",
    price: "$9",
    originalPrice: "$16",
    rating: 4.5,
    reviews: 124583,
    badge: "Best Budget",
    badgeColor: "#2b6cb0",
    image: "/images/products/powerlix-frother-main.jpg",
    hoverImage: "/images/products/powerlix-frother-hover.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["High-speed stainless steel whisk", "Works with hot or cold milk", "Battery-operated, no cords", "Stainless steel stand included"],
  },
  {
    id: 32,
    category: "Accessories",
    subcategory: "Milk Frothers",
    name: "Electric Milk Frother Wand",
    tagline: "Versatile electric frother. Dense foam every time.",
    desc: "A compact electric milk frother with a two-speed motor that generates dense, stable foam for lattes, cappuccinos, and hot chocolate. The ergonomic handle and stainless whisk tip clean effortlessly under running water.",
    price: "$24",
    originalPrice: "$35",
    rating: 4.4,
    reviews: 18924,
    badge: "Easy Clean",
    badgeColor: "#5a3a1a",
    image: "/images/products/bby-frother-main.jpg",
    hoverImage: "/images/products/bby-frother-hover.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["Two-speed electric motor", "Dense, stable foam texture", "Ergonomic non-slip handle", "Rinse-clean stainless whisk"],
  },

  // ── STIRRING SPOONS ───────────────────────────────────────
  {
    id: 33,
    category: "Accessories",
    subcategory: "Stirring Spoons",
    name: "Barfly Professional Bar Spoon",
    tagline: "Twisted shaft. Perfect pour. Pro feel.",
    desc: "The Barfly M37012 is a 12-inch cast stainless bar spoon with a precision-twisted shaft for smooth layering and stirring. The weighted teardrop end balances the spoon for professional-grade technique — a staple of serious coffee and cocktail bars.",
    price: "$15",
    originalPrice: "$22",
    rating: 4.8,
    reviews: 2841,
    badge: "Pro Choice",
    badgeColor: "#8b2f2f",
    image: "/images/products/barfly-spoon-main.jpg",
    hoverImage: "/images/products/barfly-spoon-hover.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["Cast stainless steel construction", "12-inch reach for tall glasses", "Twisted shaft for smooth stirring", "Weighted teardrop counterbalance"],
  },
  {
    id: 34,
    category: "Accessories",
    subcategory: "Stirring Spoons",
    name: "OXO Good Grips Cocktail Spoon",
    tagline: "Comfortable grip. Effortless stir.",
    desc: "OXO's signature soft-grip handle meets professional bartending form in this 12-inch cocktail spoon. The twisted shaft ensures smooth, controlled stirring while the soft rubber handle reduces fatigue during extended use.",
    price: "$14",
    originalPrice: "$19",
    rating: 4.6,
    reviews: 5312,
    badge: "Fan Favorite",
    badgeColor: "#a14f1f",
    image: "/images/products/oxo-bar-spoon-main.jpg",
    hoverImage: "/images/products/oxo-bar-spoon-hover.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["OXO soft-grip comfort handle", "Twisted shaft for smooth stir", "Dishwasher-safe stainless steel", "Elegant matte finish"],
  },
  {
    id: 35,
    category: "Accessories",
    subcategory: "Stirring Spoons",
    name: "Twisted Handle Barspoon",
    tagline: "Classic barspoon. Modern precision.",
    desc: "A sleek 12-inch barspoon with a finely twisted stainless steel shaft and a flat mixing disc at the base. Perfect for layering coffee drinks, stirring cold brew concentrates, or blending flavor syrups into espresso shots with precision.",
    price: "$12",
    originalPrice: "$18",
    rating: 4.5,
    reviews: 7823,
    badge: "Classic Design",
    badgeColor: "#5a3a1a",
    image: "/images/products/twisted-spoon-main.jpg",
    hoverImage: "/images/products/twisted-spoon-hover.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["Finely twisted stainless shaft", "Flat mixing disc base", "12-inch professional length", "Mirror-polished finish"],
  },
  {
    id: 36,
    category: "Accessories",
    subcategory: "Stirring Spoons",
    name: "Premium Barista Spoon Set",
    tagline: "Four spoons. Every pour covered.",
    desc: "A set of four stainless steel coffee spoons in graduated sizes — from demitasse to long-reach latte spoon. Each spoon features a precision-balanced handle and brushed finish, ideal for espresso, cappuccino, macchiato, and cold brew service.",
    price: "$19",
    originalPrice: "$28",
    rating: 4.4,
    reviews: 4176,
    badge: "Gift Set",
    badgeColor: "#2b6cb0",
    image: "/images/products/bby-spoon-main.jpg",
    hoverImage: "/images/products/bby-spoon-hover.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["Set of 4 graduated sizes", "Brushed stainless finish", "Demitasse to latte reach", "Balanced ergonomic handle"],
  },

  // ── INSULATED MUGS ────────────────────────────────────────
  {
    id: 37,
    category: "Accessories",
    subcategory: "Insulated Mugs",
    name: "Fellow Carter Move Mug 16oz",
    tagline: "Leak-proof. Pressure-fit lid. Café flavors preserved.",
    desc: "The Carter Move Mug is Fellow's premium travel coffee mug — engineered with a pressure-fit lid that's 100% leak-proof and a ceramic-coated interior that preserves flavor without metallic interference. The slimline design fits most car cup holders.",
    price: "$45",
    originalPrice: "$55",
    rating: 4.8,
    reviews: 3214,
    badge: "Flavor-Safe",
    badgeColor: "#8b2f2f",
    image: "/images/products/fellow-carter-main.png",
    hoverImage: "/images/products/fellow-carter-hover.png",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["100% leak-proof pressure-fit lid", "Ceramic-coated interior", "Keeps hot 12 hrs, cold 24 hrs", "Slim design fits cup holders"],
  },
  {
    id: 38,
    category: "Accessories",
    subcategory: "Insulated Mugs",
    name: "YETI Rambler 14oz Mug",
    tagline: "Indestructible build. All-day heat retention.",
    desc: "The YETI Rambler is the benchmark travel mug for durability and heat retention. Double-wall vacuum insulation keeps your coffee hot for hours, while the dishwasher-safe stainless construction and MagSlider lid make it ready for any environment.",
    price: "$30",
    originalPrice: "$38",
    rating: 4.9,
    reviews: 48231,
    badge: "Most Durable",
    badgeColor: "#8b2f2f",
    image: "/images/products/yeti-rambler-main.jpg",
    hoverImage: "/images/products/yeti-rambler-hover.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["Double-wall vacuum insulation", "18/8 stainless steel construction", "MagSlider lid included", "Dishwasher-safe & BPA-free"],
  },
  {
    id: 39,
    category: "Accessories",
    subcategory: "Insulated Mugs",
    name: "Hydro Flask 16oz Coffee Mug",
    tagline: "TempShield double wall. Never too hot to hold.",
    desc: "Hydro Flask's TempShield double-wall vacuum insulation keeps your coffee hot for up to 6 hours while the exterior stays cool to the touch. The wide-mouth opening accommodates latte art pours, and the Flex Sip Lid prevents spills on the go.",
    price: "$35",
    originalPrice: "$44",
    rating: 4.7,
    reviews: 14592,
    badge: "Cool to Touch",
    badgeColor: "#a14f1f",
    image: "/images/products/hydro-flask-main.jpg",
    hoverImage: "/images/products/hydro-flask-main.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["TempShield double-wall vacuum insulation", "Exterior stays cool to the touch", "Wide mouth for latte art pours", "Flex Sip Lid included"],
  },
  {
    id: 40,
    category: "Accessories",
    subcategory: "Insulated Mugs",
    name: "Stanley Classic Trigger-Action Mug",
    tagline: "One-hand operation. Built for the long haul.",
    desc: "The Stanley Classic Trigger-Action Travel Mug delivers 7-hour heat retention with a one-handed trigger-release lid that seals completely leak-proof. Made from recycled stainless steel and dishwasher-safe from top to bottom.",
    price: "$25",
    originalPrice: "$35",
    rating: 4.6,
    reviews: 29187,
    badge: "One-Hand Lid",
    badgeColor: "#a14f1f",
    image: "/images/products/stanley-trigger-main.jpg",
    hoverImage: "/images/products/stanley-trigger-hover.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["Trigger-release one-hand lid", "7-hour heat retention", "Made from recycled stainless steel", "100% dishwasher-safe"],
  },

  // ── STEAMING PITCHERS ─────────────────────────────────────
  {
    id: 41,
    category: "Accessories",
    subcategory: "Steaming Pitchers",
    name: "Rattleware Latte Art Pitcher 20oz",
    tagline: "Precision pour. Built for latte art.",
    desc: "The Rattleware 20oz pitcher is the go-to choice for professional baristas training in latte art. Its precision spout produces a controlled, consistent pour stream for tulips, rosettes, and heart patterns, while the thick stainless steel distributes heat evenly for perfect microfoam.",
    price: "$22",
    originalPrice: "$30",
    rating: 4.7,
    reviews: 4823,
    badge: "Latte Art Pick",
    badgeColor: "#8b2f2f",
    image: "/images/products/rattleware-pitcher-main.jpg",
    hoverImage: "/images/products/rattleware-pitcher-hover.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["Precision pour spout for latte art", "Thick-gauge stainless steel", "20oz professional capacity", "Even heat distribution for microfoam"],
  },
  {
    id: 42,
    category: "Accessories",
    subcategory: "Steaming Pitchers",
    name: "Motta Europa Frothing Pitcher",
    tagline: "Italian precision. Professional grade.",
    desc: "The Motta Europa is the gold standard of professional steaming pitchers — used in espresso bars across Italy. Its perfectly angled body creates the ideal vortex for silky microfoam, and the narrow spout tip delivers unparalleled latte art control.",
    price: "$32",
    originalPrice: "$42",
    rating: 4.8,
    reviews: 2981,
    badge: "Pro Standard",
    badgeColor: "#a14f1f",
    image: "/images/products/motta-pitcher-main.jpg",
    hoverImage: "/images/products/motta-pitcher-hover.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["Italian-made professional grade", "Angled body for ideal vortex", "Narrow tip for latte art precision", "Restaurant-grade stainless steel"],
  },
  {
    id: 43,
    category: "Accessories",
    subcategory: "Steaming Pitchers",
    name: "Espro Toroid Milk Pitcher",
    tagline: "Toroidal design. Microfoam perfected.",
    desc: "The Espro Toroid pitcher uses a patented toroidal base that creates a natural vortex during steaming, breaking up large bubbles without wrist rotation. The result is consistently perfect microfoam — even for beginners — in a beautifully minimal stainless form.",
    price: "$45",
    originalPrice: "$60",
    rating: 4.7,
    reviews: 1624,
    badge: "Innovative Design",
    badgeColor: "#8b2f2f",
    image: "/images/products/espro-pitcher-main.jpg",
    hoverImage: "/images/products/espro-pitcher-hover.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["Patented toroidal base for automatic vortex", "No wrist rotation required", "Consistent microfoam every pour", "Premium brushed stainless steel"],
  },
  {
    id: 44,
    category: "Accessories",
    subcategory: "Steaming Pitchers",
    name: "Stainless Frothing Pitcher 600ml",
    tagline: "Classic form. Reliable results.",
    desc: "A professional-gauge 600ml milk pitcher in classic 18/8 stainless steel. The wide, tapered body and standard pour spout work reliably for all milk steaming tasks — from flat white microfoam to cappuccino-style froth. An essential in every home bar.",
    price: "$19",
    originalPrice: "$26",
    rating: 4.4,
    reviews: 9834,
    badge: "Essential Pick",
    badgeColor: "#5a3a1a",
    image: "/images/products/vev-pitcher-main.jpg",
    hoverImage: "/images/products/vev-pitcher-hover.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["Professional 18/8 stainless steel", "600ml capacity for multiple drinks", "Classic tapered body for vortex", "Dishwasher safe"],
  },

  // ── GLASS MUGS ────────────────────────────────────────────
  {
    id: 45,
    category: "Accessories",
    subcategory: "Glass Mugs",
    name: "Zwilling Sorrento Double Wall Mugs",
    tagline: "Crystal clarity. No-burn comfort.",
    desc: "The Zwilling Sorrento 4-piece set features heat-resistant borosilicate double-wall glass that keeps drinks hot without burning your hands. The suspended appearance of your espresso or cappuccino against the double-wall creates an elegant visual effect.",
    price: "$40",
    originalPrice: "$52",
    rating: 4.8,
    reviews: 3814,
    badge: "Visual Elegance",
    badgeColor: "#8b2f2f",
    image: "/images/products/zwilling-sorrento-main.jpg",
    hoverImage: "/images/products/zwilling-sorrento-hover.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["Borosilicate double-wall glass", "Set of 4 with matching design", "Thermal insulation without handles", "Dishwasher-safe & break-resistant"],
  },
  {
    id: 46,
    category: "Accessories",
    subcategory: "Glass Mugs",
    name: "BODUM Pavina Double Wall Glasses",
    tagline: "Floating coffee. Warm hands. Pure design.",
    desc: "BODUM's iconic Pavina double-wall glasses create the illusion of floating coffee with their crystal-clear borosilicate construction. The double-wall keeps drinks hot without exterior condensation, making them as practical as they are beautiful.",
    price: "$24",
    originalPrice: "$32",
    rating: 4.7,
    reviews: 21483,
    badge: "Icon Design",
    badgeColor: "#a14f1f",
    image: "/images/products/bodum-pavina-main.jpg",
    hoverImage: "/images/products/bodum-pavina-hover.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["BODUM double-wall borosilicate glass", "No condensation on exterior", "2-pack in gift-ready packaging", "Microwave and dishwasher safe"],
  },
  {
    id: 47,
    category: "Accessories",
    subcategory: "Glass Mugs",
    name: "Insulated Double Wall Glass Set",
    tagline: "Sleek silhouette. Long-lasting warmth.",
    desc: "A contemporary set of 4 double-wall insulated glass mugs in a tall latte silhouette. The hand-blown borosilicate glass maintains beverage temperature without heat transfer to the exterior, keeping your coffee hot and your hands cool.",
    price: "$29",
    originalPrice: "$38",
    rating: 4.5,
    reviews: 8921,
    badge: "Modern Style",
    badgeColor: "#2b6cb0",
    image: "/images/products/bby-glass-mug-main.jpg",
    hoverImage: "/images/products/bby-glass-mug-hover.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["Hand-blown borosilicate construction", "Set of 4 tall latte-style mugs", "Zero exterior heat transfer", "Stackable for easy storage"],
  },
  {
    id: 48,
    category: "Accessories",
    subcategory: "Glass Mugs",
    name: "Double Wall Espresso Cups Set",
    tagline: "Miniature art. Maximum warmth.",
    desc: "Compact double-wall espresso cups in 3oz borosilicate glass — designed for single and double espresso shots with the visual drama of floating coffee suspended between crystal-clear walls. A set of 4 makes the perfect gift for the espresso enthusiast.",
    price: "$18",
    originalPrice: "$25",
    rating: 4.4,
    reviews: 6234,
    badge: "Espresso Ready",
    badgeColor: "#5a3a1a",
    image: "/images/products/bby-glass-mug2-main.jpg",
    hoverImage: "/images/products/bby-glass-mug2-main.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["3oz espresso-sized cups", "Set of 4 borosilicate glass", "Floating espresso visual effect", "Stackable design for storage"],
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
    const hoverImages = [product.hoverImage, product.hoverImage2, product.hoverImage3].filter(Boolean);
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
              onClick={() => { setActiveCategory(cat); setActiveSubcategory("All Accessories"); }}
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
                onClick={() => setActiveSubcategory(sub)}
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
                    const hoverImages = [product.hoverImage, (product as any).hoverImage2, (product as any).hoverImage3].filter(Boolean) as string[];
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
