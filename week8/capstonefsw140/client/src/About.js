import React from "react"
import books from "./imgs/books.jpeg"

function About() {
    return (
        <div>
            <h1>Book Reviews Since 1990</h1>
            <img src={books} alt={"Books"}></img>
        </div>
    )
}
export default About