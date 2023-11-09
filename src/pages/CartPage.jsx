import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

export const CartPage = () => {
  // State til at sætte cart data
  const [cartData, setCartData] = useState();
  // hent user ud fra vores context
  const { user } = useContext(UserContext);
  // navigate hook til at navigere brugeren væk hvis ikke vedkommende er logget ind
  const navigate = useNavigate();


  // Funktion til at hente brugerens cart data
  const fetchCartData = () => {
    let url = "http://localhost:3000/cart";
    let options = {
      headers: { Authorization: `Bearer ${user.access_token}` },
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => setCartData(data));
  };

  // Effekt der tjekker om brugeren er logget ind og navigerer væk fra cart hvis ikke brugeren er logget ind
  useEffect(() => {
    if (user) {
      fetchCartData();
    } else {
      navigate("/login");
    }
  }, []);

  // Delete funktion der sender ID og access token til backenden og re-fetcher når delete er en success
  const handleDelete = (_id) => {
    let url = `http://localhost:3000/cart/${_id}`;
    let options = {
      method: "DELETE",
      headers: { Authorization: `Bearer ${user.access_token}` },
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((data) =>
        data.message ? fetchCartData() : alert("Der skete en fejl")
      );
  };

  return (
    <div>
      <h1>Cart</h1>
      <div>
        {cartData &&
          cartData.map((item, index) => {
            return (
              <div style={{ display: "grid", gridTemplateColumns: "4fr 1fr" }}>
                <p key={index}>{item.poster.name}</p>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            );
          })}
      </div>
    </div>
  );
};
