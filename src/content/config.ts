import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    image: z.string().optional(),
    description: z.string(),
  }),
});

export const collections = {
  blog,
};
