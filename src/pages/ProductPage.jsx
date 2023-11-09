import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";

export const ProductPage = () => {
  const [data, setData] = useState([]);
  const {user} = useContext(UserContext)

  // useEffect der henter data fra API når komponentet mounter
  useEffect(() => {
    let url = "http://localhost:3000/posters/list_by_genre/drama";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // funktion til at tilføje til cart
  const addToCart = (_id, _name) => {
    if (user){
        const body = new URLSearchParams()
        body.append('poster_id', _id)
        body.append('quantity', 1)
        console.log(user)
        const options = {
            body: body,
            method: "POST",
            headers: {Authorization: `Bearer ${user.access_token}`}
        }
        let url = `http://localhost:3000/cart`
        fetch(url, options).then(res => res.json()).then(data => console.log(data))
        alert(`Du har tilføjet ${_name} til kurven`)
    }
    else {
        alert('Du skal være logget ind for at tilføje til kurv')
    }
  }

  return (
    <div>
      <h1>Posters:</h1>
      {data &&
        data.map((item, index) => {
          return (
            <div key={index} style={{display: "grid", gridTemplateColumns: "4fr 1fr"}}>
              <p>{item.name}</p>
              <button onClick={() => addToCart(item.id, item.name)}>Add to cart</button>
            </div>
          );
        })}
    </div>
  );
};
