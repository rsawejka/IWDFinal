import React from "react"
import { connect, styled, Global, css, Head } from "frontity"
import Link from "@frontity/components/link"
import Switch from "@frontity/components/switch"
import Post from "./post"
import Page from "./page"
import List from "./list"
import Book from "./book"
import Home from "./home"
import Loading from "./loading"
import Error from "./error"
import Footer from "./footer"


const Root = ({ state}) => {
    const data = state.source.get(state.router.link)

    return (
        <>
            <Head>
                <title>Frontity Book Theme</title>
                <meta
                    name="description"
                    content="Based on the Frontity step by step tutorial"
                />
            </Head>
            <Global
                styles={css`
              
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
          html {
            font-family: system-ui, Verdana, Arial, sans-serif;
            line-height: 1.5;
          }
          .wrapper{
          margin: 0 auto;
          width: 60%;
          }
        `}
            />
          <Flex>

              <Nav>
                  <Link link="/">Home</Link>
                  <br />
                  <Link link="/books-martin-likes/">Books Martin likes</Link>
                  <br />
                  <Link link="/books/">All Books</Link>

              </Nav>
              <Redbar></Redbar>



          </Flex>


<div className="wrapper">


            <main>
                <Switch>
                    <Home when={data.isHome} />
                    <Loading when={data.isFetching} />
                    <List when={data.isBooksArchive} />
                    <Post when={data.isPost} />
                    <Page when={data.isPage} />
                    <Book when={data.isBooks} />
                    <Error when={data.isError} />
                </Switch>
            </main>
</div>
            <Footer />
        </>
    )
}


export default connect(Root)
const Flex = styled.div`
display: flex;
`
const Nav = styled.nav`
    padding-left: 40px;
    background-color: #404040;
    display: flex;
    width: 60%;
    
    a{
    color: #EC625F;
    text-decoration: none;
    margin: 15px;
    font-size: 1.4em;
    }
    a:hover{
    color: white;
    }
    div{
    background-color: #EC625F; 
    }
`

const Redbar = styled.div`
background-color: #EC625F;
width: 40%;
`