import React, { Component } from 'react'

import HeaderHome from './HeaderHome'
import AdvertHome from './AdvertHome'
import Footer from './Footer'
import LinkCategory from './LinkCategory'

import base from './base'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      categories: []
    }
    base.bindToState('categories', {
      context: this,
      state: 'categories'
    })
  }

  render() {
    return (
      <div className="App">
        <HeaderHome />
        <div className="container">
          <h3>Last Adverts</h3>
          <div class="row">
            <AdvertHome />
            <AdvertHome />
            <AdvertHome />
          </div>

          <h3>Categories</h3>
          <div class="row">
            { this.state.categories.map(cat => {
              return <LinkCategory category={cat} />
            }) }
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
