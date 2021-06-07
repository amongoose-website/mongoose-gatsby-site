import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'


import Layout from '../components/Layout'
import FullWindow from '../components/PDF/FullWindow'
import '../components/PDF/PDF.css'

export const PDFPageTemplate = ({
  title,
  body,
  pdf
}) => {
    const metaData = { id: pdf.id, fileName: title }

    return (
        <>
            <div id="root" style={{height: "100vh"}}>
                <FullWindow pdf={pdf.publicURL} metaData={metaData}></FullWindow>
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
  body: PropTypes.node.isRequired
}

const PDFPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout
      pageTitle={frontmatter.title}>
      <PDFPageTemplate
        title={frontmatter.title}
        body={data.markdownRemark.html}
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
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        pdf {
          publicURL
          id
          name
        }
      }
    }
  }
`