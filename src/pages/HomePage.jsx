import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/userContext"

export const HomePage = () => {

    // Henter user fra usercontext
    const {user} = useContext(UserContext)

    // Viser brugerens navn hvis vedkommende er logget ind
    return (
        <>
        <h1>Homepage</h1>
        <section>
            {user ? <p>Velkommen {user.user.firstname} {user.user.lastname}</p> : <p>Du er ikke logget ind</p>}
        </section>
        </>


    )
}