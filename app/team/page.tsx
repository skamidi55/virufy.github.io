'use client';

import { useEffect } from 'react';
import { i18n, type Locale } from '@/i18n-config';

export default function TeamPage({ lang }: { lang: Locale }) {
  if (lang == null) {
    lang = i18n.defaultLocale;
  }
  useEffect(() => {
    window.location.href = `/${lang}/advisors`;
  }, [lang]);

  return null;
}
