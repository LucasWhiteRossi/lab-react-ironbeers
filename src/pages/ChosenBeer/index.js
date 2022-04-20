import axios from 'axios';
import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react'
import {ChosenBeerCard} from '../../components/ChosenBeerCard'

export function ChosenBeer(){
    
    const params = useParams()
    const [beer, setBeer] = useState({})
    
    useEffect(()=>{
        async function getBeer(){
            const response = await axios.get(
                `https://ih-beers-api2.herokuapp.com/beers/${params.id}`
            )
            setBeer(response.data)
        }
        getBeer()
    },[])
    console.log(beer)
    return (
        <>
            <ChosenBeerCard 
            image_url = {beer.image_url} 
            name = {beer.name}
            tagline = {beer.tagline}
            first_brewed = {beer.first_brewed}
            description = {beer.description}
            attenuation_level = {beer.attenuation_level}
            contributed_by = {beer.contributed_by}
            />
        </>
        
    );
}   