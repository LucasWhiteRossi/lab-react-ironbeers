import { Link } from 'react-router-dom'
import './style.modules.css'

export function Section(props){
    return (
        <Link to={props.url}>
            <div className="section">
            <div className="image-box">
                <img src={props.image} alt={`Imagem de ${props.sectionName}`}/>
            </div>
            <div className="text-content-area">
            <div className="title-box">
                <h2 className="title">{props.sectionName}</h2>
            </div>
            <div className="content-box">
                {props.sectionDescription}
            </div>
            </div>
        </div>
        </Link>
    );
}