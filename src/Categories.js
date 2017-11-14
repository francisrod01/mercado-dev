import React from 'react'

import HeaderInternal from './HeaderInternal'
import {Link} from 'react-router-dom'

const Categories = (props) => {
    return (
        <div>
            <HeaderInternal />
            <div className='container' style={{paddingTop: '120px'}}>
                <h1>Categories</h1>
                <div className='row'>
                    <div className='col-lg-4'>
                        <ul>
                            {
                                props.categories.map((cat, _key) => {
                                    return (
                                        <li>
                                            <Link to={`/categories/${cat.url}`}>{cat.category}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className='col-lg-8'>
                        content
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories
