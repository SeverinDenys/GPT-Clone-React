/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import TextInput from "../TextInput/TextInput";
import OpenAI from "openai";
import { useSelector, useDispatch } from "react-redux";
import { addMessage, setName } from "../../store/messages";

const client = new OpenAI({
  apiKey: import.meta.env.VITE_API_KEY,
  dangerouslyAllowBrowser: true,
});

const MainContent = ({ setItems, items }) => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const selectedModel = useSelector(
    (state) => state.models.selectedModel
  );

  const selectedChat = useSelector(
    (state) => state.messages.selectedChat
  );

  const messages = useSelector((state) => state.messages.items);
  const currentChat = useSelector((state) => state.messages);

  const getChatName = async () => {
    const chatCompletion = await client.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `
          I will send you JSON of 2 messages. Create me a name for the chat
          based on those messages. 
          ${JSON.stringify(messages)}
          `,
        },
      ],
      model: "gpt-3.5-turbo",
    });
    const chatName = chatCompletion.choices[0].message.content;
    setItems([...items, { ...currentChat, name: chatName }]);
    dispatch(setName(chatName));
  };

  useEffect(() => {
    if (messages.length === 2) {
      getChatName();
    }
  }, [messages]);

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
        {}
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
                {selectedChat && (
                  <p className="answerContainer__answerHolder__text">
                    {selectedChat.items}
                  </p>
                )}
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
