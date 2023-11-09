import { useState } from "react";
import { InputField } from "../components/InputField";

export const CreateUserPage = () => {
  const [error, setError] = useState("");

  // Submit funktion der opretter en ny bruger i backenden
  const handleSubmit = (event) => {
    event.preventDefault();

    // gemmer alle values is scoped variabler
    let firstName = event.target.firstname.value;
    let lastName = event.target.lastname.value;
    let email = event.target.email.value;
    let password = event.target.password.value;

    // tjekker om variabler er sat
    if (firstName && lastName && email && password) {
      let url = `http://localhost:3000/users`;

      // laver en ny body og tilføjer alle variabler
      let body = new URLSearchParams();
      body.append("firstname", firstName);
      body.append("lastname", lastName);
      body.append("email", email);
      body.append("password", password);
      body.append("is_active", true);
      body.append("org_id", 1);
      body.append("refresh_token", 1234);
      body.append("groups", 1);

      const options = {
        body: body,
        method: "POST",
      };

      // poster dem til serveren
      fetch(url, options)
        .then((res) => res.json())
        .then((data) => console.log(data));
    } else {
      setError("Udfyld venligst alle felter");
    }
  };

  return (
    <div>
      <h1>Create user</h1>

      <form onSubmit={(event) => handleSubmit(event)}>
        <InputField
          type="text"
          name="firstname"
          placeholder="Enter your firstname"
        />
        <InputField
          type="text"
          name="lastname"
          placeholder="Enter your lastname"
        />
        <InputField 
          type="email" 
          name="email" 
          placeholder="Enter your email" 
        />
        <InputField
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <input type="submit" value="submit" />
        <b>{error}</b>
      </form>
    </div>
  );
};
