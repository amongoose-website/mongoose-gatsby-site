import React from 'react'

import Icon from './Icon'
import Img from "gatsby-image"
import LightBoxPDF from './PDF/LightBoxPDF'

const BookCard = ({ data }) => {	
    const { frontmatter } = data;
    const fileName = `${frontmatter.content.heading} - ${frontmatter.content.subheading}`;
    const metaData = { id: frontmatter.pdf.id, fileName }
	return (
        <div className="book-card">
            { (data.frontmatter.content.image) &&
                <Img className="book-thumbnail" fluid={data.frontmatter.content.image.childImageSharp.fluid}/>
            }
            <div className="card-info">
                <span className="heading-text">{data.frontmatter.content.heading} - {data.frontmatter.content.subheading}</span>
                <p className="description">
                    {data.frontmatter.content.description}
                </p>
            </div>
            {/* <div className="container flex-end">
                <LightBoxPDF pdf={data.frontmatter.pdf.publicURL} metaData={metaData}></LightBoxPDF>
                <button className="secondaryButton button__icon">
                    <Icon name="file_download"/>
                    Download PDF
                </button>
                <button className="secondaryButton button__icon">
                    <Icon name="print"/>
                </button>
            </div> */}
        </div>
    )
}

export default BookCard