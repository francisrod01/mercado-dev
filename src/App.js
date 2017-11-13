import React, { Component } from 'react'

import Footer from './Footer'
import Home from './Home'

import base from './base'
import {BrowserRouter as Router, Route} from 'react-router-dom'

const Test = () => <h1>Test</h1>

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path='/' exact component={Home} />
          <Route path='/test' exact component={Test} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
