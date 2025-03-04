import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    resources: defineCollection({
      type: 'page',
      source: {
        include: '**',
        exclude: ['index.md'] 
      },
      schema: z.object({
        title: z.string(),
        description: z.string(),
        category: z.string(),
        date: z.string(),
        published: z.boolean()
      })
    })
  }
})
