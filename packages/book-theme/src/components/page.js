import React from "react"
import { connect, styled } from "frontity"

const Page = ({ state, libraries }) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]
    const Html2React = libraries.html2react.Component





    return (
        <Pagecontent>


            <Html2React html={page.content.rendered } />
        </Pagecontent>
    )
}

export default connect(Page)

const Pagecontent = styled.div`
h1{
margin-top: 40px;
margin-bottom: 40px;
}
.wp-block-columns{
display: flex;
padding-bottom: 30px;
padding-top: 30px;
justify-content: space-evenly;
margin-left: 200px;
}
.wp-block-columns:nth-child(2){
width: 60%
}
.wp-block-columns:nth-child(1){

width: 40%;
}

.wp-block-column p, .wp-block-column h2{
margin-left: 30px;
}
.wp-block-column h2{
margin-bottom: 15px;
}

`