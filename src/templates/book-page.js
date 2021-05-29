import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'


import Layout from '../components/Layout'
import PDFDocument from '../components/PDFDocument'

export const BookPageTemplate = ({
  title,
  body,
  bookPDF
}) => {
    return (
		<div className="content">
        <PDFDocument pdf={bookPDF.publicURL}/>
		</div>
    )
}

BookPageTemplate.propTypes = {
  title: PropTypes.string,
  bookPDF: PropTypes.object,
  body: PropTypes.node.isRequired
}

const BookPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout
      pageTitle={frontmatter.title}>
      <BookPageTemplate
        title={frontmatter.title}
        body={data.markdownRemark.html}
        bookPDF={frontmatter.bookPDF}
      />
    </Layout>
  )
}

BookPageTemplate.propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.object,
    }),
  }

export default BookPage

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        bookPDF {
          publicURL
        }
      }
    }
  }
`