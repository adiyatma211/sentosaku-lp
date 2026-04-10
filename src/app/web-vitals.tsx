'use client';

import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log metrics to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Web Vitals]`, metric);
    }
    
    // In production, send to analytics (GA4, Plausible, etc.)
    if (process.env.NODE_ENV === 'production') {
      // Example: Send to Google Analytics 4
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', metric.name, {
          value: Math.round(
            metric.name === 'CLS' ? metric.value * 1000 : metric.value
          ),
          event_label: metric.id,
          non_interaction: true,
        });
      }
      
      // Example: Send to Plausible
      // if (typeof window !== 'undefined' && (window as any).plausible) {
      //   (window as any).plausible('web-vitals', {
      //     props: {
      //       name: metric.name,
      //       value: metric.value,
      //       id: metric.id,
      //     },
      //   });
      // }
    }
  });
  
  return null;
}
