'use client';
import { i18n, type Locale } from '@/i18n-config';
import RedirectWithSpinner from '../[lang]/components/RedirectWithSpinner';

const JoinPage = () => {
  return <RedirectWithSpinner targetUrl={`/${i18n.defaultLocale}/join-us`} />;
};
export default JoinPage;
