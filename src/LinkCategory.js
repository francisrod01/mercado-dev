import React from 'react'

const LinkCategory = ({category}) => {
    return (
        <a to={`/adverts/category/`} className="btn btn-secondary h-100 m-2 col-sm">
            <i className={`fa ${category.icon} fa-4x`} aria-hidden="true"></i><br />
            {category.name}
        </a>
    )
}

export default LinkCategory
