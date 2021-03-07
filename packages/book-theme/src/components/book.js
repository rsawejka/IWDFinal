import React from "react"
import { connect } from "frontity"

const Book = ({ state }) => {
    const data = state.source.get(state.router.link)
    const book = state.source[data.type][data.id]
    const mediaKey = book.featured_media




    return (
        <div>
            <img src={state.source.attachment[mediaKey].source_url} />
            <h2>{book.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: book.content.rendered }} />
        </div>
    )
}

export default connect(Book)