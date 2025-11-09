// import glob loader
import { glob } from 'astro/loaders';

// import utilities from astro:content
import { z, defineCollection } from 'astro:content';

// define a loader and schema for each collection
const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/blog"}),
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
        author: z.string(),
        image: z.object({
            url: z.string(),
            alt: z.string(),
        }),
        tags: z.array(z.string()),
    }),
});

// export a single collection object to register your collection(s)
export const collections = { blog };