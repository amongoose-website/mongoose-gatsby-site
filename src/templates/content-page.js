import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'


import Layout from '../components/Layout'
import ContentSection from '../components/ContentSection'

export const ContentPageTemplate = ({
	title,
		image
}) => (
	<main className="content container">
		<header>
			<span className="content-title">{title}</span>
			{ image && <img
			className="content-image"
			src={image.src}
			alt={image.alt}/> }
		</header>
	</main>
)

ContentPageTemplate.propTypes = {
	title: PropTypes.string,
	image: PropTypes.oneOf([PropTypes.string, PropTypes.object])
}

const ContentPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark

	return (
		<Layout
			pageTitle={frontmatter.title}>
			<ContentPageTemplate
				title={frontmatter.title}
			/>
		</Layout>
	)
}

ContentPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object,
			html: PropTypes.string
		}),
	}),
}

export default ContentPage

export const pageQuery = graphql`
	query ContentPageTemplate($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
			frontmatter { 
				title
			}
		}
	}
`