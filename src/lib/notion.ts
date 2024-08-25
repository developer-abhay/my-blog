import "server-only";

import React from "react";
import { Client } from "@notionhq/client";
import {
  BlockObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_PAGE_ID;

// Get All Blogs
export const getAllBlogs = async () => {
  const response = await notion.databases.query({
    database_id: databaseId!,
    filter: {
      property: "Status",
      status: {
        equals: "Posted",
      },
    },
  });

  return response.results;
};

// Get Blog by slug
export const getBlogBySlug = React.cache(async (slug: string) => {
  const response = await notion.databases.query({
    database_id: databaseId || "",
    filter: {
      property: "Slug",
      rich_text: {
        equals: slug,
      },
    },
  });

  return response.results[0] as PageObjectResponse | undefined;
});

// Get Blog Data
export async function fetchContent(blogId: string) {
  const blockResponse = await notion.blocks.children.list({
    block_id: blogId,
  });

  return blockResponse.results as BlockObjectResponse[];
}
