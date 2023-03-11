import { useState } from "react";
import "./App.css";
import BaseInput from "./components/BaseInput";
import SignupForm from "./components/Form";

import { FlexFooter } from "./components/HOCs/FlexFooter";
import InputContainer from "./components/InputContainer";

function App() {
  return (
    <div className="App wrapper">
      <SignupForm />
    </div>
  );
}

export default App;
