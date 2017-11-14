import React, { Component } from 'react'

import Footer from './Footer'
import Home from './Home'
import NewAdvert from './NewAdvert'

import base from './base'
import {BrowserRouter as Router, Route} from 'react-router-dom'

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
      <Router>
        <div className="App">
          <Route path='/' exact component={Home} />
          <Route path='/new-advert' exact component={NewAdvert} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
