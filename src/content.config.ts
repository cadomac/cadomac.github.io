import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const blog = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.string().transform((str) => new Date(str)).optional(),
        image: z.string().optional(),
        tags: z.array(z.string()).optional(),
    }),
});

const resume = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/resume" }),
    schema: z.object({})
});

export const collections = {
    blog,
    resume,
};