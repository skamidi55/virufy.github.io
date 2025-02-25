'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function JoinPage() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Extract language code dynamically (assuming format: /lang/join)
    const pathSegments = pathname.split('/');
    const lang = pathSegments.length > 1 ? pathSegments[1] : 'en';

    router.replace(`/${lang}/join-us`);
  }, [router, pathname]);

  return null;
}
