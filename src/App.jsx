import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const data = {
      name: "Chethan Kumar",
    };
    setUserName(data.name);
  }, []);

  return (
    <>
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </>
  );
}

export default App;
