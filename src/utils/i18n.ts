import { locales, type Locale } from "@/i18n/locales";

export const defaultLocale: Locale = "ko";

export const isLocale = (value: string): value is Locale => {
  return locales.includes(value as Locale);
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
