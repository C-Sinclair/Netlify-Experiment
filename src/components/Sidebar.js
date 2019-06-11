import React from "react"
import Link from "gatsby"

const pages = [
    'Home',
    'Archive',
    'Contact'
]

const Sidebar = () => (
    <side>
        <h4>This is a sidebar</h4>
        <ul>
        { pages.forEach(page => {
            <li>
                <Link to="/page">{page}</Link>
            </li>
        })}
        </ul>
    </side>
)

export default Sidebar
