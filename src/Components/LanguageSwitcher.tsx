"use client";

import { Globe } from "lucide-react";
import { useTranslation } from "../i18n/TranslationProvider";

const LanguageSwitcher = () => {
  const { locale, setLocale, languages, t } = useTranslation();

  return (
    <div data-no-translate className="flex items-center gap-3">
      <div className="flex items-center gap-2 text-slate-400 text-[11px] uppercase tracking-[0.28em] font-bold">
        <Globe size={16} className="text-blue-700" />
        {t("topbar_language")}
      </div>
      <select
        value={locale}
        onChange={(e) => setLocale(e.target.value as any)}
        className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm outline-none transition-all focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10"
      >
        {languages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
