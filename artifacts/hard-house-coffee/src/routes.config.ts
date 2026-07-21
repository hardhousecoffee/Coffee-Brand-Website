import { ComponentType } from "react";
import Home from "@/pages/Home";
import Blog from "@/pages/Blog";
import BlogPost2026EspressoGuide from "@/pages/BlogPost2026EspressoGuide";
import BlogPostPourOver from "@/pages/BlogPostPourOver";
import BlogPostGrinder from "@/pages/BlogPostGrinder";
import BlogPostEspressoRanked from "@/pages/BlogPostEspressoRanked";
import BlogPostDarkRoast from "@/pages/BlogPostDarkRoast";
import BlogPostSpecialtyCoffeeBars from "@/pages/BlogPostSpecialtyCoffeeBars";
import BlogPostColdBrew from "@/pages/BlogPostColdBrew";
import BlogPostCoffeeOrigins from "@/pages/BlogPostCoffeeOrigins";
import BlogPost300DollarEspresso from "@/pages/BlogPost300DollarEspresso";
import BlogPostSteppingUp1000 from "@/pages/BlogPostSteppingUp1000";
import BlogPostLaMarzoccoLinea from "@/pages/BlogPostLaMarzoccoLinea";
import BlogPost20000EspressoGear from "@/pages/BlogPost20000EspressoGear";
import BlogPostSeattleCoffeeScene from "@/pages/BlogPostSeattleCoffeeScene";
import BlogPostLACoffeeScene from "@/pages/BlogPostLACoffeeScene";
import BlogPostSFSpecialtyRevolution from "@/pages/BlogPostSFSpecialtyRevolution";
import BlogPostNYCEspressoBars from "@/pages/BlogPostNYCEspressoBars";
import BlogPostCoffeeFarmers from "@/pages/BlogPostCoffeeFarmers";
import BlogPostCoffeeProcessing from "@/pages/BlogPostCoffeeProcessing";
import BlogPostArtOfRoast from "@/pages/BlogPostArtOfRoast";
import BlogPostFreshnessBag from "@/pages/BlogPostFreshnessBag";
import BlogPostWorldBaristaChamp from "@/pages/BlogPostWorldBaristaChamp";
import BlogPostEliteBarista from "@/pages/BlogPostEliteBarista";
import BlogPostSpecialtyBrands from "@/pages/BlogPostSpecialtyBrands";
import BlogPostLuxuryCoffee from "@/pages/BlogPostLuxuryCoffee";
import BlogPostOnyxCoffeeLab from "@/pages/BlogPostOnyxCoffeeLab";
import BlogPostDittaArtigianale from "@/pages/BlogPostDittaArtigianale";
import BlogPostGlitchCoffeeTokyo from "@/pages/BlogPostGlitchCoffeeTokyo";
import BlogPostCafeLomiParis from "@/pages/BlogPostCafeLomiParis";
import Products from "@/pages/Products";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Disclaimer from "@/pages/Disclaimer";
import TermsOfUse from "@/pages/TermsOfUse";

export interface RouteConfig {
  path: string;
  component: ComponentType;
  changefreq: string;
  priority: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// SINGLE MASTER ROUTE LIST
// To add a new blog post:
//   1. Create the page component in src/pages/
//   2. Import it above
//   3. Add one entry below
// App router, SSR renderer, static pre-render, and sitemap all derive from here.
// ─────────────────────────────────────────────────────────────────────────────
export const routes: RouteConfig[] = [
  { path: "/",       component: Home,    changefreq: "weekly",  priority: "1.0" },
  { path: "/about",  component: About,   changefreq: "monthly", priority: "0.6" },
  { path: "/blog",   component: Blog,    changefreq: "weekly",  priority: "0.9" },

  { path: "/blog/best-espresso-machines-for-beginners-2026-guide",          component: BlogPost2026EspressoGuide,    changefreq: "monthly", priority: "0.8" },
  { path: "/blog/the-art-of-the-perfect-pour-over",                         component: BlogPostPourOver,             changefreq: "monthly", priority: "0.8" },
  { path: "/blog/why-every-coffee-lover-needs-a-grinder-first-2026-guide",  component: BlogPostGrinder,              changefreq: "monthly", priority: "0.8" },
  { path: "/blog/best-espresso-machines-2026-guide-tested-and-ranked",      component: BlogPostEspressoRanked,       changefreq: "monthly", priority: "0.8" },
  { path: "/blog/top-5-dark-roast-beans-for-espresso-in-2026",              component: BlogPostDarkRoast,            changefreq: "monthly", priority: "0.8" },
  { path: "/blog/the-rise-of-specialty-coffee-bars",                        component: BlogPostSpecialtyCoffeeBars, changefreq: "monthly", priority: "0.8" },
  { path: "/blog/cold-brew-mastery-a-complete-home-guide",                  component: BlogPostColdBrew,             changefreq: "monthly", priority: "0.8" },
  { path: "/blog/ethiopia-vs-colombia-a-complete-coffee-origin-guide",      component: BlogPostCoffeeOrigins,        changefreq: "monthly", priority: "0.8" },
  { path: "/blog/the-300-dollar-sweet-spot-real-espresso-at-home",          component: BlogPost300DollarEspresso,    changefreq: "monthly", priority: "0.8" },
  { path: "/blog/stepping-up-what-crossing-1000-mark-actually-buys-you",    component: BlogPostSteppingUp1000,       changefreq: "monthly", priority: "0.8" },
  { path: "/blog/the-icon-la-marzocco-linea-micra-worth-the-obsession",     component: BlogPostLaMarzoccoLinea,      changefreq: "monthly", priority: "0.8" },
  { path: "/blog/living-the-dream-mind-blowing-world-of-20000-espresso-gear", component: BlogPost20000EspressoGear,  changefreq: "monthly", priority: "0.8" },
  { path: "/blog/seattle-deep-roots-emerald-city-coffee-scene",             component: BlogPostSeattleCoffeeScene,  changefreq: "monthly", priority: "0.8" },
  { path: "/blog/los-angeles-old-hollywood-glamour-meets-new-wave",         component: BlogPostLACoffeeScene,        changefreq: "monthly", priority: "0.8" },
  { path: "/blog/san-francisco-birthplace-of-specialty-revolution",         component: BlogPostSFSpecialtyRevolution, changefreq: "monthly", priority: "0.8" },
  { path: "/blog/new-york-city-italian-espresso-bars-to-fast-paced-cafes",  component: BlogPostNYCEspressoBars,      changefreq: "monthly", priority: "0.8" },
  { path: "/blog/seed-to-sprout-secret-lives-of-coffee-farmers",            component: BlogPostCoffeeFarmers,        changefreq: "monthly", priority: "0.8" },
  { path: "/blog/the-magic-of-processing-washing-and-drying-shapes-flavor", component: BlogPostCoffeeProcessing,     changefreq: "monthly", priority: "0.8" },
  { path: "/blog/the-art-of-the-roast-finding-perfect-profile-in-the-drum", component: BlogPostArtOfRoast,           changefreq: "monthly", priority: "0.8" },
  { path: "/blog/logistics-and-freshness-journey-to-your-local-shelf",      component: BlogPostFreshnessBag,         changefreq: "monthly", priority: "0.8" },
  { path: "/blog/inside-world-barista-championship-olympics-of-caffeine",   component: BlogPostWorldBaristaChamp,   changefreq: "monthly", priority: "0.8" },
  { path: "/blog/meet-the-masters-what-makes-top-tier-barista-truly-elite", component: BlogPostEliteBarista,         changefreq: "monthly", priority: "0.8" },
  { path: "/blog/beyond-the-supermarket-navigating-notable-specialty-coffee-brands", component: BlogPostSpecialtyBrands, changefreq: "monthly", priority: "0.8" },
  { path: "/blog/three-most-expensive-coffee-brands-on-earth-luxury-in-a-mug", component: BlogPostLuxuryCoffee,     changefreq: "monthly", priority: "0.8" },
  { path: "/blog/global-excellence-onyx-coffee-lab-bentonville-arkansas",   component: BlogPostOnyxCoffeeLab,        changefreq: "monthly", priority: "0.8" },
  { path: "/blog/old-world-perfection-ditta-artigianale-florence-italy",    component: BlogPostDittaArtigianale,     changefreq: "monthly", priority: "0.8" },
  { path: "/blog/master-of-precision-glitch-coffee-roasters-tokyo-japan",   component: BlogPostGlitchCoffeeTokyo,   changefreq: "monthly", priority: "0.8" },
  { path: "/blog/parisian-elegance-cafe-lomi-paris-france",                 component: BlogPostCafeLomiParis,        changefreq: "monthly", priority: "0.8" },

  { path: "/products",       component: Products,      changefreq: "weekly",  priority: "0.7" },
  { path: "/contact",        component: Contact,       changefreq: "monthly", priority: "0.5" },
  { path: "/privacy-policy", component: PrivacyPolicy, changefreq: "yearly",  priority: "0.3" },
  { path: "/disclaimer",     component: Disclaimer,    changefreq: "yearly",  priority: "0.3" },
  { path: "/terms-of-use",   component: TermsOfUse,    changefreq: "yearly",  priority: "0.3" },
];
