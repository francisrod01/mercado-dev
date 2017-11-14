import React, {Component} from 'react'
import axios from 'axios'

import AdvertHome from './AdvertHome'


class Category extends Component {
    constructor(props) {
        super(props)

        this.state = {
            adverts: []
        }
        this.loadAdverts = this.loadAdverts.bind(this)

        this.loadAdverts()
    }
    loadAdverts(urlCategory) {
        // Load data.
        const url = `https://devpleno-first-app.firebaseio.com/adverts.json?orderBy=%22category%22&equalTo=%22${urlCategory}%22`
        axios
            .get(url)
            .then(data => {
                this.setState({adverts: data.data})
                this.category = urlCategory
            })
    }
    componentWillReceiveProps(newProps) {
        const urlCategory = newProps.match.params.urlCategory
        if (urlCategory) {
            if (this.category !== urlCategory) {
                this.loadAdverts(urlCategory)
            }
        }
    }
    render() {
        const adverts = this.state.adverts

        return (
            <div>
                <h1>
                    Category:
                    {JSON.stringify(this.props.match.params.urlCategory)}
                </h1>

                <div className='row'>
                    {
                        Object.keys(adverts).map(_key => {
                            const _advert = this.state.adverts[_key]
                            return <AdvertHome key={_key} id={_key} advert={_advert} />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Category
