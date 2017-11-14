import React, {Component} from 'react'

import base from './base'

import HeaderHome from './HeaderHome'
import AdvertHome from './AdvertHome'
import LinkCategory from './LinkCategory'

class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          categories: [],
          adverts: [],
        }
        base.bindToState('adverts', {
          context: this,
          state: 'adverts',
          queries: {
            limitToLast: 3
          }
        })
    }
    render() {
        let index = 0
        return (
            <div>
                <HeaderHome />
                <div className="container">
                    <h3>Last Adverts</h3>
                    <div className="row">
                        { Object.keys(this.state.adverts).map(_index => {
                            const advert = this.state.adverts[_index]
                            return <AdvertHome key={_index} advert={advert} />
                        })}
                    </div>
        
                    <h3>Categories</h3>
                    <div className="row">
                        { this.state.categories.map((cat, _index) => {
                            return [
                            <LinkCategory category={cat} key={_index} />,
                            ++index%4 === 0 && <div key={`c` + _index} className="w-100"></div>
                            ]
                        }) }
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
