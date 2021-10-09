import React from 'react';

import { Link } from 'gatsby';

const Button = ({link, text}) => (
    <Link to={link}>
        <button className="primaryButton">{text}</button>
    </Link>
)

export default Button