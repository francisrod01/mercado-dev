import React, {Component} from 'react'
import axios from 'axios'

import AdvertHome from './AdvertHome'


class Category extends Component {
    constructor(props) {
        super(props)

        this.state = {
            adverts: {},
            isLoading: false
        }
        this.loadAdverts = this.loadAdverts.bind(this)

        this.loadAdverts()
    }
    loadAdverts(urlCategory) {
        this.setState({
            isLoading: true,
            adverts: {}
        })

        // Load data.
        const url = `https://devpleno-first-app.firebaseio.com/adverts.json?orderBy=%22category%22&equalTo=%22${urlCategory}%22`
        axios
            .get(url)
            .then(data => {
                this.setState({adverts: data.data, isLoading: false})
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
                    Category: &nbsp;
                    "{this.props.match.params.urlCategory}"
                </h1>
                {
                    this.state.isLoading && <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
                }
                {
                    !this.state.isLoading && Object.keys(this.state.adverts).length === 0 && <p>Nothing registered.</p>
                }
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
