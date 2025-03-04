import { defineContentConfig, defineCollection, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    boma: defineCollection({
      type: 'page',
      source: 'boma/**/*.md', 
      schema: z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()).optional(),
        image: z.string().optional(),
        date: z.date().optional(),
      }),
    }),

    jirani: defineCollection({
      type: 'page',
      source: 'jirani/**/*.md', 
      schema: z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()).optional(),
        image: z.string().optional(),
        date: z.date().optional(),
      }),
    }),

    general: defineCollection({
      type: 'page',
      source: 'general/**/*.md', 
      schema: z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()).optional(),
        image: z.string().optional(),
        date: z.date().optional(),
      }),
    }),
  },
});