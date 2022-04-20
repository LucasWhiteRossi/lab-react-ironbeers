import axios from 'axios';
import {useState, useEffect} from 'react'
import {ChosenBeerCard} from '../../components/ChosenBeerCard'

export function RandomBeer(){
    
    const [beers, setBeers] = useState([])
    const [randomInt, setRandomInt] = useState(0)

    useEffect(()=>{
        async function getBeers(){
            const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
            setBeers(response.data)
        }
        getBeers();
        
    },[])
    console.log(beers)
    
    const rand = randomInt?randomInt:0
    return (
        <>
            {beers && <ChosenBeerCard 
            image_url = {beers.image_url} 
            name = {beers.name}
            tagline = {beers.tagline}
            first_brewed = {beers.first_brewed}
            description = {beers.description}
            attenuation_level = {beers.attenuation_level}
            contributed_by = {beers.contributed_by}
            />}
        </>
        
    );
}   