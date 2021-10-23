import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'


import Layout from '../components/Layout'
import FullWindowPDF from '../components/PDF/FullWindowPDF'
import Button from '../components/Button'
import Icon from '../components/Icon'
import '../components/PDF/PDF.css'

export const PDFPageTemplate = ({
  content,
  pdf
}) => {
    const metaData = { id: pdf.id, fileName: pdf.name.split('-').join(' ') }
    return (
      <>
        <div id="root">
            <div className="pageHeading">
              <span className="heading">{content.heading}</span>
              <span className="subheading">{content.subheading}</span>
            </div>
            <div style={{'paddingBottom': 1 + 'rem'}}>
              <Button href={pdf.publicURL} download={metaData.fileName + '.pdf'} text="Download PDF"/>
            </div>
            <FullWindowPDF pdf={pdf.publicURL} metaData={metaData}></FullWindowPDF>
        </div>
        <script 
            type="text/javascript" 
            src="https://documentcloud.adobe.com/view-sdk/main.js"/>
        </>
    )
}

PDFPageTemplate.propTypes = {
  title: PropTypes.string,
  pdf: PropTypes.object,
}

const PDFPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const { content } = frontmatter
  return (
    <Layout
      pageTitle={content.heading}>
      <PDFPageTemplate
        content={content}
        // body={data.markdownRemark.html}
        pdf={frontmatter.pdf}
      />
    </Layout>
  )
}

PDFPageTemplate.propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.object,
    }),
  }

export default PDFPage

export const pageQuery = graphql`
  query PDFPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        content {
          preheading
          heading
          subheading
        }
        pdf {
          publicURL
          id
          name
        }
      }
    }
  }
`