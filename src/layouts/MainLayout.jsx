import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"

export const MainLayout = () => {

    return (
        <main>
            <Navbar/>
            <Outlet/>
        </main>
    )
}