import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [nameInput, setNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const clickButton = passwordInput === "252525";

  const validarInput = (e) => {
    e.preventDefault();
    if (nameInput === "") {
      alert("Debes agregar tu nombre");
    }
  };

  return (
    <div className="App">
      <div className="principal-container">
        <Header title="Estado de los componentes y eventos" />
      </div>
      <form action="http://www.google.com" onSubmit={validarInput}>
        <div className="form-container">
          <Input
            nameInput={nameInput}
            setNameInput={setNameInput}
            passwordInput={passwordInput}
            setPasswordInput={setPasswordInput}
          />
        </div>
        <Button clickButton={clickButton} />
      </form>
    </div>
  );
}

export default App;
