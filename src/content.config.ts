import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: 'data',
  schema: ({ image }) => z.object({
    name: z.string(),
    description: z.string(),
    type: z.string(),
    stats: z.string().optional(),
    technologies: z.array(z.string()),
    link: z.string().url().optional(),
    featured: z.boolean().default(false),
  }),
});

const experience = defineCollection({
  type: 'data',
  schema: ({ image }) => z.object({
    company: z.string(),
    location: z.string(),
    role: z.string(),
    period: z.string(),
    achievements: z.array(z.string()),
  }),
});

export const collections = {
  blog,
  projects,
  experience,
};
