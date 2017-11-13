import React, { Component } from 'react'
import HeaderHome from './HeaderHome'
import AdvertHome from './AdvertHome'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderHome />
        <div className="container">
          <div class="row">
            <AdvertHome />
            <AdvertHome />
            <AdvertHome />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
