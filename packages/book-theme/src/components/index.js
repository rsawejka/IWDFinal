import React from "react"
import { connect } from "frontity"
import Link from "@frontity/components/link"
import Switch from "@frontity/components/switch"
import Post from "./post"
import Page from "./page"
import List from "./list"
import Book from "./book"


const Root = ({ state }) => {
    const data = state.source.get(state.router.link)

    return (
        <>
            <h1>Frontity Workshop</h1>
            <p>Current URL: {state.router.link}</p>

            <nav>
                <Link link="/">Home /need wordpress home page here/</Link>
                <br />
                <Link link="/books-martin-likes/">Books Martin
                likes</Link>
                <br />
                <Link link="/books/">All Books</Link>
            </nav>

            <hr />
            <main>
                <Switch>
                    <List when={data.isBooksArchive} />
                    <Post when={data.isPost} />
                    <Page when={data.isPage} />
                    <Book when={data.isBooks} />
                </Switch>
            </main>
        </>
    )
}


export default connect(Root)