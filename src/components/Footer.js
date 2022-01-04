import React from 'react'
import axios from 'axios'

import Icon from './Icon'

const Footer = () => {
  return (
      <footer>
      </footer>
  )
}

export default Footer

const ERROR_MESSAGES = {
  429: 'You have reached the limit for subscriptions. Try again in 24 hours.',
  400: 'This domain is authorised.'
};

export class BlogFooter extends React.Component {
  constructor (data) {
    super(data);
    this.seriesTitle = data.seriesTitle
    this.seriesDescription = data.seriesDescription

    this.state = {
      email: '',
      subbed: false,
      subStatus: 'Subscribe',
      error: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({email: event.target.value})
  }

  async handleSubmit(event) {
    event.preventDefault()

    axios.post('https://emailer.amongoose.com/subscribe', {
      name: '',
      email: this.state.email
    }).then(res => {
      if (res && res.status === 200) {
        this.setState({subbed: true})
      }
    }).catch(error => {
      if (error.response) {
        if (ERROR_MESSAGES[error.response.status]) {
          return this.setState({error: ERROR_MESSAGES[error.response.status]})
        }
      }
    })
  }

  render() {
    return (
      <section className="blog__footer">
        <div className="container">
          <div className="series-definition">
            <h2 className="series-title">{this.seriesTitle}</h2>
            <span className="series-description">{this.seriesDescription}</span>
          </div>
          <div className="subscribeForm">
            <h3>Get free updates via email</h3>
            {
              !this.state.subbed && <form onSubmit={this.handleSubmit}>
                <input 
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={this.state.email}
                  onChange={this.handleChange}/>
                <input type="submit" value={this.subStatus}/>
              </form>
            }
            {
              this.state.subbed && <div className="subscribeForm--success">
                <span>Subscribed</span>
              </div>
            }
            <div className={`subscribeForm__error-msg ${this.state.error ? 'show' : null}`}>
              <Icon name="error"/>
              <span>{this.state.error}</span>
            </div>
          </div>
        </div>
      </section>
    )
  }
}