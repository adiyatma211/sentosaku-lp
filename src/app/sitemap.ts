import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://sentosakutech.com';
  
  try {
    // Try to fetch projects from API
    const { fetchProjects } = await import('@/lib/api');
    const projects = await fetchProjects();
    
    const urls: MetadataRoute.Sitemap = [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
      // Add project pages dynamically
      ...projects.map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: new Date(project.updated_at || Date.now()),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      })),
    ];
    
    return urls;
  } catch (error) {
    // Fallback if API fails during build
    console.warn('Failed to fetch projects for sitemap, using fallback:', error);
    
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
    ];
  }
}
