import { MetadataRoute } from 'next';
import { fetchProjects } from '@/lib/api';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://sentosaku.com';
  
  const projects = await fetchProjects();
  
  const urls: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...projects.map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: new Date(project.updated_at || Date.now()),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ];
  
  return urls;
}
