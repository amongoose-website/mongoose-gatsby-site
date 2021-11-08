import React from 'react'
// import { Link } from 'gatsby'

const Footer = () => {
  return (
      <footer>
      </footer>
  )
}

export default Footer

export const BlogFooter = ({ seriesTitle, seriesDescription }) => {
  return (
    <section className="blog__footer">
      <div className="container">
        <div className="series-definition">
          <h2 className="series-title">{seriesTitle}</h2>
          <span className="series-description">{seriesDescription}</span>
        </div>
      </div>
    </section>
  )
}