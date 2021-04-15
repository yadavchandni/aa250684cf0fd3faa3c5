import React from 'react'

const OriginalRowDetails =(props)=> {
    const details= props.location.data;
    return (
        <div>
            {JSON.stringify(details)}
        </div>
    )
}

export default OriginalRowDetails
const