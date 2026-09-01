import { projects, services, site } from '@/data/site';

export default function sitemap() {
  const staticPages = ['', '/services', '/work', '/about', '/contact', '/privacy'];
  return [
    ...staticPages.map((path) => ({
      url: `${site.url}${path}`,
      lastModified: new Date(),
      changeFrequency: path === '' ? 'weekly' : 'monthly',
      priority: path === '' ? 1 : 0.8
    })),
    ...services.map((service) => ({
      url: `${site.url}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9
    })),
    ...projects.map((project) => ({
      url: `${site.url}/work/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: project.featured ? 0.8 : 0.7
    }))
  ];
}
