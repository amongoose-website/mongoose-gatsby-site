import React from 'react'

import { Link } from 'gatsby'

import Icon from './Icon'
import Img from "gatsby-image"
import Button from './Button'

const BookCard = ({ data }) => {	
    // const { frontmatter } = data;
    // const fileName = `${frontmatter.content.heading} - ${frontmatter.content.subheading}`;
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
                <div className="flex-end">
                    <Button link={data.fields.slug} text="Read now"></Button>
                    <button className="secondaryButton button__icon">
                        <Icon name="file_download"/>
                        Download PDF
                    </button>
                    <button className="secondaryButton button__icon">
                        <Icon name="print"/>
                        Print PDF
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default BookCard