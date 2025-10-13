"use client"

import { useParams, usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';
import { locales, localeNames, type Locale } from '@/i18n/config';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function LanguageSwitcher() {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = params.locale as Locale;

  const handleLocaleChange = (newLocale: string) => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-muted-foreground flex-shrink-0" />
      <Select value={currentLocale} onValueChange={handleLocaleChange}>
        <SelectTrigger className="w-[80px] h-9 text-sm border-border/50 bg-background/50">
          <SelectValue>
            {currentLocale.toUpperCase()}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {locales.map((locale) => (
            <SelectItem key={locale} value={locale} className="text-sm">
              {locale.toUpperCase()}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export function LanguageSwitcherMobile() {
  const params = useParams();
  const currentLocale = params.locale as Locale;

  return (
    <div className="flex flex-col gap-2 p-4 rounded-lg bg-muted/30 border border-border/50">
      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-2">
        <Globe className="w-4 h-4" />
        <span>Language / Langue / Idioma / Язык</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {locales.map((locale) => (
          <Link
            key={locale}
            href={`/${locale}`}
            className={cn(
              "relative px-4 py-3 rounded-lg text-center font-medium transition-all duration-200",
              currentLocale === locale
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-background text-foreground hover:bg-accent"
            )}
          >
            <div className="text-xs opacity-70 mb-1">{locale.toUpperCase()}</div>
            <div className="text-sm">{localeNames[locale]}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

