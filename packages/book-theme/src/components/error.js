import React from "react"
import { connect } from "frontity"

const Error = ({ state }) => {
    return (
        <>
            <h2>404 Errorrr</h2>
            <p>
                The path <em>{state.router.link}</em> cannot be found.
            </p>
        </>
    )
}

export default connect(Error)
