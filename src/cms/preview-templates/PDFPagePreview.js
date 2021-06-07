import React from 'react'
import PropTypes from 'prop-types'
import { PDFPageTemplate } from '../../templates/pdf-page'

const PDFPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  if (data) {
    return (
      <>
      <PDFPageTemplate
        title={data.title}
        pdf={data.pdf}
      />
      </>
    )
  } else {
    return <div>Loading...</div>
  }
}

PDFPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default PDFPagePreview
