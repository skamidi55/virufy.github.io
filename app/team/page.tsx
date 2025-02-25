'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function TeamPage() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Extract language code dynamically (assuming format: /lang/team)
    const pathSegments = pathname.split('/');
    const lang = pathSegments.length > 1 ? pathSegments[1] : 'en';

    router.replace(`/${lang}/advisors`);
  }, [router, pathname]);

  return null;
}
