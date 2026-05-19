import { defineConfig } from "astro/config";
import { locales } from "./src/i18n/locales.ts";

const normalizeBase = (value) => {
  if (!value || value === "/") {
    return undefined;
  }

  const trimmed = value.replace(/\/+$/, "");
  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
};

export default defineConfig({
  output: "static",
  site: process.env.SITE_URL || 'https://www.logk.co.kr',
  base: normalizeBase(process.env.BASE_PATH),
  trailingSlash: "always",
  i18n: {
    locales: [...locales],
    defaultLocale: locales[0],
    routing: {
      prefixDefaultLocale: true
    }
  }
});

