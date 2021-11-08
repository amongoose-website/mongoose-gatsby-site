import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { RefTagger } from 'react-reftagger';
import Layout from '../components/Layout'
import Content, {HTMLContent} from '../components/Content'
import { BlogFooter } from '../components/Footer';
import { useQueryParam, StringParam } from 'use-query-params';

export const PostPageTemplate = ({
    title,
    tags,
    author,
    date,
    content,
    contentComponent,
    seriesTitle,
    seriesDescription
}) => {
    const PostContent = contentComponent || Content
    return (
      <>
        <div id="root" className="blog__post">
            <section className="circuit-board pageHeading__container">
              <div className="container pageHeading">
                <span className="blog-date">{date}</span>
                <span className="blog-heading">{title}</span>
                <span className="blog-author">by {author}</span>
              </div>
            </section>
            <div className="container blog__content">
              <RefTagger bibleVersion="KJV"/>
              <PostContent content={content}/>
            </div>
            <BlogFooter seriesTitle={seriesTitle} seriesDescription={seriesDescription}/>
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
    tags, title, date, author, seriesTitle, seriesDescription
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
        tags={tags}
        title={title}
        date={date}
        author={author}
        seriesTitle={seriesTitle}
        seriesDescription={seriesDescription}
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
        seriesTitle
        seriesDescription
      }
    }
  }
`