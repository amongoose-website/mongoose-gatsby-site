import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import { Document, Page, pdfjs } from 'react-pdf'

import Layout from '../components/Layout'

import book from '../img/book1.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const BookPageTemplate = ({
  title,
  description,
  body,
  bookPDF
}) => {
	const [numPages, setNumPages] = useState(null)
  	const [pageNumber, setPageNumber] = useState(1)

  	function onDocumentLoadSuccess({ numPages }) {
    	setNumPages(numPages)
	}

	function nextPage() {
		setPageNumber(pageNumber + 1);
	}

	function setPage(e) {
		let page = e.target.value
		if (page < 1 || page > numPages) {
			page = 1;
		}
		setPageNumber(Number(page))
	}

    return (
  	  	<main
      		role="main" 
      		className="container">
        	
			<h1>{title}</h1>
          	<div dangerouslySetInnerHTML={{ __html: body }} />
			<button
				onClick={nextPage}>
					Next Page
				</button>
			<input type="text" value={pageNumber} onChange={setPage}/>
			<Document
            	file={book}
				onLoadSuccess={onDocumentLoadSuccess}>
            	<Page pageNumber={pageNumber}/>
				<Page pageNumber={pageNumber + 1}/>
			</Document>
			<p>Page {pageNumber} of {numPages}</p>

      </main>
    )
}

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
        bookPDF={frontmatter.bookPDF.absolutePath}
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
        bookPDF {
		  relativePath
          absolutePath
        }
      }
    }
  }
`