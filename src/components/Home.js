// when you use an API you need to use useEffect
import React, {useEffect, useState} from 'react'
//import axios
import axios from 'axios'
//components:
import Starships from './Starships'
//Link
import {Link} from 'react-router-dom'
//route
import { Route} from 'react-router-dom'
const Home = () => {
    //initial state
    const [starship, setStarship] = useState([])
    //API CALL BELOW. changes the intiial state. The array now has 10 ships
    useEffect(()=>{
        axios.get('https://swapi.dev/api/starships/')
          .then((response) =>{
              console.log(response.data.results)
            setStarship(response.data.results)
          })
        }, [])
//Map thru the 10 ships, give each ship an index, a state and a key
        const display = () => {
            console.log(Link)
            return starship.map((ship, index) => (
                <div key={ship.name} className="col s12 m6">
                  <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                      <span className="card-title">{ship.name}</span>
                    </div>
                    <div className="card-action">
                        {/* Give each ship, a href "link" that will go to that particular ships page */}
                        <Link to={{pathname: `/Starships/${index}`, state:{ship} }} key={ship.name}> View Ship Info</Link> 
                    </div>
                  </div>
                </div>
              ))
            }
         
        return (
            <div className="container">
              <h2> Starship</h2>
              <div className="row">{starship.length>0?display():null}</div>
             </div>
          ) 
        }

        
export default Home
