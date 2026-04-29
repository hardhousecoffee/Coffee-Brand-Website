import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
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
      <Route path="/products" component={Products} />
      <Route path="/merch" component={Products} />
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
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <ScrollToTop />
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
