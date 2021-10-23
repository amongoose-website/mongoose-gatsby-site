import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import FullWindowPDF from '../components/PDF/FullWindowPDF'
import '../components/PDF/PDF.css'

export const IndexPageTemplate = ({
  title,
  pdf,
  content
}) => {
    const metaData = { id: pdf.id, fileName: title }

    return (
        <>
            <div id="root">
                <div className="pageHeading pageHeading__index">
                  <span className="preheading">{content.preheading}</span>
                  <span className="heading">{content.heading}</span>
                  <span className="subheading">{content.subheading}</span>
                </div>
                <FullWindowPDF pdf={pdf.publicURL} metaData={metaData}></FullWindowPDF>
            </div>
            <script 
                type="text/javascript" 
                src="https://documentcloud.adobe.com/view-sdk/main.js"/>
        </>
    )
}

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  pdf: PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout
      pageTitle={frontmatter.title}>
      <IndexPageTemplate
        content={frontmatter.content}
        title={frontmatter.title}
        // body={data.markdownRemark.html}
        pdf={frontmatter.pdf}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.object,
    }),
  }

export default IndexPage

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
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