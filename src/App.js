import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";

function App() {
const [isLoggeIn, setIsLoggedIn] = useState(false)
const navigate = useNavigate()

const login = () => {
  setIsLoggedIn(true)
}

const logout = () => {
  setIsLoggedIn(false)
}

useEffect(() => {
  if (isLoggeIn) {
    navigate("/")
  }else{
    navigate("/login")
  }
}, [isLoggeIn])


  return (
    <div className="app">
      {isLoggeIn ? <NavBar logout={logout} /> : <Navigate to="/login" />}
      <Outlet context={login} />
    </div>
  );
}

export default App;
