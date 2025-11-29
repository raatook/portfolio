// app/components/LanguageSwitcher.tsx
"use client";

import { useChangeLocale, useCurrentLocale } from "@/app/locales/client";

export default function LanguageSwitcher() {
  const changeLocale = useChangeLocale();
  const currentLocale = useCurrentLocale();

  return (
    <div className="flex items-center gap-1"> {/* réduire l'espace entre les drapeaux */}
      <button
        onClick={() => changeLocale("fr")}
        className={`w-14 h-14 text-3xl max-[720px]:w-8 max-[720px]:h-8 max-[720px]:text-xl rounded-full p-0.5 transition-all ${
          currentLocale === "fr" ? "ring-2 ring-indigo-500" : ""
        }`}
      >
        🇫🇷
      </button>
      <button
        onClick={() => changeLocale("en")}
        className={`w-14 h-14 text-3xl max-[720px]:w-8 max-[720px]:h-8 max-[720px]:text-xl rounded-full p-0.5 transition-all ${
          currentLocale === "en" ? "ring-2 ring-indigo-500" : ""
        }`}
      >
        🇬🇧
      </button>
    </div>
  );
}
