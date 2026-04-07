import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageNav from "@/components/PageNav";

const categories = ["All", "Espresso Machines", "Coffee Machines", "Coffee Grinders", "Accessories"];
const accessorySubcategories = ["All Accessories", "Kettles", "Milk Frothers", "Barista Sets"];

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
  {
    id: 54,
    category: "Accessories",
    subcategory: "Barista Sets",
    name: "Normcore Barista Essential Tool Kit",
    tagline: "Everything you need. Nothing you don't.",
    desc: "Normcore's Barista Essential Tool Kit is the definitive home espresso setup — a complete collection featuring the V4 tamper, leveler/distributor, WDT needle stirrer, dosing ring, puck screen, and an organizational mat to keep it all in place. Precision-machined from stainless steel and available in matte black or white, this kit transforms your counter into a proper espresso station.",
    price: "$199.99",
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
    price: "$399.99",
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
    id: 56,
    category: "Accessories",
    subcategory: "Barista Sets",
    name: "Saint Anthony Industries Barista Kit - The Bloc Party Espresso Tool Kit + Knock Box + Tamp Station",
    tagline: "Handcrafted hardwood. Studio-grade espresso prep.",
    desc: "Saint Anthony Industries' Bloc Party is the most refined barista workstation in the world. Hand-assembled from walnut and maple hardwood, it integrates a tamper station, distribution tool holder, and a built-in knock box into a single solid-wood block. Every SAI tool is machined to aerospace tolerances and designed to last a lifetime — this is counter craft at its finest.",
    price: "$595.00",
    rating: 5.0,
    reviews: 312,
    badge: "Artisan Craft",
    badgeColor: "#5a3a1a",
    image: "/images/products/sai-bloc-party-main.jpeg",
    hoverImage: "/images/products/sai-bloc-party-hover1.jpeg",
    hoverImage2: "/images/products/sai-bloc-party-hover2.jpeg",
    hoverImage3: "/images/products/sai-bloc-party-hover3.jpeg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["Hand-assembled walnut & maple hardwood", "Integrated knock box + tamp station", "SAI precision-machined stainless tools", "Lifetime heirloom quality build"],
  },
  {
    id: 57,
    category: "Accessories",
    subcategory: "Barista Sets",
    name: "IKAPE 3-Piece Precision Extraction Bundle with Impact Coffee Tamper Dual-Bearing Distributor",
    tagline: "Impact tamper. Gyroscope distributor. Zero compromise.",
    desc: "IKAPE's 3-Piece Precision Extraction Bundle is built for baristas who demand exactness from every pull. The bundle pairs IKAPE's signature Impact Tamper — featuring a precision spring mechanism for consistent 30lb pressure — with their Gyroscope Dual-Bearing Distributor for perfectly leveled pucks, plus a walnut-board tamp station that keeps everything organized on your counter.",
    price: "$249.00",
    rating: 4.8,
    reviews: 1874,
    badge: "Precision Bundle",
    badgeColor: "#8b2f2f",
    image: "/images/products/ikape-bundle-main.png",
    hoverImage: "/images/products/ikape-bundle-hover1.jpeg",
    hoverImage2: "/images/products/ikape-bundle-hover2.png",
    hoverImage3: "/images/products/ikape-bundle-hover3.png",
    hoverImage4: "/images/products/ikape-bundle-hover4.png",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["Impact tamper with 30lb spring pressure", "Gyroscope dual-bearing distributor", "Walnut tamp station included", "CNC-machined aluminum & stainless steel"],
  },
  {
    id: 58,
    category: "Accessories",
    subcategory: "Barista Sets",
    name: "IKAPE V5 Knock Box Puck Prep Set",
    tagline: "All-in-one puck prep. Station built-in.",
    desc: "The IKAPE V5 Knock Box Puck Prep Set is a complete espresso workflow station — tamper, distributor, puck screen, dosing funnel, portafilter holder, and a large integrated knock box, all housed in a single handsome wood or matte-black unit. Every tool snaps into its own dedicated slot so your counter stays clean and your workflow stays efficient shot after shot.",
    price: "$189.00",
    rating: 4.8,
    reviews: 2103,
    badge: "All-in-One",
    badgeColor: "#8b2f2f",
    image: "/images/products/ikape-v5-main.webp",
    hoverImage: "/images/products/ikape-v5-hover1.jpeg",
    hoverImage2: "/images/products/ikape-v5-hover2.jpeg",
    hoverImage3: "/images/products/ikape-v5-hover3.jpeg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["Integrated knock box + puck prep station", "Tamper, distributor & puck screen included", "Portafilter holder & dosing funnel slots", "Available in walnut wood or matte black"],
  },
  {
    id: 59,
    category: "Accessories",
    subcategory: "Milk Frothers",
    name: "Breville Milk Café Electric Frother",
    tagline: "Café-quality foam. Every single cup.",
    desc: "The Breville Milk Café is the gold standard in countertop milk frothing. Its induction heating system brings milk to the perfect temperature without scorching, while the dial-controlled frothing disc lets you choose between silky microfoam for lattes, thick froth for cappuccinos, or a flat warm milk for cortados. All stainless, all precise, all Breville.",
    price: "$99.95",
    rating: 4.7,
    reviews: 8412,
    badge: "Best Frother",
    badgeColor: "#8b2f2f",
    image: "/images/products/breville-milk-cafe-main.jpeg",
    hoverImage: "/images/products/breville-milk-cafe-hover1.jpeg",
    hoverImage2: "/images/products/breville-milk-cafe-hover2.jpeg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["Induction heating — no scorching", "Dial control for latte, cap & flat", "Stainless jug with non-stick interior", "Works with dairy & non-dairy milks"],
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
