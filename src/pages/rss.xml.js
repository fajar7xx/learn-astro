import rss, {pagesGlobToRssItems} from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context){
    const posts = await getCollection("blog");
    return rss({
        title: "My Astro Blog",
        description: "My Astro Blog",
        site: context.site,
        items: posts.map((post) => ({
            title: post.data.title,
            link: `${context.site.url}/posts/${post.id}`,
            pubDate: post.data.pubDate,
            description: post.data.description,
            author: post.data.author,
            categories: post.data.tags,
        })),
    customData: "<language>en-us</language>",
  });
}