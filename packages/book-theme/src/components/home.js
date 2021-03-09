import React from "react"
import { connect } from "frontity"

const Home = ({ state }) => {
    const data = state.source.get(state.router.link)
    const home = state.source[data.type][data.id]




    return (
        <div>
            <h2>home</h2>
            <h2>{home.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: home.content.rendered }} />
        </div>
    )
}

export default connect(Home)