/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import Header from 'components/Header';
import Footer from 'components/Footer';
import HomePageBody from 'components/HomePageBody'
import PortfolioItems from 'components/PortfolioItems.js'
import Logo from 'images/logo/logo_stacked.png'

class HomePage extends React.Component {

  constructor(){
    super()
    this.state = {}
  }

  render(){
    return (
      <div className='app-wrapper'>
        <Helmet>
          <title>{'Hello Fredrik'}</title>
          <meta property="og:title" content="Hello. I’m Fredrik, I build user interfaces." />
          <meta property="og:description" content="My tools are HTML, CSS, JavaScript, React, PHP, Adobe CC, Git, Pencil and paper." />
          <meta property="og:image" content={window.location.origin+Logo} />
        </Helmet>
        <Header />
        <HomePageBody />
        <Footer />
      </div>
    )
  }

}

export default HomePage