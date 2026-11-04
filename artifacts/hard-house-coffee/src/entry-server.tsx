import React from "react";
import ReactDOMServer from "react-dom/server";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { routes } from "@/routes.config";
import NotFound from "@/pages/not-found";
import { ARTICLE_REDIRECTS } from "@/config/articleRedirects";
import RetiredArticleRedirect from "@/components/RetiredArticleRedirect";

// Re-export ROUTES so scripts/prerender.mjs can import it from the server bundle.
// prerender.mjs is the ONLY other file that references route paths — it derives
// them from here, not from its own list.
export { routes as ROUTES };
export { AMAZON_SHOPPING_ENABLED } from "@/config/shopping";
export { ARTICLE_REDIRECTS };

function AppRoutes() {
  return (
    <Switch>
      {Object.keys(ARTICLE_REDIRECTS).map((path) => <Route key={path} path={path} component={RetiredArticleRedirect} />)}
      {routes.map(({ path, component: Component }) => (
        <Route key={path} path={path} component={Component} />
      ))}
      <Route component={NotFound} />
    </Switch>
  );
}

export function render(url: string): { html: string; helmetContext: Record<string, unknown> } {
  const { pathname, search } = new URL(url, "http://ssr.local");
  const helmetContext: Record<string, unknown> = {};
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false, staleTime: Infinity },
    },
  });

  const html = ReactDOMServer.renderToString(
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter hook={() => [pathname, () => {}]} ssrSearch={search}>
            <AppRoutes />
          </WouterRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );

  return { html, helmetContext };
}
