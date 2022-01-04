import React from 'react'
import PropTypes from 'prop-types'
import Showdown from 'showdown'

import { PostPageTemplate } from '../../templates/post-page'

const PostPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  if (data) {
    const converter = new Showdown.Converter();
    const body = converter.makeHtml(data.body)

    return (
      <>
        <PostPageTemplate
          content={body}
          tags={data.tags}
          title={data.title}
          date={data.date}
          author={data.author}
          seriesTitle={data.seriesTitle}
          seriesDescription={data.seriesDescription}
          attachments={data.attachments}
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
