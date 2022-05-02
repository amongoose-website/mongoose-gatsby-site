import React from 'react'

import { Link } from 'gatsby'

import Icon from './Icon'
import Img from "gatsby-image"
import Button from './Button'

const BookCard = ({ data }) => {	
    const { frontmatter } = data;
    // const fileName = `${frontmatter.content.heading} - ${frontmatter.content.subheading}`;
	console.log(data.frontmatter.content.image)
    return (
        <div className="book-card card">
            <div className="col">
                <Link style={{textDecoration: 'none', color: 'inherit'}} to={data.fields.slug}>
                    <div className="card-title">
                        <div className="heading">
                            <span className="heading-text">{frontmatter.content.heading} - {frontmatter.content.subheading}</span>
                        </div>
                    </div>
                </Link>
                <span className="date">{frontmatter.content.description}</span>
            </div>
        </div>
    )
    
    return (
        <div className="book-card">
            { (data.frontmatter.content.image) &&
                <Link to={data.fields.slug}>
                    <Img className="book-thumbnail" fluid={data.frontmatter.content.image.childImageSharp.fluid}/>
                </Link>
            }
            <div className="card-info">
                <span className="heading-text">{data.frontmatter.content.heading} - {data.frontmatter.content.subheading}</span>
                <p className="description">
                    {data.frontmatter.content.description}
                </p>
            </div>
            
        </div>
    )
}

export default BookCard