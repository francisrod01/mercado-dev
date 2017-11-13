import React from 'react'
import logo from './logo.png'

// Functional stateless component.
const HeaderHome = (props) => {
    return (
        <div className="jumbotron">
            <div className="container">
                <h1 className="display-3 text-center">
                    <img src={logo} className="App-logo" alt="logo" width="200" />
                </h1>
                <p className="text-center">
                    <a className="btn btn-anuncie btn-lg" to="/new-post" role="button">Advertise for free &raquo;</a>
                </p>
            </div>
        </div>
    )
}

export default HeaderHome
