import "./preview.css";
import { createRoot, type Root } from "react-dom/client";
import App from "./App";
import type { Locale } from "./types";

const roots = new Map<HTMLElement, Root>();

function mount() {
  document.querySelectorAll<HTMLElement>("[data-product-preview]").forEach((node) => {
    if (roots.has(node)) return;
    const locale = (node.dataset.locale ?? "en") as Locale;
    const feature = node.dataset.feature ?? "chats";
    const productUrl = node.dataset.productUrl ?? `/${locale}/product/`;
    const root = createRoot(node);
    roots.set(node, root);
    root.render(<App locale={locale} feature={feature} productUrl={productUrl} />);
  });
}

function unmountStale() {
  roots.forEach((root, node) => {
    if (!document.contains(node)) {
      root.unmount();
      roots.delete(node);
    }
  });
}

mount();
document.addEventListener("astro:page-load", mount);
document.addEventListener("astro:before-swap", unmountStale);
