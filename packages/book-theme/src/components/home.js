import React from "react"
import { connect, styled } from "frontity"

const Home = ({ state, libraries }) => {
    const data = state.source.get(state.router.link)
    const home = state.source[data.type][data.id]
    const Html2React = libraries.html2react.Component



    return (
        <Homecontent>
            <Html2React html={home.content.rendered } />
        </Homecontent>
    )
}

export default connect(Home)

const Homecontent = styled.div`
    h2{
    font-size: 2em;
    margin-top: 21px;
    margin-bottom: 21px;
    }

    
  
    h3{
    font-size: 1.17em;
    margin-bottom: 15px;
    }
    img{
    margin-bottom: 20px;
    }
    p{
    margin-bottom: 8px;
    font-size: 1em;  
    }
    .reviewBlock{
    margin-top: 30px;
    background-color: #404040;
    padding-bottom: 30px;
    padding-top: 5px;
    padding-left: 20px;
    }
    .reviewBlock a{
    color: #EC625F;
    text-decoration: none;
    }
    .reviewBlock a:hover{
    color: white;
    border-bottom: 2px solid white;
    }
    .ABTheExcerpt{
    color: white;
    margin-bottom: 10px;
    }
    .ABTheAuthorLocation span{
    margin-right: 10px;
    }
    .ABTheAuthorLocation{
    color:white;
    
    }
    .reviewerLocation{
    color: #EC625F;
    }
`