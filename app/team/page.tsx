'use client';

import { useEffect } from 'react';

export default function TeamPage() {
  useEffect(() => {
    window.location.href = '/en/advisors';
  }, []);

  return null;
}
