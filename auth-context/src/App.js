import "./App.css";
import Navbar from "./Components/Navbar";
import { AuthContext } from "./Contexts/AuthContextProvider";
import SignUp from "./Components/SignUp";

function App() {
  const { signupBtn } = AuthContext.Consumer();
  return (
    <div>
      <Navbar />
      {signupBtn ? <SignUp /> : null}
    </div>
  );
}

export default App;
