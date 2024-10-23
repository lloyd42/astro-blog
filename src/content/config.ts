import { defineCollection, z } from "astro:content";
import { rssSchema } from "@astrojs/rss";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: rssSchema.extend({
    heroImage: z.string().optional(),
    updatedDate: z.coerce.date().optional(),
  }),
});

export const collections = { blog };
