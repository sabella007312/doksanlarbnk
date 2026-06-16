// import React, {
//   createContext,
//   useContext,
//   useEffect,
//   useMemo,
//   useState,
// } from "react";
// import { translations } from "./translations";

// type LanguageCode = string;

// interface TranslationContextType {
//   locale: LanguageCode;
//   setLocale: (locale: LanguageCode) => void;
//   t: (key: string) => string;
//   languages: { code: string; label: string }[];
// }

// const TranslationContext = createContext<TranslationContextType>({
//   locale: "en",
//   setLocale: () => undefined,
//   t: (key) => key,
//   languages: [],
// });

// const STORAGE_KEY = "doksanlarb_locale";

// const getSupportedLanguageCodes = (): string[] => {
//   if (
//     typeof Intl !== "undefined" &&
//     typeof (Intl as any).supportedValuesOf === "function"
//   ) {
//     try {
//       return Array.from(
//         new Set((Intl as any).supportedValuesOf("language") as string[]),
//       );
//     } catch (error) {
//       console.warn("Intl.supportedValuesOf('language') is unavailable:", error);
//     }
//   }

//   return [
//     "en",
//     "tr",
//     "es",
//     "fr",
//     "de",
//     "ru",
//     "ar",
//     "zh",
//     "ja",
//     "pt",
//     "hi",
//     "ko",
//     "it",
//     "nl",
//   ];
// };

// const getLanguageLabel = (code: string) => {
//   try {
//     if (typeof Intl === "undefined") return code;
//     const displayNames = new Intl.DisplayNames(
//       [typeof navigator !== "undefined" ? navigator.language : "en"],
//       {
//         type: "language",
//       },
//     );
//     return displayNames.of(code) ?? code;
//   } catch {
//     return code;
//   }
// };

// const buildLanguageList = () =>
//   getSupportedLanguageCodes()
//     .map((code) => ({ code, label: getLanguageLabel(code) }))
//     .filter((entry) => entry.label)
//     .sort((a, b) => a.label.localeCompare(b.label));

// export const TranslationProvider = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => {
//   const [locale, setLocaleState] = useState<LanguageCode>("en");
//   const [languages, setLanguages] = useState(() => buildLanguageList());

//   useEffect(() => {
//     const stored =
//       typeof localStorage !== "undefined"
//         ? (localStorage.getItem(STORAGE_KEY) as LanguageCode | null)
//         : null;
//     if (stored) {
//       setLocaleState(stored);
//     }

//     if (typeof navigator !== "undefined") {
//       setLanguages(buildLanguageList());
//     }
//   }, []);

//   const setLocale = (nextLocale: LanguageCode) => {
//     setLocaleState(nextLocale);
//     if (typeof localStorage !== "undefined") {
//       localStorage.setItem(STORAGE_KEY, nextLocale);
//     }
//   };

//   const t = (key: string) => {
//     const localeTranslations =
//       translations[locale as keyof typeof translations];
//     return localeTranslations?.[key] ?? translations.en?.[key] ?? key;
//   };

//   const value = useMemo(
//     () => ({ locale, setLocale, t, languages }),
//     [locale, languages],
//   );

//   return (
//     <TranslationContext.Provider value={value}>
//       {children}
//     </TranslationContext.Provider>
//   );
// };

// export const useTranslation = () => useContext(TranslationContext);

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { translations } from "./translations";

type LanguageCode = string;

interface TranslationContextType {
  locale: LanguageCode;
  setLocale: (locale: LanguageCode) => void;
  t: (key: string) => string;
  languages: { code: string; label: string }[];
}

const TranslationContext = createContext<TranslationContextType>({
  locale: "en",
  setLocale: () => undefined,
  t: (key) => key,
  languages: [],
});

const STORAGE_KEY = "doksanlarb_locale";

// Returns an extensive array of all valid global ISO 639-1 language codes
const getSupportedLanguageCodes = (): string[] => {
  if (
    typeof Intl !== "undefined" &&
    typeof (Intl as any).supportedValuesOf === "function"
  ) {
    try {
      return Array.from(
        new Set((Intl as any).supportedValuesOf("language") as string[]),
      );
    } catch (error) {
      console.warn("Intl.supportedValuesOf('language') is unavailable:", error);
    }
  }

  // Fallback structural safety list if Intl runtime validation drops
  return [
    "en",
    "tr",
    "es",
    "fr",
    "de",
    "ru",
    "ar",
    "zh",
    "ja",
    "pt",
    "hi",
    "ko",
    "it",
    "nl",
    "af",
    "am",
    "az",
    "be",
    "bg",
    "bn",
    "bs",
    "ca",
    "cs",
    "da",
    "el",
    "et",
    "fa",
    "fi",
    "fil",
    "ga",
    "he",
    "hr",
    "hu",
    "hy",
    "id",
    "is",
    "ka",
    "kk",
    "km",
    "lo",
    "lt",
    "lv",
    "mk",
    "mn",
    "ms",
    "nb",
    "ne",
    "pl",
    "ro",
    "si",
    "sk",
    "sl",
    "sq",
    "sr",
    "sv",
    "sw",
    "ta",
    "te",
    "th",
    "uk",
    "ur",
    "uz",
    "vi",
    "zu",
  ];
};

// CRITICAL FIX: Forces the display name to generate in its native script
// (e.g., code 'tr' always returns 'Türkçe' instead of translating to English 'Turkish')
const getLanguageLabel = (code: string) => {
  try {
    if (typeof Intl === "undefined") return code;

    const displayNames = new Intl.DisplayNames([code], {
      type: "language",
    });

    const nativeName = displayNames.of(code);
    if (!nativeName) return code;

    // Capitalize the first letter of the native label smoothly
    return nativeName.charAt(0).toUpperCase() + nativeName.slice(1);
  } catch {
    return code;
  }
};

const buildLanguageList = () =>
  getSupportedLanguageCodes()
    .map((code) => ({ code, label: getLanguageLabel(code) }))
    .filter((entry) => entry.label && entry.label !== entry.code) // Drops incomplete machine codes
    .sort((a, b) => a.label.localeCompare(b.label));

export const TranslationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [locale, setLocaleState] = useState<LanguageCode>("en");
  const [languages, setLanguages] = useState(() => buildLanguageList());

  useEffect(() => {
    const stored =
      typeof localStorage !== "undefined"
        ? (localStorage.getItem(STORAGE_KEY) as LanguageCode | null)
        : null;
    if (stored) {
      setLocaleState(stored);
      updateDocumentDirection(stored);
    } else if (typeof navigator !== "undefined") {
      // Auto-detect browser preferred language safely
      const browserLang = navigator.language.split("-")[0];
      const validCodes = getSupportedLanguageCodes();
      if (validCodes.includes(browserLang)) {
        setLocaleState(browserLang);
        updateDocumentDirection(browserLang);
      }
    }

    if (typeof navigator !== "undefined") {
      setLanguages(buildLanguageList());
    }
  }, []);

  const updateDocumentDirection = (currentLocale: string) => {
    if (typeof document === "undefined") return;
    const rtlLanguages = ["ar", "he", "fa", "ur"];
    document.body.dir = rtlLanguages.includes(currentLocale) ? "rtl" : "ltr";
  };

  const setLocale = (nextLocale: LanguageCode) => {
    setLocaleState(nextLocale);
    updateDocumentDirection(nextLocale);
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(STORAGE_KEY, nextLocale);
    }
  };

  const t = (key: string) => {
    const localeTranslations =
      translations[locale as keyof typeof translations];

    // Looks for translated string, then falls back to English dictionary, then outputs raw key
    return (
      (localeTranslations as any)?.[key] ??
      (translations.en as any)?.[key] ??
      key
    );
  };

  const value = useMemo(
    () => ({ locale, setLocale, t, languages }),
    [locale, languages],
  );

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);
