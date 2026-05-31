import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import CookieConsent from "@/components/CookieConsent";
import NotFound from "@/pages/not-found";
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

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/best-espresso-machines-for-beginners-2026-guide" component={BlogPost2026EspressoGuide} />
      <Route path="/blog/the-art-of-the-perfect-pour-over" component={BlogPostPourOver} />
      <Route path="/blog/why-every-coffee-lover-needs-a-grinder-first-2026-guide" component={BlogPostGrinder} />
      <Route path="/blog/best-espresso-machines-2026-guide-tested-and-ranked" component={BlogPostEspressoRanked} />
      <Route path="/blog/top-5-dark-roast-beans-for-espresso-in-2026" component={BlogPostDarkRoast} />
      <Route path="/blog/the-rise-of-specialty-coffee-bars" component={BlogPostSpecialtyCoffeeBars} />
      <Route path="/blog/cold-brew-mastery-a-complete-home-guide" component={BlogPostColdBrew} />
      <Route path="/blog/ethiopia-vs-colombia-a-complete-coffee-origin-guide" component={BlogPostCoffeeOrigins} />
      <Route path="/blog/the-300-dollar-sweet-spot-real-espresso-at-home" component={BlogPost300DollarEspresso} />
      <Route path="/blog/stepping-up-what-crossing-1000-mark-actually-buys-you" component={BlogPostSteppingUp1000} />
      <Route path="/blog/the-icon-la-marzocco-linea-micra-worth-the-obsession" component={BlogPostLaMarzoccoLinea} />
      <Route path="/blog/living-the-dream-mind-blowing-world-of-20000-espresso-gear" component={BlogPost20000EspressoGear} />
      <Route path="/blog/seattle-deep-roots-emerald-city-coffee-scene" component={BlogPostSeattleCoffeeScene} />
      <Route path="/blog/los-angeles-old-hollywood-glamour-meets-new-wave" component={BlogPostLACoffeeScene} />
      <Route path="/blog/san-francisco-birthplace-of-specialty-revolution" component={BlogPostSFSpecialtyRevolution} />
      <Route path="/blog/new-york-city-italian-espresso-bars-to-fast-paced-cafes" component={BlogPostNYCEspressoBars} />
      <Route path="/blog/seed-to-sprout-secret-lives-of-coffee-farmers" component={BlogPostCoffeeFarmers} />
      <Route path="/blog/the-magic-of-processing-washing-and-drying-shapes-flavor" component={BlogPostCoffeeProcessing} />
      <Route path="/blog/the-art-of-the-roast-finding-perfect-profile-in-the-drum" component={BlogPostArtOfRoast} />
      <Route path="/blog/logistics-and-freshness-journey-to-your-local-shelf" component={BlogPostFreshnessBag} />
      <Route path="/blog/inside-world-barista-championship-olympics-of-caffeine" component={BlogPostWorldBaristaChamp} />
      <Route path="/blog/meet-the-masters-what-makes-top-tier-barista-truly-elite" component={BlogPostEliteBarista} />
      <Route path="/blog/beyond-the-supermarket-navigating-notable-specialty-coffee-brands" component={BlogPostSpecialtyBrands} />
      <Route path="/blog/three-most-expensive-coffee-brands-on-earth-luxury-in-a-mug" component={BlogPostLuxuryCoffee} />
      <Route path="/blog/global-excellence-onyx-coffee-lab-bentonville-arkansas" component={BlogPostOnyxCoffeeLab} />
      <Route path="/blog/old-world-perfection-ditta-artigianale-florence-italy" component={BlogPostDittaArtigianale} />
      <Route path="/blog/master-of-precision-glitch-coffee-roasters-tokyo-japan" component={BlogPostGlitchCoffeeTokyo} />
      <Route path="/blog/parisian-elegance-cafe-lomi-paris-france" component={BlogPostCafeLomiParis} />
      <Route path="/products" component={Products} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/disclaimer" component={Disclaimer} />
      <Route path="/terms-of-use" component={TermsOfUse} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <ScrollToTop />
            <Router />
            <CookieConsent />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
