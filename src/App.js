import React, { Component } from 'react'
import HeaderHome from './HeaderHome'
import AdvertHome from './AdvertHome'
import Footer from './Footer'
import LinkCategory from './LinkCategory'

class App extends Component {
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
            <LinkCategory category={{ name: 'Bike', icon: 'fa-lightbulb-o'}} />
            <LinkCategory category={{ name: 'Bike', icon: 'fa-lightbulb-o'}} />
            <LinkCategory category={{ name: 'Bike', icon: 'fa-lightbulb-o'}} />
            <LinkCategory category={{ name: 'Bike', icon: 'fa-lightbulb-o'}} />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
