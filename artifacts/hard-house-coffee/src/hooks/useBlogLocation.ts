import { useBrowserLocation } from "wouter/use-browser-location";
import { blogNavigationTarget } from "@/lib/blogNavigation";

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

// Reuse Wouter's browser/history implementation. Only article-to-blog returns
// are resolved specially; article URLs, layout and native Back stay unchanged.
export function useBlogLocation(options?: Parameters<typeof useBrowserLocation>[0]): ReturnType<typeof useBrowserLocation> {
  const [path, navigate] = useBrowserLocation(options);
  return [path, (destination, navigationOptions) => {
    const to = String(destination);
    const relative = base && to.startsWith(`${base}/`) ? to.slice(base.length) : to;
    const currentPath = base && path.startsWith(`${base}/`) ? path.slice(base.length) : path;
    const { target, state } = blogNavigationTarget(
      relative, currentPath, window.location.search, window.history.state, navigationOptions?.state,
    );
    navigate(target === relative ? destination : `${base}${target}`, { ...navigationOptions, state });
  }];
}
