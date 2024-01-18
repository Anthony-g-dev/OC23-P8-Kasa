import { NavLink } from 'react-router-dom';
import { Logo } from './Logo';

export function Header() {
    return <header>
        <Logo className="headerLogo" color="#FF6060"/>
        <nav>
          <NavLink className="navItem" to="/">Home</NavLink>
          <NavLink className="navItem" to="/about">A Propos</NavLink>
        </nav>
    </header>
}