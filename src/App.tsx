import { useState } from "react";
import "./App.css";
import BaseInput from "./components/BaseInput";

import { FlexFooter } from "./components/HOCs/FlexFooter";
import InputContainer from "./components/InputContainer";

function App() {
  const [input, setInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <div className="App wrapper">
      <InputContainer>
        <BaseInput
          type={"text"}
          display={"block"}
          onChange={handleChange}
          value={input}
          size={{
            height: "50",
            width: "100%",
          }}
          placeholder="Enter a value"
          statusMessage={undefined}
          isVerifiable={false}
          isShaded={false}
          isTrimmable={false}
          className="stack-s"
        />
        <FlexFooter wrap={"nowrap"}>
          <div>Mininum Amount: {input}</div>
          <div>Available balance: {input}</div>
        </FlexFooter>
      </InputContainer>
    </div>
  );
}

export default App;
