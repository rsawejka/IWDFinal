import React from "react"
import { connect } from "frontity"
import Link from "@frontity/components/link"

const List = ({ state }) => {
    const data = state.source.get(state.router.link)


    return (
        <div>
            {data.items.map((item) => {
                const post = state.source[item.type][item.id]
                const mediaKey = post.featured_media





                return (
                        <Link  key={item.id} link={post.link}>
                            {post.title.rendered}

                            <img src={state.source.attachment[mediaKey].source_url} />




                        </Link>





                )
            })}
        </div>
    )
}

export default connect(List)