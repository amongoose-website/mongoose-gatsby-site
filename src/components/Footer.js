import React, { useState } from 'react'

const Footer = () => {
  return (
      <footer>
      </footer>
  )
}

export default Footer

export const BlogFooter = ({ seriesTitle, seriesDescription }) => {
  // Subscription management
  const [subbed] = useState(false);
  const [subStatus, setSubStatus] = useState('Subscribe');

  const handleSubmit = (event) => {
    setSubStatus('Subscribing...');
    event.preventDefault();
  }

  return (
    <section className="blog__footer">
      <div className="container">
        <div className="series-definition">
          <h2 className="series-title">{seriesTitle}</h2>
          <span className="series-description">{seriesDescription}</span>
        </div>
        <div className="subscribeForm">
          <h3>Get free updates via email</h3>
          {
            !subbed && <form onSubmit={handleSubmit}>
              <input type="email" name="email" placeholder="Email Address"></input>
              <input type="submit" value={subStatus}></input>
            </form>
          }
          {
            subbed && <div className="subscribeForm--success">
              <span>Subscribed</span>
            </div>
          }
        </div>
      </div>
    </section>
  )
}