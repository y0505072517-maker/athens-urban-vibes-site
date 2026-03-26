export const GA_MEASUREMENT_ID = 'G-ZM40QEERZQ';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, { page_path: url });
  }
};

type EventParams = {
  action: string;
  category: string;
  label?: string;
  value?: number;
  [key: string]: unknown;
};

export const event = ({ action, category, label, value, ...rest }: EventParams) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      ...rest,
    });
  }
};

export const trackBookingClick = (propertyName: string, source: string) => {
  event({ action: 'booking_click', category: 'Engagement', label: propertyName, property_name: propertyName, click_source: source });
};

export const trackContactClick = (method: 'whatsapp' | 'email' | 'phone', propertyName?: string) => {
  event({ action: 'contact_click', category: 'Lead', label: method, property_name: propertyName });
};

export const trackScrollDepth = (depth: number) => {
  event({ action: 'scroll_depth', category: 'Engagement', label: `${depth}%`, value: depth });
};

export const trackTimeOnPage = (seconds: number, pageName: string) => {
  event({ action: 'time_on_page', category: 'Engagement', label: pageName, value: seconds });
};
