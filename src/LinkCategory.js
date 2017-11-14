import React from 'react'
import {Link} from 'react-router-dom'

const LinkCategory = ({category}) => {
    return (
        <Link to={`/categories/${category.url}`} className="btn btn-secondary h-100 m-2 col-sm">
            <i className={`fa ${category.icon} fa-4x`} aria-hidden="true"></i><br />
            {category.category}
        </Link>
    )
}

export default LinkCategory
