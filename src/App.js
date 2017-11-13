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
      categories: [],
      adverts: [],
    }
    base.bindToState('categories', {
      context: this,
      state: 'categories'
    })
    base.bindToState('adverts', {
      context: this,
      state: 'adverts'
    })
  }

  render() {
    let index = 0
    return (
      <div className="App">
        <HeaderHome />
        <div className="container">
          <h3>Last Adverts</h3>
          <div class="row">
            { this.state.adverts.map((advert, _index) => {
              return <AdvertHome key={_index} advert={advert} />
            })}
          </div>

          <h3>Categories</h3>
          <div class="row">
            { this.state.categories.map((cat, _index) => {
              return [
                <LinkCategory category={cat} key={_index} />,
                ++index%4 === 0 && <div key={`c` + _index} className="w-100"></div>
              ]
            }) }
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
