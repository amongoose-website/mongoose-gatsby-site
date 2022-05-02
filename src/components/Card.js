import React from 'react'
import { Link } from 'gatsby'

import moment from 'moment'

import Icon from './Icon'

const Card = ({ data }) => {	
    const { frontmatter } = data;
    const { slug } = data.fields;
    const { title, seriesTitle, author, tags, date } = frontmatter;

    const formattedDate = moment(date).format('MMMM Do YYYY')

	return (
        <div className="card">
            <Link style={{textDecoration: 'none', color: 'inherit'}} to={slug}>
                <div className="card-title">
                    <div className="heading">
                        <span className="heading-text">{title}</span>
                    </div>
                    <span className="subheading">{seriesTitle}</span>
                </div>
            </Link>
            <span className="date">{formattedDate} | </span>
            <span className="author">by {author}</span>
            <div className="container tags">
                {tags && tags.map((tag, index) => (
                    <div key={index} className="tagContainer">
                        <span>#{tag.replace(/"/g, '')}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Card