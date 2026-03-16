import { MetadataRoute } from 'next'

const BASE_URL = 'https://unicca-moda.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date('2026-03-16'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/tallas-38-60`,
      lastModified: new Date('2026-03-16'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/asesoria`,
      lastModified: new Date('2026-03-16'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contacto`,
      lastModified: new Date('2026-01-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/galeria`,
      lastModified: new Date('2026-03-16'),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/opiniones`,
      lastModified: new Date('2026-03-16'),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/aviso-legal`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/politica-privacidad`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/politica-cookies`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ]
}
