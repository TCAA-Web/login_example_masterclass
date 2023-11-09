import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/userContext"

export const CartPage = ()=> {
    const [cartData, setCartData] = useState()
    const {user} = useContext(UserContext)

    useEffect(() => {
        let url = "http://localhost:3000/cart"
        let options = {
            headers: {Authorization: `Bearer ${user.access_token}`}
        }
        fetch(url, options).then(res => res.json()).then(data => setCartData(data))
    },[])

    console.log(cartData)

    return (
        <div>
            <h1>Cart</h1>
            <div>
                {cartData && cartData.map((item) => {
                    return <p>{item.poster.name}</p>
                })}
            </div>
        </div>
    )
}