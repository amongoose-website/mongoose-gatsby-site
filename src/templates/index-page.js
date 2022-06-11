import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import FullWindowPDF from '../components/PDF/FullWindowPDF'
import ScrollButton from '../components/ScrollButton'
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
                <section className="center hero container">
                  <div className="pageHeading pageHeading__index">
                    <span className="heading red-pill">{content.heading}</span>
                    <span className="subheading">{content.subheading}</span>
                  </div>
                  <a href="#trunk">
                    <button className="red-pill-button">The Red Pill</button>
                  </a>
                  <ScrollButton to={"#trunk"}/>
                </section>
                {/* <section id="center siteMenu">
                  <div className="siteMenu circuit-board">
                    <div className="pageHeading container">
                      <span className="heading">Site Menu</span>
                      <p>If you are a returning seeker for truth, use the following buttons to navigate through the website. This site contains both live updates and a library full of books, charts and videos. 
                      <br/><br/> The content of the library is designed to lead you to question your relative truth.  The live updates are constructed regularly, designed to keep you asking questions of the mainstream narratives.</p>
                    </div>
                  </div>
                  <div className="siteMenu">
                    <div className="pageHeading container">
                      <span className="heading">Something For Everyone</span>
                    </div>
                  </div>
                </section> */}
                <section id="trunk">
                  <FullWindowPDF pdf={pdf.publicURL} metaData={metaData}></FullWindowPDF>
                </section>
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
      pageTitle={frontmatter.title}
      disableBackground={true}>
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