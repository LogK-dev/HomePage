// Single source of truth for locale list.
// Imported by both src/i18n/schema.ts and astro.config.mjs.
// Keep this file dependency-free so astro.config.mjs can import it directly.
export const locales = ["en", "ko"] as const;
export type Locale = (typeof locales)[number];
