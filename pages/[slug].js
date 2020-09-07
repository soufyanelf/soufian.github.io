import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import marked from "marked";
import useSWR from 'swr';

const Post = ({ htmlString, data }) => {

  return <div>
    <Head>
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
    </Head>
    <div>contents below</div>
    <div dangerouslySetInnerHTML={{ __html: htmlString }} />
  </div>
}

export const getStaticPaths = async () => {

  const files = fs.readdirSync("posts")
  const paths = files.map(filename => ({
    params: {
      slug: filename.replace(".md", "")
    }
  }))

  console.log("files :", files);
  console.log("paths :", paths);

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params: { slug } }) => {

  const markdownWithMetadata = fs.readFileSync(path.join('posts', slug + '.md')).toString();
  const parsedMarkdown = matter(markdownWithMetadata);
  const htmlString = marked(parsedMarkdown.content)

  return {
    props: {
      htmlString,
      data: parsedMarkdown.data
    }
  }
}

export default Post;