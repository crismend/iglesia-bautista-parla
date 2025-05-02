import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react'; // 👈 AÑADIDO

export default defineConfig({
  integrations: [
    tailwind(),
    react(), // 👈 AÑADIDO
  ],
  content: {
    collections: {
      blog: {
        schema: ({ z }) =>
          z.object({
            title: z.string(),
            description: z.string(),
            date: z.string(),
            image: z.string().optional(),
          }),
      },
    },
  },
});
