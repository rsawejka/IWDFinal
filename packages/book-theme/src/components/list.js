import React from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"

const List = ({ state }) => {
    const data = state.source.get(state.router.link)


    return (
        <AllBooks className="allBooks">
            {data.items.map((item) => {
                const post = state.source[item.type][item.id]
                const mediaKey = post.featured_media
                return (
                    <BookTile  key={item.id}>
                        <Link className="book" key={item.id} link={post.link}>
                            <div><img src={state.source.attachment[mediaKey].source_url} /></div>
                            <div className="title">{post.title.rendered}</div>
                        </Link>
                    </BookTile>
                )
            })}
        </AllBooks>
    )
}

export default connect(List)

const AllBooks = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
flex-wrap: wrap;
margin-top: 20px;

`
const BookTile = styled.div`
margin: 20px;

a .title{
color: black;
text-decoration: none;
text-align: center;
}
a{
    text-decoration: none;
}
`
