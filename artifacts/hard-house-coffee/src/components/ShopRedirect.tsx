import { useEffect } from "react";
import { useLocation } from "wouter";
import Home from "@/pages/Home";

export default function ShopRedirect() {
  const [, navigate] = useLocation();
  useEffect(() => {
    navigate("/", { replace: true });
  }, [navigate]);
  // No closure screen, catalog flash, or blank frame while navigation completes.
  return <Home />;
}
