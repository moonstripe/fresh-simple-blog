/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { SideProps } from "../utils/types/index.ts"

export default function Side({ markdown }: SideProps) {
    // const ref = useRef<HTMLDivElement>(null)

    const titles = markdown.split('\n').filter(l => l.slice(0, 2) === "##")



    // style={{overflow: 'hidden', display: '-webkit-box', '-webkit-box-orient': 'vertical', '-webkit-line-clamp': '1'}} 

    return (
        <nav class={tw`mb-4 fixed xl:left-24 2xl:left-96 top-1/4 text-base xl:visible invisible dark:text-green-600`} style={{ maxWidth: "20ch" }}>
            <ul>
                {
                    titles.map((e, i) =>
                        e.slice(0, 3) === "###" ? (
                            <li class={tw`ml-2 text-sm text-gray-500 dark:text-green-600 hover:text-black dark:hover:text-green-400`}>
                                <a href={`#${e.slice(3, e.length).trim().replaceAll(' ', '-').replaceAll("'", '-').toLowerCase()}`}>
                                    <p class={tw``}>
                                        {e.replace(/[^\w'-]/g, " ").trim()}
                                    </p>
                                </a>
                            </li>
                        ) : (
                            <li class={tw`text-gray-500 dark:text-green-600 hover:text-black dark:hover:text-green-400`}>
                                {i != 0 ? <br /> : null}
                                <a href={`#${e.slice(2, e.length).trim().replaceAll(' ', '-').replaceAll("'", '-').toLowerCase()}`}>
                                    <p class={tw``}>
                                        {e.replace(/[^\w'-]/g, " ").trim()}
                                    </p>
                                </a>
                            </li>
                        )
                    )
                }
            </ul>
        </nav>
    )
}