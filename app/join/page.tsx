'use client';

import { useEffect } from 'react';

export default function JoinPage() {
  useEffect(() => {
    window.location.href = '/en/join-us';
  }, []);

  return null;
}
