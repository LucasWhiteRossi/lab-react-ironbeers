import { Header } from '../../components/Header'
import { BeerCardElement } from '../../components/BeerCardElement'
import {useState, useEffect} from 'react'
import axios from 'axios'

export function Beers(){

    const [beers, setBeers] = useState([])

    useEffect(()=>{
        async function getBeers(){
            const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
            setBeers(response.data)
        }
        getBeers();
        
    },[])
    console.log(beers)
    return (
        <>
            <Header/>
            <div style={{position:"relative",top:"70px"}}>
                {
                    beers.map((beer)=>{
                        return (
                            <BeerCardElement
                                beerId = {beer._id}
                                image_url={beer.image_url}
                                name={beer.name}
                                tagline={beer.tagline}
                                contributed_by={beer.contributed_by}
                                
                            />
                        );
                    })
                }
            </div>
        </>
    );
}