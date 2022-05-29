import React from 'react'
import { graphql } from 'gatsby'

const JsonPage = ({ data }) => {
    return (
        <pre id="jsonOutput">{JSON.stringify(data.markdownRemark.frontmatter)}</pre>
    )
}

export default JsonPage;

export const pageQuery = graphql`
query JSONPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
        id
        html
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          tags
          author
          groups
        }
    }
}`;