'use client';

import { useEffect } from 'react';
import * as Sentry from '@sentry/nextjs';
import { initSentry } from '@/lib/sentry';

export function SentryInit() {
  useEffect(() => {
    initSentry();
  }, []);

  return null;
}
