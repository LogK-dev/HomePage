import { locales, type Locale } from "@/i18n/locales";
import type { SiteDictionary } from "@/i18n/schema";

export const defaultLocale: Locale = "ko";

export const isLocale = (value: string): value is Locale => {
  return locales.includes(value as Locale);
};

/** Resolve the canonical "contact / book demo" destination from the dictionary,
 *  reading it off the contact entry of the main nav so that the href lives in
 *  one place (the nav items) and every call site stays in sync. */
export const getContactHref = (dictionary: SiteDictionary): string => {
  return dictionary.nav.items.find((item) => item.key === "contact")?.href ?? "#";
};

export const localizedPath = (locale: Locale, pathname = "") => {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, "");
  const normalizedPath = pathname.replace(/^\/+|\/+$/g, "");
  const suffix = normalizedPath ? `/${normalizedPath}/` : "/";
  return `${base}/${locale}${suffix}`.replace(/\/{2,}/g, "/");
};

export const getLanguageOptions = (currentLocale: Locale, pathname = "") => {
  return locales.map((locale) => ({
    label: locale.toUpperCase(),
    href: localizedPath(locale, pathname),
    active: locale === currentLocale
  }));
};
