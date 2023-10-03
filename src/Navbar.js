// import './navbar.css';
import {NavLink} from 'react-router-dom'
export const Navbar = () => {
  return (
    <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/addmember'>+ Add Member</NavLink>
    </nav>
  )
}
