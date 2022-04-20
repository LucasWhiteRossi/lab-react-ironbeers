import './style.modules.css'
import { Link } from 'react-router-dom'

export function BeerCardElement(props) {
    return (
        <Link to={`/beers/${props.beerId}`}>
        <div className="beer-card-element">
            <div className="beer-card-element-img-container">
            <img className="beer-card-element-img" src={props.image_url} alt={`${props.image} image`}/>
            </div>
            <div className="beer-card-element-text">
                <div>
                <h3>{props.name}</h3>
                <p>{props.tagline}</p>
                <p><strong>Created by: </strong>{props.contributed_by}</p>
                </div>
            </div>
            </div>
            </Link>
    );
}