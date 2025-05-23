import type {Route} from "./+types/home";
import {Welcome} from "~/welcome/welcome";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Sekai Beyond"},
        {name: "description", content: "Where Anime Dreams Find Their Home!"},
    ];
}

export default function Home() {
    return <Welcome/>;
}
