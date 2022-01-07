import React from "react";
import { Div } from "./Signup.Styles";
import { AuthContext } from "../Contexts/AuthContextProvider";

export default function Form({ title, children, handleSubmit, btnTitle }) {
  const { formState } = React.useContext(AuthContext);
  return (
    <>
      <Div>
        <h3>{title}</h3>
        <form onSubmit={handleSubmit}>
          {/* <input type="text" name="name" placeholder="Name" />
          <input type="text" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" /> */}
          {children}
          <input type="submit" value={btnTitle} />
        </form>
        {formState?.failed ? (
          <p style={{ color: "red" }}>Check the details</p>
        ) : formState?.status ? (
          <p style={{ color: "green" }}>{btnTitle} Success</p>
        ) : null}
      </Div>
    </>
  );
}
