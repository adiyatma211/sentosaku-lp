export const GA_MEASUREMENT_ID = 'G-3TBMCBR13K';

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

export const event = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
};

export const trackProjectClick = (projectTitle: string) => {
  event('click', 'project', projectTitle);
};

export const trackWhatsAppClick = () => {
  event('click', 'contact', 'whatsapp');
};

export const trackEmailClick = () => {
  event('click', 'contact', 'email');
};
