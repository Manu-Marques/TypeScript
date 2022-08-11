import { NavLink } from 'react-router-dom';
import './styles.scss';

export default function Header() {
    return (
 <div className="nav_container">
    <span className="logo"><img className="logo_img" src="https://zupimages.net/up/22/32/h67g.jpg" alt="Logo ArtisenBois" /></span>
        <nav className="nav">
            <ul className="nav_li">
    <li><NavLink  style={{color : 'white'}}  to="/">   Accueil </NavLink></li>
    <li><NavLink  style={{color : 'white'}}   to="/galeries"> Galeries </NavLink></li>
    <li><NavLink  style={{color : 'white'}}  to="/devis"> Devis </NavLink></li>
    <li><NavLink  style={{color : 'white'}}  to="/contact"> Contact </NavLink></li>
            </ul>
         </nav>
         <nav className="nav_log">
    <ul className="nav_link">
                <li><NavLink style={{color : 'black'}} className="nav_menu" to="/login"> Connexion </NavLink></li>
                <li><NavLink style={{color : 'black'}} className="nav_menu" to="/register"> Inscription </NavLink></li>
            </ul>
            </nav>
</div>
 )
}
