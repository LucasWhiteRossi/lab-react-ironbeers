import './style.modules.css'

export function ChosenBeerCard(props) {
    return (
        <div className="chosen-beer-card">
        <img src={props.image_url} alt={props.name}/>
            <h1>{props.name}</h1>
            <p>{props.tagline} First Brewed: {props.first_brewed}</p>
            <p><strong>Description: </strong>{props.description}</p>
            <p><strong>Attenuation Level: </strong>{props.attenuation_level}</p>
            <p>{props.contributed_by}</p>
        </div>
    );
}