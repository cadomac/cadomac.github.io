import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().transform((str) => new Date(str)),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  })
}); 

export const collections = {
  blog: blogCollection
}