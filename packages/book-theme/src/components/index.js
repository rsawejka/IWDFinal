import React from "react"
import { connect } from "frontity"
import Link from "@frontity/components/link"
import Switch from "@frontity/components/switch"
import Books from "./books"
import Post from "./post"
import Page from "./page"


const Root = ({ state }) => {
    const data = state.source.get(state.router.link)

    return (
        <>
            <h1>Frontity Workshop</h1>
            <p>Current URL: {state.router.link}</p>

            <nav>
                <Link link="/">Home</Link>
                <br />
                <Link link="/page/books-martin-likes">Books Martin
                likes</Link>
                <br />
                <Link link="/page/all-books">All Books</Link>
            </nav>

            <hr />
            <main>
                <Switch>
                    <Books when={data.isArchive}>This is a list</Books>
                    <Post when={data.isPost} />
                    <Page when={data.isPage} />
                </Switch>
            </main>
        </>
    )
}


export default connect(Root)