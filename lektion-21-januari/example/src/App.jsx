import "./App.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUsername, updateEmail } from "./reducers/userReducer";

import DisplayInfo from "./components/DisplayUser";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  function handleClick() {
    if (username) {
      dispatch(updateUsername(username));
    }

    if (email) {
      dispatch(updateEmail(email));
    }
  }

  return (
    <main>
      <input
        type="text"
        placeholder="Användarnamn"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="E-post"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <button onClick={handleClick}>Uppdatera</button>

      <DisplayInfo />
    </main>
  );
}

export default App;
