import React from 'react'

const ContentSection = ({ content }) => {	
	return (
        <section className="content"
			dangerouslySetInnerHTML={{__html: content}}/>
    )
}

export default ContentSection