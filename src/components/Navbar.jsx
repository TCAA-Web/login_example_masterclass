import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <ul>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/create">Create</NavLink>
        </ul>
    )
}