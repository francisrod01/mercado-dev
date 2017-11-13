import React from 'react'

const AdvertHome = (props) => {
    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
                <a href="#"><img className="card-img-top" src="http://placehold.it/200x140" alt="" /></a>
                <div className="card-body">
                    <h4 className="card-title"><a to={`/advert/show/`}>nome</a></h4>
                    <h5>price</h5>
                    <p className="card-text">description</p>
                </div>
            </div>
        </div>
    )
}

export default AdvertHome
