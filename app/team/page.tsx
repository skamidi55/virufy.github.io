'use client';
import { i18n, type Locale } from '@/i18n-config';
import RedirectWithSpinner from '../[lang]/components/RedirectWithSpinner';

const TeamPage = () => {
  return <RedirectWithSpinner targetUrl={`/${i18n.defaultLocale}/advisors`} />;
};
export default TeamPage;
