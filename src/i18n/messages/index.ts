import { ko } from "@/i18n/messages/ko";
import type { Locale, SiteDictionary } from "@/i18n/schema";

// Only "ko" is active. To re-enable EN: add `import { en }` and restore the
// `en` entry, then add "en" back to src/i18n/locales.ts.
const dictionaries: Record<Locale, SiteDictionary> = { ko };

export const getDictionary = (locale: Locale) => dictionaries[locale];
