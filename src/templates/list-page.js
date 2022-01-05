import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'


import Layout from '../components/Layout'
import Card from '../components/Card'
import { BlogFooter } from '../components/Footer'

export const ListPageTemplate = ({
  content,
  list
}) => {
    return (
      <>
        <div id="root">
            <div className="pageHeading">
              <span className="heading">{content.heading}</span>
              <span className="subheading">{content.subheading}</span>
            </div>
            <div className="container">
              <div className="card-list">
                {list.map((item, index) => {
                  return <Card key={index} data={item}/>
                })}
              </div>
            </div>
            <BlogFooter seriesTitle={"Trending News"} seriesDescription={""}/>
        </div>
        </>
    )
}

ListPageTemplate.propTypes = {
  content: PropTypes.object,
  list: PropTypes.array,
}

const ListPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  const { content } = data.list.frontmatter
  const list = edges.map(edge => edge.node);
  return (
    <Layout
      pageTitle={data.list.frontmatter.title}>
      <ListPageTemplate
        list={list}
        content={content}
      />
    </Layout>
  )
}

ListPage.propTypes = {
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.object,
      content: PropTypes.object
    }),
  }

export default ListPage

export const pageQuery = graphql`
  query ListPage($id: String!) {
    list: markdownRemark(id: { eq: $id }) {
      frontmatter {
        content {
          heading
          subheading
          description
        }
        title
      }
    }
    allMarkdownRemark(filter: {
      frontmatter: {
        templateKey: {eq: "post-page"}
      }
    }, sort: {
      order:DESC,
      fields:frontmatter___date
    }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            author
            date
            tags
          }
        }
      }
    }
  }
`