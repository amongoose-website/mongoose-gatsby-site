import React from 'react'

import Icon from './Icon'
import Button from './Button'

const Card = ({ data }) => {	
	return (
        <div className="card">
            <div className="card-title">
                <div className="heading">
                    <Icon name="menu_book"/>
                    <span className="heading-text">{data.frontmatter.content.heading}</span>
                </div>
                <span className="subheading">{data.frontmatter.content.subheading}</span>
            </div>
            <p className="author">
            by {data.frontmatter.content.author}
            </p>
            <p className="description">
                {data.frontmatter.content.description}
            </p>
            <Button link={data.fields.slug} text="Read now"/>
        </div>
    )
}

export default Card