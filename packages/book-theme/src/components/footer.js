import React from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"


const Footer = ({ }) => {
    return (
        <Footernav>
            <nav>
                <Link link="/">Home</Link>
                <br />
                <Link link="/books-martin-likes/">Books Martin likes</Link>
                <br />
                <Link link="/books/">All Books</Link>

            </nav>
            <div id="copy">&copy; Ryan Sawejka</div>
        </Footernav>
    )
}

export default connect(Footer)

const Footernav = styled.div`
margin-top: 50px;
    background-color: #525252;
    
    nav{
    display: flex;
    padding: 30px;
    }
    nav a{
    text-decoration: none;
    color: #EC625F;
    margin-right: 40px;
    font-size: 1.5em;
    }
    nav a:hover{
    color: white;
    }
    #copy{
    color: white;
    text-align: center;
    padding-bottom: 20px;
    }
`