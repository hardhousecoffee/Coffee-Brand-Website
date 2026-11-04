import { useEffect } from "react";
import { useLocation } from "wouter";
import BlogPostSteppingUp1000 from "@/pages/BlogPostSteppingUp1000";
import { premiumGuide } from "@/data/premiumEspressoGuide";

export default function RetiredArticleRedirect() {
  const [, navigate] = useLocation();
  useEffect(() => {
    navigate(premiumGuide.path, { replace: true });
  }, [navigate]);
  // Render the destination during SSR and while the client replaces the URL.
  return <BlogPostSteppingUp1000 />;
}
