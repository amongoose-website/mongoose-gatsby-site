import React from 'react';

import { Link } from 'gatsby';

const Button = ({link, text, href, download}) => (
    <button className="primaryButton">
        { link && <Link to={link}>
            {text}
        </Link> }
        {
            href && <a href={href} download={download}>
                {text}
            </a>
        }
    </button>
)

export default Button