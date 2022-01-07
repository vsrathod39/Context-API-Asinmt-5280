import React from "react";
import Form from "./Form";
import { AuthContext } from "../Contexts/AuthContextProvider";

export default function Login() {
  const [user, setUser] = React.useState();
  const { setIsAuth, setToggleAuth, setloginBtn, setFormState } =
    React.useContext(AuthContext);

  const handleChange = (e) => {
    let { name, value } = e.target;
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
    fetch("https://reqres.in/api/login", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "eve.holt@reqres.in", password: "pistol" }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIsAuth({ status: true, token: data.token });
        setFormState({ status: true });
        setTimeout(() => {
          setloginBtn(false);
          setToggleAuth(true);
          setFormState(null);
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Form handleSubmit={handleSubmit} title={"Login"} btnTitle={"Login"}>
      <input
        onChange={handleChange}
        type="text"
        name="email"
        placeholder="email"
      />
      <input
        onChange={handleChange}
        type="password"
        name="password"
        placeholder="Password"
      />
    </Form>
  );
}
