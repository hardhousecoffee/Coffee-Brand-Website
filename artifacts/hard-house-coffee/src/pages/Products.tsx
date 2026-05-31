import { useState, useEffect, useRef } from "react";

import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageNav from "@/components/PageNav";

const categories = ["All", "Espresso Machines", "Coffee Machines", "Coffee Grinders", "Accessories", "Coffee Beans"];
const accessorySubcategories = ["All Accessories", "Kettles", "Milk Frothers", "Barista Sets", "Coffee Mugs"];

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
    affiliateUrl: "https://amzn.to/4dfl8y3",
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
    affiliateUrl: "https://amzn.to/4u63Bym",
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
    price: "$1,450",
    originalPrice: "$1,599",
    rating: 4.6,
    reviews: 3211,
    badge: "Smart Pick",
    badgeColor: "#5a3a1a",
    affiliateUrl: "https://amzn.to/4eJlVbR",
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
    affiliateUrl: "https://amzn.to/4nvZfxV",
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
    price: "$989",
    originalPrice: "$1,199",
    rating: 4.8,
    reviews: 4562,
    badge: "Fan Favorite",
    badgeColor: "#a14f1f",
    affiliateUrl: "https://amzn.to/49JTbfx",
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
    price: "$749",
    originalPrice: "$849",
    rating: 4.5,
    reviews: 6823,
    badge: "Best Value",
    badgeColor: "#5a3a1a",
    affiliateUrl: "https://amzn.to/4uU8Hho",
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
    price: "$1,699",
    originalPrice: "$2,199",
    rating: 4.7,
    reviews: 1234,
    badge: "Premium Build",
    badgeColor: "#8b2f2f",
    affiliateUrl: "https://amzn.to/4wxknbd",
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
    price: "$854",
    originalPrice: "$999",
    rating: 4.6,
    reviews: 1876,
    badge: "Italian Craft",
    badgeColor: "#a14f1f",
    affiliateUrl: "https://amzn.to/4wD98OL",
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
    price: "$764",
    originalPrice: "$899",
    rating: 4.7,
    reviews: 5341,
    badge: "Easy Clean",
    badgeColor: "#5a3a1a",
    affiliateUrl: "https://amzn.to/4ucSjs3",
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
    price: "$149",
    originalPrice: "$179",
    rating: 4.8,
    reviews: 5621,
    badge: "Most Popular",
    badgeColor: "#8b2f2f",
    affiliateUrl: "https://amzn.to/4wLqXey",
    image: "/images/products/stagg-ekg-main.png",
    hoverImage: "/images/products/stagg-ekg-wood.png",
    hoverImage2: "/images/products/fellow-stagg-hover.webp",
    pros: ["±0.5° temperature accuracy", "Hold mode up to 60 min", "Precision pour spout"],
  },
  {
    id: 11,
    category: "Coffee Machines",
    name: "Technivorm Moccamaster KB",
    tagline: "Dutch precision. Perfect drip every time.",
    desc: "The Moccamaster brews coffee at the ideal temperature of 196-205°F and saturates the coffee grounds evenly for full extraction. Built to last a lifetime.",
    price: "$339",
    originalPrice: "$369",
    rating: 4.7,
    reviews: 3102,
    badge: "Best Drip",
    badgeColor: "#a14f1f",
    affiliateUrl: "https://amzn.to/4ntk4KF",
    image: "/images/products/moccamaster-main.jpg",
    hoverImage: "/images/products/moccamaster-hover.webp",
    hoverImage2: "/images/products/moccamaster-hover2.webp",
    mainPosition: "center 30%",
    pros: ["Brews in 4-6 minutes", "Built to last decades", "Certified by ECBC"],
  },
  {
    id: 12,
    category: "Coffee Machines",
    name: "Breville Luxe Drip Coffee Machine",
    tagline: "Luxury drip. Barista-level results at home.",
    desc: "The Breville Luxe Drip Coffee Machine delivers café-quality drip coffee with intelligent brew technology. It features precise temperature control, a pre-infusion bloom cycle, and a double-walled thermal carafe that keeps your coffee hot for hours without burning.",
    price: "$319",
    originalPrice: "$349",
    rating: 4.8,
    reviews: 12847,
    badge: "Top Pick",
    badgeColor: "#8b2f2f",
    affiliateUrl: "https://amzn.to/4dmwqzl",
    image: "/images/products/breville-precision-main.jpg",
    hoverImage: "/images/products/breville-precision-hover.jpg",
    hoverImage2: "/images/products/breville-precision-hover2.jpg",
    pros: ["Intelligent brew technology", "Pre-infusion bloom cycle", "Double-walled thermal carafe", "Precise temp control 200°F"],
  },
  {
    id: 13,
    category: "Coffee Machines",
    name: "OXO Brew 9-Cup Coffee Maker",
    tagline: "Rainmaker showerhead. Flawless saturation.",
    desc: "The OXO Brew 9-Cup earns SCA certification with its Rainmaker showerhead that distributes water evenly across the grounds for full, balanced extraction. A premium build for the serious home brewer.",
    price: "$212",
    originalPrice: "$230",
    rating: 4.7,
    reviews: 8934,
    badge: "SCA Certified",
    badgeColor: "#a14f1f",
    affiliateUrl: "https://amzn.to/3PpnSzJ",
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
    price: "$115",
    originalPrice: "$149",
    rating: 4.6,
    reviews: 89241,
    badge: "Top Seller",
    badgeColor: "#a14f1f",
    affiliateUrl: "https://amzn.to/4nuqQ2B",
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
    price: "$239",
    originalPrice: "$279",
    rating: 4.8,
    reviews: 41203,
    badge: "Most Versatile",
    badgeColor: "#8b2f2f",
    affiliateUrl: "https://amzn.to/43brf0s",
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
    price: "$399",
    originalPrice: "$449",
    rating: 4.8,
    reviews: 1847,
    badge: "Award Winner",
    badgeColor: "#8b2f2f",
    affiliateUrl: "https://amzn.to/4tB9lz6",
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
    price: "$199",
    originalPrice: "$229",
    rating: 4.7,
    reviews: 3214,
    badge: "Editor's Choice",
    badgeColor: "#a14f1f",
    affiliateUrl: "https://amzn.to/42VyYQt",
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
    affiliateUrl: "https://amzn.to/4nDzU5u",
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
    affiliateUrl: "https://amzn.to/4nw94w1",
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
    price: "$249",
    originalPrice: "$299",
    rating: 4.8,
    reviews: 2841,
    badge: "Best Value Flat Burr",
    badgeColor: "#8b2f2f",
    affiliateUrl: "https://amzn.to/4u8wFoZ",
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
    name: "Normcore 53.3mm 7-in-1 Compact Barista Kit",
    tagline: "Seven tools. One station. Zero clutter.",
    desc: "The Normcore 53.3mm 7-in-1 Compact Barista Kit bundles everything you need for a precision espresso workflow into a single sleek organizer. Includes a spring-loaded tamper, leveler/distributor, WDT needle stirrer, dosing funnel, puck screen, dosing ring, and a portafilter holder — all neatly housed in a compact tray built for serious home baristas.",
    price: "$89.95",
    rating: 4.9,
    reviews: 3182,
    badge: "Staff Pick",
    badgeColor: "#8b2f2f",
    affiliateUrl: "https://amzn.to/3RelDzZ",
    image: "/images/products/normcore-7in1-main.jpg",
    hoverImage: "/images/products/normcore-7in1-hover1.png",
    hoverImage2: "/images/products/normcore-7in1-hover2.jpg",
    hoverImage3: "/images/products/normcore-7in1-hover3.png",
    hoverImage4: "/images/products/normcore-7in1-hover4.png",
    mainFit: "cover",
    mainPosition: "center",
    mainBrightness: 0.88,
    mainVignette: true,
    hoverVignetteIndices: [],
    pros: ["53.3mm spring-loaded tamper & leveler/distributor", "WDT needle stirrer for even extraction", "Dosing funnel, puck screen & dosing ring", "Compact all-in-one station organizer"],
  },
  {
    id: 55,
    category: "Accessories",
    subcategory: "Barista Sets",
    name: "Normcore 54mm Bottomless Portafilter",
    tagline: "Naked shots. Pure extraction. Flawless every time.",
    desc: "The Normcore 54mm Bottomless Portafilter is precision-machined from 304 stainless steel with a smooth-grip matte white handle. The naked (bottomless) design lets you watch the extraction in real time — revealing channeling, distribution, and shot quality instantly. Compatible with Breville 54mm group head machines.",
    price: "$45.99",
    rating: 4.8,
    reviews: 4271,
    badge: "Barista Essential",
    badgeColor: "#8b2f2f",
    affiliateUrl: "https://amzn.to/3Rf3DW7",
    image: "/images/products/normcore-portafilter-main.jpg",
    hoverImage: "/images/products/normcore-portafilter-hover1.jpg",
    hoverImage2: "/images/products/normcore-portafilter-hover2.jpg",
    hoverImage3: "/images/products/normcore-portafilter-hover3.png",
    mainFit: "cover",
    mainPosition: "center",
    mainScale: 1.0,
    mainBrightness: 0.88,
    mainVignette: true,
    hoverVignetteIndices: [2],
    pros: ["54mm stainless steel basket — double shot", "Bottomless design for real-time shot diagnosis", "Matte white ergonomic handle", "Compatible with Breville 54mm machines"],
  },
  {
    id: 56,
    category: "Accessories",
    subcategory: "Barista Sets",
    name: "Breville Barista Express Accessories Kit - Walnut Espresso Station with Tamper, Portafilter & Knock Box",
    tagline: "Solid walnut workstation. Every tool in its place.",
    desc: "A complete walnut espresso prep station built for serious home baristas. This kit brings together a precision-machined stainless tamper with walnut handle, a bottomless portafilter, and an integrated knock box — all organized in a handsome solid walnut block. Designed to work seamlessly with the Breville Barista Express, it turns your counter into a tidy, professional extraction setup.",
    affiliateUrl: "https://amzn.to/4tXDby9",
    rating: 4.7,
    reviews: 863,
    badge: "Best Value Kit",
    badgeColor: "#5a3a1a",
    image: "/images/products/breville-barista-kit-hover1.jpg",
    hoverImage: "/images/products/breville-barista-kit-main.jpg",
    hoverImage2: "/images/products/breville-barista-kit-hover2.jpg",
    hoverImage3: "/images/products/breville-barista-kit-hover3.jpg",
    mainFit: "cover",
    mainPosition: "center",
    mainBrightness: 0.82,
    pros: ["Solid walnut construction", "Precision stainless tamper with walnut handle", "Integrated knock box & portafilter station", "Compatible with Breville Barista Express"],
  },
  {
    id: 57,
    category: "Accessories",
    subcategory: "Barista Sets",
    name: "IKAPE 53MM Black Espresso Tool Set - Tamper, Distributor & Tamp Station Bundle",
    tagline: "All-black precision. Every prep step covered.",
    desc: "IKAPE's 53mm Black Espresso Tool Set is a sleek, all-black bundle designed for serious home baristas. The set pairs a spring-loaded impact tamper with a dual-bearing needle distributor — both machined to 53mm — alongside a compact matte black tamp station that keeps your counter clean and organized. Built for Breville Barista Express and other 54mm-class machines.",
    affiliateUrl: "https://amzn.to/4eMhM73",
    rating: 4.8,
    reviews: 1247,
    badge: "Precision Bundle",
    badgeColor: "#8b2f2f",
    image: "/images/products/ikape-53mm-main.jpg",
    hoverImage: "/images/products/ikape-53mm-hover1.jpg",
    hoverImage2: "/images/products/ikape-53mm-hover2.jpg",
    mainFit: "cover",
    mainPosition: "center",
    mainBrightness: 0.8,
    pros: ["53mm precision tamper & distributor", "All-black matte finish", "Compact tamp station included", "Compatible with Breville 54mm portafilters"],
  },
  {
    id: 58,
    category: "Accessories",
    subcategory: "Barista Sets",
    name: "IKAPE V5 Espresso Knock Box, Espresso Coffee Organizer Box",
    tagline: "All-in-one puck prep. Station built-in.",
    desc: "A complete espresso workflow station — tamper, distributor, puck screen, dosing funnel, portafilter holder, and a large integrated knock box, all housed in a single handsome wood or matte-black unit. Every tool snaps into its own dedicated slot so your counter stays clean and your workflow stays efficient shot after shot.",
    affiliateUrl: "https://amzn.to/3R8xBv3",
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
    id: 69,
    category: "Accessories",
    subcategory: "Espresso Tools",
    name: "MUVNA Espresso Knock Box Large Capacity",
    tagline: "Precision design. 1.82L capacity. Zero mess.",
    desc: "The MUVNA Knock Box is built for the serious home barista who demands both form and function. Its oversized 1.82L cylindrical chamber handles up to 20 spent pucks before emptying — ideal for back-to-back brewing sessions. The silicone-padded stainless shock bar absorbs each knock cleanly, protecting your portafilter finish. The inner container lifts out in seconds for a full rinse, and the ventilated top prevents moisture buildup that causes mold. Available in matte black and matte white.",
    affiliateUrl: "https://amzn.to/3RIdJyS",
    rating: 4.8,
    reviews: 2314,
    badge: "Editor's Pick",
    badgeColor: "#8b2f2f",
    image: "/images/products/muvna-knock-box-main.jpg",
    hoverImage: "/images/products/muvna-knock-box-hover1.jpg",
    hoverImage2: "/images/products/muvna-knock-box-hover2.jpg",
    hoverImage3: "/images/products/muvna-knock-box-hover3.jpg",
    mainFit: "cover",
    mainPosition: "center",
    mainBrightness: 0.75,
    pros: ["1.82L capacity — holds ~20 espresso pucks", "Silicone shock bar protects portafilter finish", "Removable inner container for easy rinsing", "Ventilated top prevents mold and odor", "Non-slip base keeps it planted on any surface"],
  },
  {
    id: 59,
    category: "Accessories",
    subcategory: "Milk Frothers",
    name: "Breville Milk Café Electric Frother",
    tagline: "Café-quality foam. Every single cup.",
    desc: "The Breville Milk Café is the gold standard in countertop milk frothing. Its induction heating system brings milk to the perfect temperature without scorching, while the dial-controlled frothing disc lets you choose between silky microfoam for lattes, thick froth for cappuccinos, or a flat warm milk for cortados. All stainless, all precise, all Breville.",
    affiliateUrl: "https://amzn.to/4tE4Zau",
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
  {
    id: 60,
    category: "Accessories",
    subcategory: "Milk Frothers",
    name: "DeLonghi LatteMix Cold & Hot Frother",
    tagline: "Hot or cold. Froth on demand.",
    desc: "The De'Longhi LatteMix does it all — hot foam for lattes and cappuccinos, warm milk for flat whites, and cold froth for iced drinks, all at the touch of a button. Its large-capacity stainless jug, one-touch controls, and quiet induction motor make it the most versatile countertop frother for serious coffee drinkers.",
    affiliateUrl: "https://amzn.to/3R4vg4j",
    rating: 4.6,
    reviews: 5234,
    badge: "Hot & Cold",
    badgeColor: "#2b6cb0",
    image: "/images/products/delonghi-lattemix-main.jpeg",
    hoverImage: "/images/products/delonghi-lattemix-hover1.jpeg",
    hoverImage2: "/images/products/delonghi-lattemix-hover2.jpeg",
    hoverImage3: "/images/products/delonghi-lattemix-hover3.jpeg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["Hot & cold frothing modes", "One-touch button controls", "Large-capacity stainless jug", "Quiet induction heating system"],
  },
  {
    id: 61,
    category: "Accessories",
    subcategory: "Milk Frothers",
    name: "Secura Detachable Milk Frother (Hot & Cold Foam)",
    tagline: "4-in-1 frothing. Detachable. Effortless.",
    desc: "The Secura Detachable Milk Frother is a 4-in-1 powerhouse that handles hot milk foam, cold milk foam, hot milk, and hot chocolate — all from a single brushed stainless vessel. The detachable jug lifts straight off the base for easy pouring and dishwasher-safe cleanup, making it the most practical frother on any serious coffee counter.",
    affiliateUrl: "https://amzn.to/4uXGhmF",
    rating: 4.6,
    reviews: 12847,
    badge: "4-in-1",
    badgeColor: "#5a3a1a",
    image: "/images/products/secura-frother-main.jpeg",
    hoverImage: "/images/products/secura-frother-hover1.webp",
    hoverImage2: "/images/products/secura-frother-hover2.webp",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["4-in-1: hot foam, cold foam, hot milk, hot choc", "Detachable jug for easy pour & clean", "Brushed stainless steel construction", "Silent operation with auto shut-off"],
  },
  {
    id: 62,
    category: "Accessories",
    subcategory: "Milk Frothers",
    name: "Nespresso Aeroccino 4 Milk Frother",
    tagline: "Four modes. One iconic frother.",
    desc: "The Nespresso Aeroccino 4 is the frother that defined the category. Four touch-button modes — cold foam, hot milk, dense hot foam, and light hot foam — are all accessible via illuminated icons on the base. The mirror-polished ribbed stainless body makes it the most striking frother on any counter, and the cordless jug pours with complete freedom.",
    affiliateUrl: "https://amzn.to/4dO20r6",
    rating: 4.8,
    reviews: 19432,
    badge: "Iconic Design",
    badgeColor: "#8b2f2f",
    image: "/images/products/nespresso-aeroccino4-main.jpeg",
    hoverImage: "/images/products/nespresso-aeroccino4-hover1.jpeg",
    hoverImage2: "/images/products/nespresso-aeroccino4-hover3.jpg",
    mainFit: "cover",
    mainPosition: "center",
    hoverScales: [1.03, 1.18],
    pros: ["4 illuminated touch-button modes", "Cold foam, hot milk & two hot foam settings", "Cordless mirror-polished ribbed jug", "Auto shut-off with keep-warm base"],
  },
  {
    id: 63,
    category: "Accessories",
    subcategory: "Coffee Mugs",
    name: "Ember Smart Mug 2 Temperature Control",
    tagline: "Your perfect temperature. Always.",
    desc: "The Ember Smart Mug 2 keeps your coffee or tea at the exact temperature you set — from 120°F to 145°F — for up to 80 minutes on a single charge or all day on the included charging coaster. Control it from the Ember app or right on the mug itself. Minimal, matte-finished, and built for the serious coffee drinker who refuses to drink it cold.",
    affiliateUrl: "https://amzn.to/4nyeNkY",
    rating: 4.7,
    reviews: 28341,
    badge: "App-Controlled",
    badgeColor: "#8b2f2f",
    image: "/images/products/ember-mug2-main.jpeg",
    hoverImage: "/images/products/ember-mug2-hover1.jpeg",
    hoverImage2: "/images/products/ember-mug2-hover2.jpeg",
    hoverImage3: "/images/products/ember-mug2-hover3.jpeg",
    hoverImage4: "/images/products/ember-mug2-hover4.jpeg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["Maintains temp 120°F–145°F for up to 80 min", "All-day warmth on included charging coaster", "Control via app or touch on mug", "Matte ceramic-coated stainless interior"],
  },
  {
    id: 64,
    category: "Accessories",
    subcategory: "Coffee Mugs",
    name: "Ember Tumbler with Temperature Control",
    tagline: "Grande capacity. Precise temperature. On the go.",
    desc: "The Ember Tumbler is Ember's biggest and most capable vessel yet — a 16 oz travel tumbler that keeps your drink at the exact temperature you set for up to 3 hours on a single charge. IPX7 waterproof rated, so it survives a full soak or rinse. The carry handle and sip-through lid make it the ideal commute companion for anyone serious about their coffee temperature.",
    affiliateUrl: "https://amzn.to/42DFxXG",
    rating: 4.7,
    reviews: 8923,
    badge: "16 oz",
    badgeColor: "#2b1e16",
    image: "/images/products/ember-tumbler-main.jpeg",
    hoverImage: "/images/products/ember-tumbler-hover1.jpeg",
    hoverImage2: "/images/products/ember-tumbler-hover2.jpeg",
    hoverImage3: "/images/products/ember-tumbler-hover3.jpeg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["16 oz capacity — Ember's largest vessel", "3-hour battery life with app temperature control", "IPX7 waterproof — fully submersible", "Carry handle & sip-through travel lid"],
  },
  {
    id: 65,
    category: "Accessories",
    subcategory: "Coffee Mugs",
    name: "Ember Travel Mug 2",
    tagline: "Precision temperature. Built for the commute.",
    desc: "The Ember Travel Mug 2 is the smart mug engineered for life on the move. The built-in LED temperature display lets you read the exact heat of your drink at a glance — no phone needed. The tapered grip fits most car cup holders, and the leak-proof lid keeps every sip contained. With up to 3 hours of battery and all-day warmth on the included charging coaster, your coffee never gets cold again.",
    affiliateUrl: "https://amzn.to/4wzHJgn",
    rating: 4.6,
    reviews: 11284,
    badge: "LED Display",
    badgeColor: "#5a3a1a",
    image: "/images/products/ember-travel-mug2-main.jpeg",
    hoverImage: "/images/products/ember-travel-mug2-new-hover1.jpg",
    hoverImage2: "/images/products/ember-travel-mug2-new-hover2.jpg",
    hoverImage3: "/images/products/ember-travel-mug2-hover3.jpeg",
    hoverImage4: "/images/products/ember-travel-mug2-hover4.jpeg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["On-mug LED temperature display", "Tapered design fits car cup holders", "Leak-proof lid for on-the-go sipping", "3-hour battery + charging coaster included"],
  },
  {
    id: 66,
    category: "Accessories",
    subcategory: "Coffee Mugs",
    name: "Nextmug Self-Heating Coffee Mug",
    tagline: "Three heat settings. Zero cold coffee.",
    desc: "The Nextmug by Nextboom takes a refreshingly simple approach to smart heating — three clearly labelled heat modes (Warm 130°F, Hot 140°F, Piping 150°F) selectable with a single button press on the base. No app required. The wireless charging coaster keeps it topped up between sips, and the wide-mouth barrel shape feels like a proper coffee mug rather than a gadget.",
    price: "$79.95",
    rating: 4.4,
    reviews: 6218,
    badge: "No App Needed",
    badgeColor: "#2b1e16",
    image: "/images/products/nextmug-main.jpeg",
    hoverImage: "/images/products/nextmug-hover1.jpeg",
    hoverImage2: "/images/products/nextmug-hover2.jpeg",
    hoverImage3: "/images/products/nextmug-hover3.jpeg",
    hoverImage4: "/images/products/nextmug-hover4.jpeg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["3 heat settings: Warm / Hot / Piping", "Single-button control — no app required", "Wireless charging coaster included", "Wide-mouth barrel for a proper mug feel"],
  },
  {
    id: 67,
    category: "Accessories",
    subcategory: "Coffee Mugs",
    name: "OHOM Ui Artist Collection Self-Heating Mug Set",
    tagline: "Art-glazed ceramic. Precision heat. Dual purpose.",
    desc: "The OHOM Ui Artist Mug Set is where craft pottery meets smart technology. Each mug is finished in a hand-glazed artist-series ceramic exterior — speckled stone, ocean blue, blush gradient — and pairs with a wireless charging coaster that doubles as a Qi phone charger. Temperature is maintained continuously while the mug sits on its coaster, no buttons, no apps, no compromise.",
    affiliateUrl: "https://amzn.to/4eRpg8L",
    rating: 4.5,
    reviews: 4391,
    badge: "Artist Series",
    badgeColor: "#5a3a1a",
    image: "/images/products/ohom-ui-artist-main.jpeg",
    hoverImage: "/images/products/ohom-ui-artist-hover1.jpeg",
    hoverImage2: "/images/products/ohom-ui-artist-hover2.jpeg",
    hoverImage3: "/images/products/ohom-ui-artist-hover3.jpeg",
    hoverImage4: "/images/products/ohom-ui-artist-hover4.jpeg",
    mainFit: "cover",
    mainPosition: "center",
    defaultSwatchColor: "#2c2a28",
    variants: [
      { color: "#d4899a", label: "Blush Cloud", affiliateUrl: "https://amzn.to/4tA5uT3", image: "/images/products/ohom-artist-blush-cloud-main.jpg" },
      { color: "#6b8fa3", label: "Arctic Radiance", affiliateUrl: "https://amzn.to/4dsavXM", image: "/images/products/ohom-artist-arctic-radiance-main.jpg" },
      { color: "#1e4d6b", label: "Midnight Abyss", affiliateUrl: "https://amzn.to/4fkzVsM", image: "/images/products/ohom-artist-midnight-abyss-main.jpg" },
    ],
    pros: ["Hand-glazed artist-series ceramic exterior", "Wireless coaster doubles as Qi phone charger", "Continuous heat — no buttons or app needed", "Multiple colorway glazes available"],
  },
  {
    id: 68,
    category: "Accessories",
    subcategory: "Coffee Mugs",
    name: "OHOM Ui Self-Heating Ceramic Mug Set",
    tagline: "Minimalist ceramic. Infinite warmth.",
    desc: "The OHOM Ui Self-Heating Ceramic Mug Set strips smart heating back to its purest form. Set the mug on its brushed aluminium coaster and your drink stays at the perfect temperature — indefinitely, automatically, silently. The same coaster wirelessly charges your phone, AirPods, or any Qi-compatible device. Clean matte ceramic, no display, no app, no noise. Just warmth, exactly when you need it.",
    affiliateUrl: "https://amzn.to/4uQmvcz",
    rating: 4.6,
    reviews: 5872,
    badge: "Always Warm",
    badgeColor: "#8b2f2f",
    image: "/images/products/ohom-ui-ceramic-main.jpeg",
    hoverImage: "/images/products/ohom-ui-ceramic-hover1.jpeg",
    hoverImage2: "/images/products/ohom-ui-ceramic-hover2.jpeg",
    hoverImage3: "/images/products/ohom-ui-ceramic-hover3.jpeg",
    hoverImage4: "/images/products/ohom-ui-ceramic-hover4.jpeg",
    hoverImage5: "/images/products/ohom-ui-ceramic-main.jpg",
    hoverImage6: "/images/products/ohom-ui-ceramic-hover1.jpg",
    hoverImage7: "/images/products/ohom-ui-ceramic-hover2.jpg",
    mainFit: "cover",
    mainPosition: "center",
    pros: ["Continuous warmth — no timer, no shutoff", "Brushed aluminium Qi charging coaster", "Charges phone, AirPods & Qi devices", "Matte ceramic with ceramic lid included"],
  },
];

const coffeeBeans = [
  {
    id: "cb1",
    name: "Lavazza Super Crema",
    roast: "Medium Espresso",
    origin: "Italian Blend",
    desc: "One of the most popular espresso beans in the world. Creamy body with hazelnut and brown sugar notes — works beautifully in super-automatics and traditional machines alike.",
    image: "/images/products/coffee-beans/lavazza-super-crema.png",
    url: "https://amzn.to/4xe0JSa",
    badge: "Best Seller",
  },
  {
    id: "cb2",
    name: "Lavazza Espresso Barista Gran Crema Whole Bean Coffee Blend",
    roast: "Medium",
    origin: "Italian Blend",
    desc: "A velvety espresso with rich chocolate and spice notes. Lavazza's barista-grade blend is engineered for dense crema and consistent extraction — shot after shot.",
    image: "/images/products/coffee-beans/lavazza-gran-crema.png",
    url: "https://amzn.to/4dJkwQc",
    badge: "Top Rated",
  },
  {
    id: "cb3",
    name: "Peet's Coffee, Dark Roast Whole Bean Coffee - Major Dickason's Blend",
    roast: "Dark",
    origin: "Multi-Origin Blend",
    desc: "Bold, rich, and complex. Peet's signature dark roast is full-bodied with serious depth — a coffee lover's benchmark since 1966.",
    image: "/images/products/coffee-beans/peets-major-dickason.png",
    url: "https://amzn.to/43Cd3xI",
    badge: "Dark Roast Pick",
  },
  {
    id: "cb4",
    name: "Death Wish Coffee Medium Roast, Whole Bean Coffee",
    roast: "Medium",
    origin: "Multi-Origin",
    desc: "Not just the world's strongest coffee — it's surprisingly smooth. Bold cherry and chocolate notes with serious caffeine. Perfect for cold brew and French press.",
    image: "/images/products/coffee-beans/death-wish-coffee.png",
    url: "https://amzn.to/4a315Rr",
    badge: "High Caffeine",
  },
  {
    id: "cb5",
    name: "Onyx Coffee Lab Tropical Weather Whole Bean Espresso Coffee Blend – Medium",
    roast: "Medium Espresso",
    origin: "Direct Trade, Multi-Origin",
    desc: "A vibrant specialty espresso blend with tropical fruit and floral notes. Onyx sources directly from farms — this is what specialty coffee is supposed to taste like.",
    image: "/images/products/coffee-beans/onyx-tropical-weather.png",
    url: "https://amzn.to/4o5N5MM",
    badge: "Editor's Pick",
  },
  {
    id: "cb6",
    name: "Kicking Horse Coffee, Three Sisters, Medium Roast, Whole Bean",
    roast: "Medium",
    origin: "Multi-Origin",
    desc: "Sweet, nutty, and medium-bodied. Naturally low-acid with a clean, forgiving profile — equally great for pour-over, cold brew, or French press.",
    image: "/images/products/coffee-beans/kicking-horse-three-sisters.png",
    url: "https://amzn.to/4ede5GB",
    badge: "Crowd Pleaser",
    mainFit: "cover",
    mainPosition: "center 30%",
  },
  {
    id: "cb7",
    name: "Stumptown Coffee Roasters, Medium Roast Organic Whole Bean Coffee",
    roast: "Medium Organic",
    origin: "Organic Blend",
    desc: "Stumptown's flagship organic whole bean. Caramel, dark chocolate, and hazelnut in a balanced roast. Roasted-on date on every bag. One of the easiest picks we make.",
    image: "/images/products/coffee-beans/stumptown-holler-mountain.png",
    url: "https://amzn.to/3PUowpb",
    badge: "Staff Favourite",
  },
  {
    id: "cb8",
    name: "Intelligentsia Coffee, Black Cat Sublunar Espresso Dark Roast Whole Bean Coffee",
    roast: "Dark Espresso",
    origin: "Multi-Origin",
    desc: "A dark espresso roast built for precision extraction. Chocolate and caramel notes with a clean, persistent finish — intense without being harsh.",
    image: "/images/products/coffee-beans/intelligentsia-sublunar.png",
    url: "https://amzn.to/4ecY6s7",
    badge: "Dark Espresso",
  },
  {
    id: "cb9",
    name: "Intelligentsia Coffee, Black Cat Analog Espresso Medium Roast Whole Bean Coffee",
    roast: "Medium Espresso",
    origin: "Multi-Origin",
    desc: "Wild berry and chocolate in a medium espresso roast. Intelligentsia's most approachable Black Cat — versatile enough for espresso, pour-over, or filter brewing.",
    image: "/images/products/coffee-beans/intelligentsia-analog.png",
    url: "https://amzn.to/4u2OapW",
    badge: "Specialty Pick",
    mainFit: "cover",
    mainPosition: "center 40%",
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSubcategory, setActiveSubcategory] = useState("All Accessories");
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [cycleIndex, setCycleIndex] = useState(0);
  const cycleTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [selectedVariants, setSelectedVariants] = useState<Record<number, number>>({});

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
    if (activeCategory === "Coffee Beans") return [];
    if (activeCategory === "Accessories") {
      const acc = products.filter((p) => p.category === "Accessories");
      if (activeSubcategory === "All Accessories") return acc;
      return acc.filter((p) => (p as any).subcategory === activeSubcategory);
    }
    return products.filter((p) => p.category === activeCategory);
  })();

  return (
    <div style={{ backgroundColor: "#0b0b0b", color: "#f2f2f2", minHeight: "100vh" }}>
      <Helmet>
        <title>Shop Coffee Gear & Espresso Equipment | Hard House Coffee</title>
        <meta name="description" content="Shop our curated selection of espresso machines, coffee grinders, and accessories at Hard House Coffee. Gear reviewed and recommended by coffee obsessives." />
        <meta property="og:title" content="Shop Coffee Gear & Espresso Equipment | Hard House Coffee" />
        <meta property="og:description" content="Espresso machines, grinders, and accessories — curated and reviewed by coffee obsessives." />
      </Helmet>
      <Navbar />

      {/* Page header */}
      <div
        className="pt-32 pb-16 px-6 text-center"
        style={{
          background: "linear-gradient(to bottom, #2b1e16 0%, #0b0b0b 100%)",
          borderBottom: "1px solid rgba(161,79,31,0.2)",
        }}
      >
        <p className="section-subtitle" style={{ color: "#a14f1f" }}>Recommended Products</p>
        <div className="divider-orange mx-auto" />
        <h1 className="section-title inter-title mt-4" style={{ fontSize: "clamp(2rem,5vw,3.5rem)" }}>
          Coffee Essentials
        </h1>
        <p style={{ color: "#b0a090", maxWidth: "480px", margin: "1rem auto 0", lineHeight: 1.7 }}>
          Expert-tested espresso machines, coffee makers and brewing gear — curated for serious coffee lovers.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Category filter */}
        <div
          style={{
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            marginBottom: "1rem",
          }}
        >
          <div style={{ display: "flex", gap: "0.75rem", minWidth: "max-content", paddingBottom: "2px" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setActiveSubcategory("All Accessories");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
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
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
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


        {/* Empty state for categories with no products */}
        {filtered.length === 0 && activeCategory !== "Coffee Beans" && (
          <div
            className="flex flex-col items-center justify-center py-24 text-center"
            style={{ borderRadius: "10px", border: "1px dashed rgba(161,79,31,0.25)", background: "#0f0f0f" }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "1rem", opacity: 0.4 }}>☕</div>
            <h3
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: "1.1rem",
                color: "#d4b896",
                letterSpacing: "0.08em",
                marginBottom: "0.75rem",
              }}
            >
              Coming Soon
            </h3>
            <p style={{ color: "#7a6a5a", fontSize: "0.9rem", maxWidth: "340px", lineHeight: 1.7 }}>
              More gear is on its way. Check back soon.
            </p>
          </div>
        )}

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => {
            const isHovered = hoveredId === product.id;
            const variants = (product as any).variants as Array<{ color: string; label: string; affiliateUrl: string; image?: string }> | undefined;
            const activeVariantIdx = selectedVariants[product.id] ?? -1;
            const activeAffiliateUrl = variants && activeVariantIdx >= 0 ? variants[activeVariantIdx].affiliateUrl : (product as any).affiliateUrl;
            const activeMainImage = variants && activeVariantIdx >= 0 && variants[activeVariantIdx].image ? variants[activeVariantIdx].image : product.image;
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
                    const hoverImages = [product.hoverImage, (product as any).hoverImage2, (product as any).hoverImage3, (product as any).hoverImage4, (product as any).hoverImage5, (product as any).hoverImage6, (product as any).hoverImage7].filter(Boolean) as string[];
                    const activeCycleIdx = hoverImages.length > 0 ? cycleIndex % hoverImages.length : 0;
                    const variantImageActive = variants && activeVariantIdx >= 0 && variants[activeVariantIdx].image;
                    return (
                      <>
                        {/* Main image — always shown when a variant swatch is selected */}
                        <img
                          src={activeMainImage}
                          alt={`${product.name} — ${product.category} recommended by Hard House Coffee`}
                          className="w-full h-full absolute inset-0"
                          style={{
                            objectFit: (product as any).mainFit || "cover",
                            objectPosition: product.id === "cb6" ? "center bottom" : product.id === "cb9" ? "center bottom" : (product as any).mainPosition || "center",
                            opacity: isHovered && hoverImages.length > 0 && !variantImageActive ? 0 : 1,
                            transform: isHovered ? `scale(${((product as any).mainScale ?? 1) * 1.06}) translateY(${(product as any).mainTranslateY ?? "0%"})` : `scale(${(product as any).mainScale ?? 1}) translateY(${(product as any).mainTranslateY ?? "0%"})`,
                            transition: "opacity 0.55s ease, transform 0.55s ease",
                            filter: `brightness(${(product as any).mainBrightness ?? 0.65})`,
                          }}
                        />
                        {/* Hover images — cycle through on timer, suppressed when variant selected */}
                        {hoverImages.map((src, idx) => (
                          <img
                            key={idx}
                            src={src}
                            alt={`${product.name} ${product.category} alternate view ${idx + 1}`}
                            className="w-full h-full absolute inset-0"
                            style={{
                              objectFit: (product as any).hoverVignetteIndices?.includes(idx) ? "contain" : "cover",
                              objectPosition: "center",
                              opacity: isHovered && activeCycleIdx === idx && !variantImageActive ? 1 : 0,
                              transform: isHovered && activeCycleIdx === idx && !variantImageActive
                                ? `scale(${(product as any).hoverScales?.[idx] ?? (product as any).hoverScale ?? 1.03})`
                                : `scale(${((product as any).hoverScales?.[idx] ?? (product as any).hoverScale ?? 1.03) - 0.02})`,
                              transition: "opacity 0.55s ease, transform 0.55s ease",
                              filter: "brightness(0.85)",
                            }}
                          />
                        ))}
                        {/* Vignette overlay for white-background images */}
                        {(product as any).mainVignette && (
                          <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                              background: "radial-gradient(ellipse at center, transparent 35%, rgba(11,9,7,0.52) 100%)",
                              zIndex: 1,
                            }}
                          />
                        )}
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
                      marginBottom: "0.3rem",
                    }}
                  >
                    <a
                      href={activeAffiliateUrl || "#"}
                      target="_blank"
                      rel="nofollow sponsored noopener noreferrer"
                      style={{ color: "#f2f2f2", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#d4b896")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#f2f2f2")}
                    >
                      {product.name}
                    </a>
                  </h3>

                  {/* Color variant swatches — shown directly below product name */}
                  {variants && variants.length > 0 && (
                    <div className="flex items-center gap-2 mb-3" style={{ flexWrap: "wrap" }}>
                      <span style={{ fontSize: "0.7rem", color: "#7a6a5a", letterSpacing: "0.06em", textTransform: "uppercase" }}>Color:</span>
                      {/* "Default" swatch — deselects variant */}
                      <button
                        onClick={(e) => { e.stopPropagation(); setSelectedVariants((prev) => { const next = { ...prev }; delete next[product.id]; return next; }); }}
                        title="Default"
                        style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          border: activeVariantIdx === -1 ? "2px solid #a14f1f" : "2px solid rgba(161,79,31,0.3)",
                          boxShadow: activeVariantIdx === -1 ? "0 0 0 2px rgba(161,79,31,0.4)" : "none",
                          background: (product as any).defaultSwatchColor || "#555",
                          cursor: "pointer",
                          padding: 0,
                          transition: "border 0.2s, box-shadow 0.2s",
                          flexShrink: 0,
                        }}
                      />
                      {variants.map((v, vIdx) => (
                        <button
                          key={vIdx}
                          onClick={(e) => { e.stopPropagation(); setSelectedVariants((prev) => ({ ...prev, [product.id]: vIdx })); }}
                          title={v.label}
                          style={{
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            border: activeVariantIdx === vIdx ? "2px solid #a14f1f" : "2px solid rgba(161,79,31,0.3)",
                            boxShadow: activeVariantIdx === vIdx ? "0 0 0 2px rgba(161,79,31,0.4)" : "none",
                            background: v.color,
                            cursor: "pointer",
                            padding: 0,
                            transition: "border 0.2s, box-shadow 0.2s",
                            flexShrink: 0,
                          }}
                        />
                      ))}
                      {activeVariantIdx >= 0 && (
                        <span style={{ fontSize: "0.7rem", color: "#c4b09a", marginLeft: "2px" }}>
                          {variants[activeVariantIdx].label}
                        </span>
                      )}
                    </div>
                  )}

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

                  <div className="flex flex-col gap-2 mt-auto">
                    <a
                      href={activeAffiliateUrl || "#"}
                      target="_blank"
                      rel="nofollow sponsored noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <button className="btn-primary w-full" style={{ fontSize: "0.78rem" }}>
                        Buy Now on Amazon
                      </button>
                    </a>
                    <p style={{ fontSize: "0.68rem", color: "#c4b09a", textAlign: "center", letterSpacing: "0.01em", lineHeight: 1.4, marginTop: "4px" }}>
                      For the latest pricing and availability, view this product directly on Amazon.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Coffee Beans Section ── */}
        {(activeCategory === "All" || activeCategory === "Coffee Beans") && (
          <div id="coffee-beans" style={{ marginTop: "4rem" }}>
            {/* Section header */}
            <div
              style={{
                borderTop: "1px solid rgba(161,79,31,0.2)",
                paddingTop: "3rem",
                marginBottom: "2rem",
                textAlign: "center",
              }}
            >
              <p className="section-subtitle" style={{ color: "#a14f1f" }}>
                Hard House Coffee Picks
              </p>
              <div className="divider-orange mx-auto" />
              <h2
                className="section-title mt-4"
                style={{ fontSize: "clamp(1.6rem,4vw,2.6rem)" }}
              >
                Recommended Coffee Beans
              </h2>
              <p
                style={{
                  color: "#b0a090",
                  maxWidth: "520px",
                  margin: "1rem auto 0",
                  lineHeight: 1.7,
                  fontSize: "0.9rem",
                }}
              >
                The best whole-bean coffees we're brewing with right now — sourced from the world's top roasters and tested in our own machines.
              </p>
            </div>

            {/* Beans grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coffeeBeans.map((bean) => (
                <div
                  key={bean.id}
                  style={{
                    background: "#111",
                    borderRadius: "10px",
                    border: "1px solid rgba(161,79,31,0.18)",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    transition: "border-color 0.25s, box-shadow 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(161,79,31,0.5)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 28px rgba(0,0,0,0.45)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(161,79,31,0.18)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {/* Image */}
                  <div
                    style={{
                      height: "220px",
                      background: "#0d0d0d",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={bean.image}
                      alt={`${bean.name} ${bean.roast} whole bean coffee — ${bean.origin}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center top",
                        display: "block",
                      }}
                    />
                    {/* Badge */}
                    <div
                      style={{
                        position: "absolute",
                        top: "10px",
                        left: "10px",
                        background: "#8b2f2f",
                        borderRadius: "4px",
                        fontSize: "0.58rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#f2f2f2",
                        fontWeight: 700,
                        padding: "2px 7px",
                      }}
                    >
                      {bean.badge}
                    </div>
                    {/* Roast label */}
                    <div
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        background: "rgba(11,11,11,0.85)",
                        borderRadius: "4px",
                        fontSize: "0.6rem",
                        color: "#a14f1f",
                        fontWeight: 600,
                        padding: "2px 7px",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {bean.roast}
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    style={{
                      padding: "1.25rem",
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
                    }}
                  >
                    <p
                      style={{
                        fontSize: "0.65rem",
                        color: "#5a4e42",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: "0.35rem",
                      }}
                    >
                      {bean.origin}
                    </p>
                    <h3
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        color: "#f2f2f2",
                        marginBottom: "0.75rem",
                        lineHeight: 1.3,
                      }}
                    >
                      {bean.name}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.78rem",
                        color: "#a09080",
                        lineHeight: 1.6,
                        marginBottom: "1.25rem",
                        flex: 1,
                      }}
                    >
                      {bean.desc}
                    </p>
                    <a
                      href={bean.url}
                      target="_blank"
                      rel="nofollow sponsored noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <button className="btn-primary w-full" style={{ fontSize: "0.76rem" }}>
                        Buy on Amazon
                      </button>
                    </a>
                    <p
                      style={{
                        fontSize: "0.65rem",
                        color: "#5a4e42",
                        textAlign: "center",
                        marginTop: "6px",
                        lineHeight: 1.4,
                      }}
                    >
                      Affiliate link — we may earn a commission at no extra cost to you.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <PageNav nextPath="/" nextLabel="Return to Home" showArrow={false} />
      <Footer />
    </div>
  );
}
