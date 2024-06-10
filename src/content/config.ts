// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const stats2collection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).optional(),
    subject: z.string(),
    subjectcode: z.string(),
    week: z.number(),
    date: z.date()
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'stats2': stats2collection,
};