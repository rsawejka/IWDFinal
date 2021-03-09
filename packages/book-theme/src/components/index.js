import React from "react"
import { connect, styled  } from "frontity"
import Link from "@frontity/components/link"
import Switch from "@frontity/components/switch"
import Post from "./post"
import Page from "./page"
import List from "./list"
import Book from "./book"
import Home from "./home"


const Root = ({ state}) => {
    const data = state.source.get(state.router.link)

    return (
        <>
          <div>
              <nav>
                  <Link link="/">Home</Link>
                  <br />
                  <Link link="/books-martin-likes/">Books Martin
                      likes</Link>
                  <br />
                  <Link link="/books/">All Books</Link>
              </nav>


          </div>



            <main>
                <Switch>
                    <Home when={data.isHome} />
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

const nav = styled.nav`
  nav{
  background-color: black;
  }
`