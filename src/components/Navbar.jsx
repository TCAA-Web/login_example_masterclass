import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <ul style={{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
        </ul>
    )
}