import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'


import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  title,
  heading,
  subheading,
}) => (
  	<main role="main">
      <div className="container">
        <div className="columns">

        </div>  
      </div>
    </main>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter { 
		    title
      }
    }
  }
`