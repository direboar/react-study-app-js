import { Profile } from "./profile.js"

export default function Gallery() {
    return (
        <section>
            <Configuration />
            <Profile /> {/*  Reactのコンポーネントは大文字で始める。 https://react.dev/learn/your-first-component#what-the-browser-sees*/}
            <Profile />
            <Profile />
            <Profile />
        </section>
    );
}

function Configuration() {
    return (
        <h1>Amazing scientists!</h1>
    )
}