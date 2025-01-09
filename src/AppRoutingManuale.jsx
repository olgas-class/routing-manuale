import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import { useState } from "react";

function App() {
  const [curPosition, setCurPosition] = useState("Home");

  return (
    <>
      <header>
        <ul>
          <li>
            <a onClick={() => setCurPosition("Home")}>
              Home
            </a>
          </li>
          <li>
            <a onClick={() => setCurPosition("About")}>
              About
            </a>
          </li>
          <li>
            <a onClick={() => setCurPosition("Contacts")}>
              Contacts
            </a>
          </li>
        </ul>
      </header>

      <div>
        {curPosition === "Home" && <Home />}
        {curPosition === "About" && <About />}
        {curPosition === "Contacts" && <Contacts />}
      </div>
    </>
  );
}

export default App;
