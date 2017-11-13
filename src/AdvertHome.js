import React from 'react'

const AdvertHome = ({advert}) => {
    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
                <a href="#"><img className="card-img-top" src={advert.photo} alt={advert.name} /></a>
                <div className="card-body">
                    <h4 className="card-title"><a to={`/advert/show/`}>{advert.name}</a></h4>
                    <h5>{advert.price}</h5>
                    <p className="card-text">{advert.description}</p>
                </div>
            </div>
        </div>
    )
}

export default AdvertHome
