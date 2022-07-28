/** @jsx h */
import { IS_BROWSER } from "https://deno.land/x/fresh@1.0.1/runtime.ts";
import { h } from "preact";

export default (props: any) => {

    const { setter } = props;

    const handleDark = () => {
        if (IS_BROWSER){
            if (localStorage.getItem('theme') !== 'dark') {
                localStorage.setItem('theme', 'dark');
                setter('dark');
            } else {
                localStorage.setItem('theme', 'light');
                setter('light');
            }
        }
    }

    return (
        <a onClick={handleDark}>
            <img
                src={localStorage.theme === 'dark' ? "/kojin_logo_invert.svg" : "/kojin_logo.svg"}
                width="10%"
                alt="A moon"
            />
        </a>
    )
}