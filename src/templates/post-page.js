import React from 'react'
import moment from 'moment';
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { useQueryParam, StringParam } from 'use-query-params'

import Layout from '../components/Layout'
import { RefTagger } from 'react-reftagger';
import { BlogFooter } from '../components/Footer'
import Attachment from '../components/Attachment'
import { HTMLContent } from '../components/Content'
import CommentSection from '../components/CommentSection'

export const PostPageTemplate = ({
    title,
    tags,
    author,
    date,
    content,
    contentComponent,
    attachments
}) => {
    const formattedDate = moment(date).format('MMMM Do YYYY, h:mm a')
    return (
      <>
        <div id="root" className="blog__post">
            <section className="circuit-board pageHeading__container">
              <div className="container pageHeading">
                <span className="blog-date">{formattedDate}</span>
                <span className="blog-heading">{title}</span>
                <span className="blog-author">by {author}</span>
              </div>
            </section>
            <div className="container blog__content">
              <RefTagger bibleVersion="KJV"/>
              <HTMLContent content={content}/>
              {
                attachments && attachments.length > 0 && <section id="attachments">
                  <h2>Attachments</h2>
                  <div className="attachments__container">
                    {
                      attachments.map((attachment, key) => <Attachment key={key} attachment={attachment}></Attachment>)
                    }
                  </div>
                </section>
              }

            </div>
            
            <CommentSection/>

            <BlogFooter seriesTitle={"Trending News"} seriesDescription={"Returning to the old normal."}/>
        </div>
      </>
    )
}

PostPageTemplate.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
}

const PostPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const { 
    tags, title, date, author, attachments
  } = frontmatter
  const rawJson = useQueryParam('rawJson', StringParam)[0];
  if (rawJson) {
    return (
      <>
        <pre id="jsonOutput">{JSON.stringify(frontmatter)}</pre>
      </>
    )
  }
  return (
    <Layout
      disableBackground={true}
      pageTitle={title}>
      <PostPageTemplate
        content={data.markdownRemark.html}
        contentComponent={HTMLContent}
        tags={tags || []}
        title={title}
        date={date}
        author={author}
        attachments={attachments || []}
      />
    </Layout>
  )
}

PostPageTemplate.propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.object,
    }),
  }

export default PostPage

export const pageQuery = graphql`
query PostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
        author
        attachments {
          fileName
          file {
            publicURL
            extension
          }
        }
      }
    }
  }
`