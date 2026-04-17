import type { MetadataRoute } from 'next';

import { indexedRoutes, siteConfig } from '@/lib/site';

const lastModified = new Date('2026-04-17T00:00:00.000Z');

export default function sitemap(): MetadataRoute.Sitemap {
  return indexedRoutes.map((route) => ({
    url: route === '/' ? siteConfig.url : `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.4,
  }));
}
