import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'


import Layout from '../components/Layout'
import ContainerPDF from '../components/PDF/ContainerPDF'
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
            <ContainerPDF pdf={pdf.publicURL} metaData={metaData}></ContainerPDF>
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