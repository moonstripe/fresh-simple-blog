/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface Route {
    name: string
    pathname: string
}

const routeMap: Array<Route> =
[
    {
        name: "home",
        pathname: "/"
    },
    {
        name: "about",
        pathname: "/about"
    },
]

export default (props: any) => {
    console.log(props.slug)
    return (
        <nav class={props.class}>
            {
                routeMap.map(e => <a class={props.slug === e.pathname ? tw`ml-0 mr-2 black dark:text-white` : tw`ml-0 mr-2 text-neutral`} href={e.pathname}>{e.name}</a>)
            }
        </nav>
    )
}