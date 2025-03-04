import { defineContentConfig, defineCollection, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    resources: defineCollection({
      type: 'page',
      source: 'resources/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()).optional(),
        image: z.string().optional(),
        date: z.date().optional()
      })
    })
  }
});