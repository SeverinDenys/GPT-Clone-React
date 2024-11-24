import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import OpenAI from "openai";
import { useSelector, useDispatch } from "react-redux";
import { addMessage } from "../../store/messages";

const client = new OpenAI({
  apiKey: import.meta.env.VITE_API_KEY,
  dangerouslyAllowBrowser: true,
});

// const systemMessage = {
//   role: "system",
//   content: "old man",
// };

const MainContent = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  // const [messages, setMessages] = useState([]);

  const selectedModel = useSelector(
    (state) => state.models.selectedModel
  );

  const messages = useSelector((state) => state.messages.items);

  const handleTextChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      makeApiRequest();
    }
  };

  async function makeApiRequest() {
    try {
      setTextInput("");
      const newMessages = [
        ...messages,
        { role: "user", content: textInput },
      ];
      // setMessages(newMessages);
      dispatch(addMessage({ role: "user", content: textInput }));

      const modelToUse = selectedModel;

      const chatCompletion = await client.chat.completions.create({
        messages: newMessages,
        model: modelToUse,
      });

      console.log(chatCompletion);
      const assistantMessage = {
        role: "assistant",
        content: chatCompletion.choices[0].message.content,
      };
      dispatch(addMessage(assistantMessage));

      // setMessages((prevMessages) => {
      //   return [...prevMessages, assistantMessage];
      // });
    } catch (error) {
      console.error("Error making API request:", error);
    }
  }

  return (
    <>
      <main className="mainContainer">
        {messages.length === 0 && (
          <h1 className="mainContainer__title">
            What can I help with?
          </h1>
        )}
      </main>
      <section className="answerContainer">
        {messages.length > 0 &&
          messages.map((message, index) => {
            return (
              <div
                className={`answerContainer__answerHolder ${
                  message.role === "user"
                    ? "user-message"
                    : "assistant-message"
                }`}
                key={index}
              >
                <p className="answerContainer__answerHolder__text">
                  {message.content}
                </p>
              </div>
            );
          })}
      </section>

      <TextInput
        textInput={textInput}
        handleTextChange={handleTextChange}
        onBtnClick={makeApiRequest}
        onKeyDown={handleKeyDown}
      />
    </>
  );
};

export default MainContent;
