import { defineCollection, z } from 'astro:content';

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
  projects,
  experience,
};
