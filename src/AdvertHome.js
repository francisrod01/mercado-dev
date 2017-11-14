import React from 'react'
import {Link} from 'react-router-dom'

const AdvertHome = ({id, advert}) => {
    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
                <Link to={`/categories/${advert.category}/${id}`}><img className="card-img-top" src={advert.photo} alt={advert.name} /></Link>
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
