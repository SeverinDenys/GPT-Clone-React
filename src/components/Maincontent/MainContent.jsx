import { useState } from "react";
import TextInput from "../TextInput/TextInput";

const MainContent = () => {
  const [textInput, setTextInput] = useState();

  const handleTextChange = (e) => {
    setTextInput(e.target.value);
  };
  return (
    <>
      <main className="mainContainer">
        <h1 className="mainContainer__title">
          What can I help with?
        </h1>
      </main>
      <TextInput
        textInput={textInput}
        handleTextChange={handleTextChange}
      />
    </>
  );
};

export default MainContent;
