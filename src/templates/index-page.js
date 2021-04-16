import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Img from 'gatsby-image'

import Layout from '../components/Layout'

export const IndexPageTemplate = ({
    image,
    title,
  	heading,
  	subheading,
	cta
}) => (
  	<main
    	role="main" 
    	className="container row"
	>
      	<div
		  className="col-sm"
		>
			<h2>{heading}</h2>
      		<h3>{subheading}</h3>
			<Link to="/slug">
				<button className="front-cta">{cta}</button>
			</Link>
		</div>
		<div
		  className="col-sm"
		>
			<Img fixed={image.childImageSharp.fixed} alt="Blaze"/>
		</div>
  </main>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  cta: PropTypes.string
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
		cta={frontmatter.cta}
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
		image {
          childImageSharp {
            fixed(width: 2048, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
		title
        heading
        subheading
		cta
      }
    }
  }
`