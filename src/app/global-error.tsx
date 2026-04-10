'use client';

import * as Sentry from '@sentry/nextjs';
import NextError from 'next/error';

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  // Capture the error in Sentry
  Sentry.captureException(error);

  return (
    <html lang="en">
      <body>
        <NextError statusCode={undefined} title="Something went wrong!" />
      </body>
    </html>
  );
}
