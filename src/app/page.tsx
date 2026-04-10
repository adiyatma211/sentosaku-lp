import { fetchProjects, fetchTestimonials, fetchStats, fetchClients, fetchProcessInfo } from '@/lib/api';
import { ClientHome } from './components/ClientHome';

export const revalidate = 3600;

export default async function Home() {
  const [projects, testimonials, stats, clients, processInfo] = await Promise.all([
    fetchProjects(),
    fetchTestimonials(),
    fetchStats(),
    fetchClients(),
    fetchProcessInfo(),
  ]);

  return (
    <ClientHome 
      initialProjects={projects}
      initialTestimonials={testimonials}
      initialStats={stats}
      initialClients={clients}
      initialProcessInfo={processInfo}
    />
  );
}
