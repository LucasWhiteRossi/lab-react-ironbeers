import './style.modules.css'
import { Link } from 'react-router-dom'
import homeImg from '../../assets/home.png'

export function Header(){
    return (
        <header className="home-bar">
            <Link to="/"><img src={homeImg} alt="Home"/></Link>
        </header>
    );
}