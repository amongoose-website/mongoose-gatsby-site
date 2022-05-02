import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'


import Layout from '../components/Layout'
import BookCard from '../components/BookCard'

export const ListTheChoicePageTemplate = ({
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
                <p className="center description">{content.description}</p>

              <div className="card-list">
                {list.map(item => {
                  return <BookCard key={item.frontmatter.content.subheading} data={item}/>
                })}
              </div>
            </div>
        </div>
        </>
    )
}

ListTheChoicePageTemplate.propTypes = {
  content: PropTypes.object,
  list: PropTypes.array,
}

const ListTheChoicePage = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  const { content } = data.list.frontmatter
  const list = edges.map(edge => edge.node);
  return (
    <Layout
      pageTitle="The Choice">
      <ListTheChoicePageTemplate
        list={list}
        content={content}
      />
    </Layout>
  )
}

ListTheChoicePage.propTypes = {
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.object,
      content: PropTypes.object
    }),
  }

export default ListTheChoicePage

export const pageQuery = graphql`
  query ListTheChoice($id: String!) {
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
              image {
                childImageSharp {
                  fluid(maxWidth: 500, quality: 100) {
                    ...GatsbyImageSharpFluid
                    ...GatsbyImageSharpFluidLimitPresentationSize
                  }              
                }
              }
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