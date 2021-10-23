import React from 'react'

import Icon from './Icon'
import LightBoxPDF from './PDF/LightBoxPDF'

const Card = ({ data }) => {	
    const { frontmatter } = data;
    const fileName = `${frontmatter.content.heading} - ${frontmatter.content.subheading}`;
    const metaData = { id: frontmatter.pdf.id, fileName }

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
            <div className="container flex-end">
                <LightBoxPDF pdf={data.frontmatter.pdf.publicURL} metaData={metaData}></LightBoxPDF>
                <button className="secondaryButton button__icon">
                    <Icon name="file_download"/>
                    Download PDF
                </button>
                <button className="secondaryButton button__icon">
                    <Icon name="print"/>
                    Print
                </button>
            </div>
        </div>
    )
}

export default Card