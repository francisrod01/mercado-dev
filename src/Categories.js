import React from 'react'
import {Link, Route} from 'react-router-dom'

import HeaderInternal from './HeaderInternal'
import Category from './Category'
import Advert from './Advert'

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
                                        <li key={_key}>
                                            <Link to={`/categories/${cat.url}`}>{cat.category}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className='col-lg-8'>
                        <Route path='/categories/:urlCategory' exact component={Category} />
                        <Route path='/categories/:urlCategory/:idAdvert' render={(props) => <Advert {...props} />} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories
