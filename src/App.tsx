import { ChangeEvent, useState } from "react";
import "./App.css";
import BaseInput from "./components/BaseInput";
import Footer from "./components/Footer";
import { FlexFooter } from "./components/HOCs/FlexFooter";
import InputContainer from "./components/InputContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App wrapper">
      <InputContainer>
        <BaseInput
          type={"number"}
          display={"block"}
          onChange={function (event: ChangeEvent<HTMLInputElement>): void {
            throw new Error("Function not implemented.");
          }}
          value={""}
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
        <FlexFooter>
          <div>Mininum Amount</div>
          <div>Available balance</div>
        </FlexFooter>
      </InputContainer>
    </div>
  );
}

export default App;
