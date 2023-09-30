import { defineCollection, z } from "astro:content";

const project = defineCollection({
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      serviceType: z.string(),
      description: z.string(),
      backgroundColorClass: z.string(),
      // Transform string to Date object
      pubDate: z.string(),
      updatedDate: z
        .string()
        .optional()
        .transform((str) => (str ? new Date(str) : undefined)),
      heroImage: image(),
      otherImage: z.array(image()).optional(),
    }),
});

export const collections = { project };
