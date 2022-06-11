import { Link } from 'gatsby'
import React from 'react'

function ScrollButton({ to }) {
    return (
        <button className="scrollButton">
            <a href={to}>
                <i class="fa-solid fa-chevron-down"></i>
            </a>
        </button>
    )
}

export default ScrollButton