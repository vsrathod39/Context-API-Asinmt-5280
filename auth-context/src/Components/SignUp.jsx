import React from "react";
import Form from "./Form";
import { AuthContext } from "../Contexts/AuthContextProvider";

export default function SignUp() {
  const [user, setUser] = React.useState();
  const { setFormState } = React.useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !(user?.name?.length > 2) &&
      !(user?.email?.length > 5) &&
      !(user?.password?.length > 5)
    ) {
      setFormState({ failed: true });
      setTimeout(() => {
        setFormState(null);
      }, 3000);
      return;
    }
    fetch("https://reqres.in/api/register", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "eve.holt@reqres.in", password: "pistol" }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFormState({ status: true });
        setTimeout(() => {
          setFormState(null);
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Form title={"Sign up"} handleSubmit={handleSubmit} btnTitle={"Signup"}>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          onChange={handleChange}
          type="text"
          name="email"
          placeholder="Email"
        />
        <input
          onChange={handleChange}
          type="Password"
          name="password"
          placeholder="Password"
        />
      </Form>
    </>
  );
}
