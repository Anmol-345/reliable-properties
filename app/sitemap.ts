import { MetadataRoute } from 'next';
import { localities, commercialCategories, residentialBhkOptions, projects } from './lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://reliableproperty.in';

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/listings`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/team`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.8 },
  ];

  // Dynamic Flats Routes (e.g. flats/2-bhk/kundli)
  const flatsRoutes: MetadataRoute.Sitemap = [];
  residentialBhkOptions.forEach(bhk => {
    localities.forEach(loc => {
      flatsRoutes.push({
        url: `${baseUrl}/property/flats/${bhk}/${loc.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    });
  });

  // Dynamic Commercial Routes (e.g. commercial/shops/kundli)
  const commercialRoutes: MetadataRoute.Sitemap = [];
  commercialCategories.forEach(category => {
    localities.forEach(loc => {
      commercialRoutes.push({
        url: `${baseUrl}/property/commercial/${category}/${loc.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    });
  });

  // Dynamic Plots Routes (e.g. plots/kundli)
  const plotRoutes: MetadataRoute.Sitemap = localities.map(loc => ({
    url: `${baseUrl}/property/plots/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Dynamic Project Routes (e.g. tdi-infrastructure/tdi-city)
  const projectRoutes: MetadataRoute.Sitemap = projects.map(proj => ({
    url: `${baseUrl}/projects/${proj.builderSlug}/${proj.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  return [...staticRoutes, ...flatsRoutes, ...commercialRoutes, ...plotRoutes, ...projectRoutes];
}
