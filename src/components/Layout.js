import React from 'react'
import { Helmet } from 'react-helmet'

import '../assets/scss/main.scss'

import Navbar from './Navbar'
import Footer from './Footer'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children, pageTitle, disableBackground, footer }) => {
  const { title, description } = useSiteMetadata()
  const SpecificFooter = footer || Footer;
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title} | {pageTitle}</title>
        <meta name="description" content={description} />
        
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;1,300;1,400&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet"/>
        <script type="text/javascript" src="https://documentcloud.adobe.com/view-sdk/main.js"></script>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}assets/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}assets/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}assets/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}assets/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <Navbar/>
      <div className={disableBackground ? '' : 'circuit-board'}>
        {children}
      </div>
      <SpecificFooter/>
    </div>
  )
}

export default TemplateWrapper
