import { Children, isValidElement, type ComponentProps, type ReactNode } from "react";
import { Link } from "wouter";
import { isShoppingSuspended } from "@/config/shopping";

function containsButton(children: ReactNode): boolean {
  return Children.toArray(children).some(
    (child) => isValidElement<{ children?: ReactNode }>(child) &&
      (child.type === "button" || containsButton(child.props.children)),
  );
}

// Keep original URLs in source, but omit shop promotions from rendered HTML.
// Inline Amazon links retain their editorial text without an active destination.
export default function ShoppingLink(props: ComponentProps<typeof Link>) {
  const href = props.href ?? props.to ?? "";
  if (isShoppingSuspended(href)) {
    if (href.startsWith("/products") || containsButton(props.children)) return null;
    return <span>{props.children}</span>;
  }
  return <Link {...props} />;
}
