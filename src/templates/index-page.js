import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'


import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  title,
  heading,
  subheading,
}) => (
  	<main
    	role="main" 
    	className="container">
      	<div>
			<h1>{heading}</h1>
      		<h3>{subheading}</h3>
			<hr/>

			<h2>Books</h2>
			<ul>
				<li>Book 1</li>
				<li>Book 2</li>
				<li>Book 3</li>
			</ul>
			
			<h2>Charts</h2>
			<ul>
				<li>Chart 1</li>
				<li>Chart 2</li>
			</ul>
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
        heading
        subheading
      }
    }
  }
`