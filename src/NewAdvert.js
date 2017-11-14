import React, {Component} from 'react'

class NewAdvert extends Component {
    render() {
        return (
            <div>
                <div className='container' style={{paddingTop: '120px'}}>
                    <h1>New Advert</h1>
                    <form onSubmit={null}>
                        <div className='form-group'>
                            <label htmlFor='name'>Name</label>
                            <input type='text' className='form-control' id='name' placeholder='name' />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default NewAdvert
