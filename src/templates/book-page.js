import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'


import Layout from '../components/Layout'

export const BookPageTemplate = ({
  title,
  body,
  bookPDF
}) => {
    return (
		<>
			<img src={bookPDF}/>
		</>
    )
}

BookPageTemplate.propTypes = {
  title: PropTypes.string,
  bookPDF: PropTypes.object,
  body: PropTypes.node.isRequired
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
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

export default IndexPage

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        bookPDF {
          childImageSharp {
			  fluid {
				  src
			  }
		  }
        }
      }
    }
  }
`