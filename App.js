import "./App.css";
import { Form } from "./Pages/Form";

import { useState, createContext } from "react";

export const AppContext = createContext();
function App() {
  const [username, setUsername] = useState("Krishnam");

  return (
    <div className="App">
      <Form />
    </div>
  );
}
export default App;
