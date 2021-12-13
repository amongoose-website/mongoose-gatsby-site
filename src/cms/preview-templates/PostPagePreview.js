import React from 'react'
import PropTypes from 'prop-types'
import { PostPageTemplate } from '../../templates/post-page'

const PostPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  if (data) {
    const { frontmatter } = data.markdownRemark
    const { 
        tags, title, date, author, seriesTitle,
        seriesDescription, attachments
    } = frontmatter

    return (
      <>
      <PostPageTemplate
        content={data.markdownRemark.html}
        contentComponent={HTMLContent}
        tags={tags}
        title={title}
        date={date}
        author={author}
        seriesTitle={seriesTitle}
        seriesDescription={seriesDescription}
        attachments={attachments}
      />
      </>
    )
  } else {
    return <div>Loading...</div>
  }
}

PostPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default PostPagePreview
