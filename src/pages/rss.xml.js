import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";

const parser = new MarkdownIt();

export async function GET(context) {
  const posts = await getCollection("blog");

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    stylesheet: "/rss/pretty-feed-v3.xsl",
    trailingSlash: false,
    items: posts.map((post) => ({
      title: post.data.title,
      link: post.data.link,
      source: post.data.source,
      pubDate: '2024-10-23',
      modifiedDate: post.data.modifiedDate,
      content: sanitizeHtml(parser.render(post.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
      }),
      link: `/blog/${post.slug}/`,
    })),
  });
}
