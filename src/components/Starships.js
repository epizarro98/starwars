import React from 'react'

const Starships = (props) => {
    console.log(props)
    let shipInfo = props.location.state.ship
    return (
        <div>
            <h1> {shipInfo.name}</h1> 
            <h1> {shipInfo.model}</h1>
            <a href='/'>Return</a>
        </div>
    )
}
export default Starships