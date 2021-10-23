import React from 'react';

import { Link } from 'gatsby';

const Button = ({link, text}) => (
    <button className="primaryButton">
        <Link to={link}>{text}</Link>
    </button>
)

export default Button