import React from "react"
import { connect, styled, Head  } from "frontity"

const Book = ({ state, libraries }) => {
    const data = state.source.get(state.router.link)
    const book = state.source[data.type][data.id]
    const mediaKey = book.featured_media

    const Html2React = libraries.html2react.Component




    return (
        <div>



        <Head>
            <title>{book.title.rendered}</title>

        </Head>
        <Bookinfo>
            <div className="left">
                <img src={state.source.attachment[mediaKey].source_url} />
            </div>
            <div className="right">
                <h2>{book.title.rendered}</h2>
                <Html2React html={book.content.rendered} />
            </div>

        </Bookinfo>
        </div>
    )
}

export default connect(Book)

const Bookinfo = styled.div`
display: flex;

.left{
margin-top: 70px;
margin-right: 70px;
}
.right{
margin-top: 70px;
width: 60%;
}
.right h2{
margin-bottom: 20px;
}
.right p{
margin-bottom: 10px;
}
.right table{
margin-top: 30px;
margin-bottom: 30px;
width:100%;
}
.right table tbody tr:nth-child(1){
background-color: #EC625F;
color: white;

}
.right table tbody tr td{
border-radius: 10px 10px 0px 0px;
padding: 10px;
border-bottom: 2px solid black;

}
.reviewBox{
background-color: #313131;
padding: 20px;
color: white;
}
.reviewBox h3{
margin-bottom: 10px;
}
`