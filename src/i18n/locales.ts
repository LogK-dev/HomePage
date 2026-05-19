// Single source of truth for supported locales.
// Imported by astro.config.mjs, schema.ts, and utils/i18n.ts.
export const locales = ["ko"] as const;
export type Locale = (typeof locales)[number];
