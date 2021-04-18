import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Viewer, { Worker } from '@phuocng/react-pdf-viewer';

import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';

import Layout from '../components/Layout'

export const BookPageTemplate = ({
  title,
  description,
  body,
  bookPDF
}) => {
    console.log(bookPDF);
    return (
  	<main
    	role="main" 
    	className="container">
      	<h1>{title}</h1>
        <h2>{description}</h2>
        <div dangerouslySetInnerHTML={{ __html: body }} />
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.2.228/build/pdf.worker.min.js">
            <div style={{ height: '750px' }}>
                <Viewer fileUrl={bookPDF}/>
            </div>
        </Worker>
        
  </main>
)}

BookPageTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  bookPDF: PropTypes.string,
  body: PropTypes.node.isRequired
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <BookPageTemplate
        title={frontmatter.title}
        description={frontmatter.description}
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
        description
        bookPDF
      }
    }
  }
`