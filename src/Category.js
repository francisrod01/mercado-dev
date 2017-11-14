import React, {Component} from 'react'

const Category = (props) => {
    return (
        <h1>
            Category:
            {JSON.stringify(props.match.params.urlCategory)}
        </h1>
    )
}

export default Category
