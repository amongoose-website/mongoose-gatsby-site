import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'


import Layout from '../components/Layout'
import Card from '../components/Card'

export const ListTemplate = ({
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
              <span className="description">{content.description}</span>

              <div className="card-list">
                {list.map(item => {
                  return <Card key={item.frontmatter.content.subheading} data={item}/>
                })}
              </div>
            </div>
        </div>
        </>
    )
}

ListTemplate.propTypes = {
  content: PropTypes.object,
  list: PropTypes.array,
}

const ListPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  const { content } = data.list.frontmatter
  const list = edges.map(edge => edge.node);
  return (
    <Layout
      pageTitle="The Choice">
      <ListTemplate
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
          preheading
          heading
          subheading
          description
        }
      }
    }
    allMarkdownRemark(filter: {
      frontmatter: {
        templateKey: {ne: "list-choice-page"}
        content: {
          heading: {eq:"The Choice"}
        }
      }
    }, sort: {
      order:ASC,
      fields:frontmatter___content___subheading
    }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            content {
              heading
              subheading
              description
              author
            }
            pdf {
              id
              publicURL
            }
          }
        }
      }
    }
  }
`