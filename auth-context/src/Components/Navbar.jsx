import React from "react";
import { AuthContext } from "../Contexts/AuthContextProvider";

export default function Navbar() {
  const { setSignupBtn, setloginBtn, toggleAuth } =
    React.useContext(AuthContext);

  const handleSignup = () => {
    setloginBtn(false);
    setSignupBtn(true);
  };

  const handleLogin = () => {
    setSignupBtn(false);
    setloginBtn(true);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Context
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Pricing
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <button
              onClick={handleSignup}
              className="btn btn-outline-success"
              type="submit"
            >
              Signup
            </button>
            <button
              onClick={handleLogin}
              className="btn btn-outline-success mx-2"
              type="submit"
            >
              {toggleAuth ? "Logout" : "Login"}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
