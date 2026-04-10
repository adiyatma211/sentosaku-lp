import { fetchProjects, fetchTestimonials, fetchStats, fetchClients, fetchProcessInfo, fetchProjectBySlug } from './api';

export const fetcher = async (url: string) => {
  if (url === '/projects') return fetchProjects();
  if (url.startsWith('/projects/')) {
    const slug = url.split('/').pop();
    return fetchProjectBySlug(slug!);
  }
  if (url === '/testimonials') return fetchTestimonials();
  if (url === '/stats') return fetchStats();
  if (url === '/clients') return fetchClients();
  if (url === '/process-info') return fetchProcessInfo();
  
  throw new Error(`Unknown endpoint: ${url}`);
};

export const swrConfig = {
  revalidateOnFocus: false,
  revalidateOnReconnect: true,
  dedupingInterval: 60000,
  errorRetryCount: 3,
  errorRetryInterval: 5000,
};
