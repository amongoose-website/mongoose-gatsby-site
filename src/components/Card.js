import React from 'react'
import { Link } from 'gatsby';

import Icon from './Icon'

const Card = ({ data }) => {	
    const { frontmatter } = data;
    const { slug } = data.fields;
    const { title, seriesTitle, author, description } = frontmatter;

	return (
        <div className="card">
            <Link style={{textDecoration: 'none', color: 'inherit'}} to={slug}>
                <div className="card-title">
                    <div className="heading">
                        <Icon name="article"/>
                        <span className="heading-text">{title}</span>
                    </div>
                    <span className="subheading">{seriesTitle}</span>
                </div>
            </Link>
            <p className="author">
            by {author}
            </p>
            <p className="description">
                {description}
            </p>
            <div className="container flex-end">
            </div>
        </div>
    )
}

export default Card