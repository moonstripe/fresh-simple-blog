/** @jsx h */
import { h } from "preact";
import { Marked } from "markdown";
import { Handlers, PageProps } from "fresh/server.ts";
import NavWrappedPage from '../islands/NavWrappedPage.tsx'
import Post from '../islands/Post.tsx'
import Layout from '../components/Layout.tsx'
import { Meta } from "../utils/types/index.ts"
import Side from "../islands/BlogSidebar.tsx";

export const handler: Handlers = {

    async GET(req: any, ctx: any) {
        const url = new URL(req.url).pathname.split('/')
        const file = url[1]

        // Build Meta
        const meta: Meta = {};

        const readFile = await Deno.readTextFile(`content/${file}.md`);
        const titleString = readFile.split("\n")[0].replace(/[\W_]+/g," ").trim();
        const descString = readFile.split("\n")[4].replace(/[\W_]+/g," ").trim();

        meta.title = titleString;
        meta.description = descString;
        meta.type = "article";
        meta.image = "https://www.kojinglick.com/kojin_logo.png";
        meta.url = req.url


        // Build Content

        const decoder = new TextDecoder("utf-8");
        const markdown = decoder.decode(await Deno.readFile(`./content/${file}.md`));
        const markup = Marked.parse(markdown)

        return ctx.render({ markup: markup.content, markdown: readFile, seo: meta  })
    },
};


export default ({ data, url }: PageProps) => {
    return (
        <Layout meta={data.seo}>
            <NavWrappedPage slug={url.pathname}/>
            <Side markdown={data.markdown}/>
            <Post markup={data.markup}/>
        </Layout>
    );
}