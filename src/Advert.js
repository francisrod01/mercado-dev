import React, {Component} from 'react'
import axios from 'axios'

class Advert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            advert: {}
        }

        const id = this.props.match.params.idAdvert
        const url = `https://devpleno-first-app.firebaseio.com/adverts/${id}.json`
        axios
            .get(url)
            .then(data => {
                this.setState({advert: data.data})
            })
    }
    render() {
        const advert = this.state.advert
        return (
            <div>
                <h1>{advert.name}</h1>
                <p><img src={advert.photo} /></p>
            </div>
        )
    }
}

export default Advert
