import React from "react"
import {Link, Switch, Route} from "react-router-dom"
import {BrowserRouter} from "react-router-dom"
import About from "./About"


function Navbar() {
    return (
        <div>
        <div className="navbar">
            <BrowserRouter>
                 <Link to="./About">About</Link>
                     <Switch>
                <Route exact path="/about">
                    <About />
                </Route>
                    </Switch>
            </BrowserRouter>
        </div>

    <div className="header">
        <h1>Kara's Book Reviews</h1>
        </div>

        </div>
    )
}
export default Navbar

