import * as Sentry from '@sentry/nextjs';

export async function register() {
  if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
    Sentry.init({
      dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
      environment: process.env.NODE_ENV || 'development',
      tracesSampleRate: 0.1,
      beforeSend(event, hint) {
        if (event.exception?.values?.[0]?.value?.includes('ResizeObserver')) {
          return null;
        }
        return event;
      },
    });
  }
}
