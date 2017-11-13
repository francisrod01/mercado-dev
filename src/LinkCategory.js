import React from 'react'

const LinkCategory = (props) => {
    return (
        <a to={`/adverts/category/`} className="btn btn-secondary h-100 m-2 col-sm">
            <i className={`fa  fa-4x`} aria-hidden="true"></i><br />
            category
        </a>
    )
}

export default LinkCategory
