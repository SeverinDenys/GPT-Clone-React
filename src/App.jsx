import { createContext, useState, useEffect } from "react";
import Header from "./components/Header/Header";
import MainContent from "./components/Maincontent/MainContent";
import OpenAI from "openai";
import "./styles/main.scss";
import {   useDispatch } from "react-redux";
import { onFetched } from "../src/store/models";

function App() {
  const [showModels, setShowModels] = useState(false);

  const dispatch = useDispatch();

  const client = new OpenAI({
    apiKey: import.meta.env.VITE_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  // Fetch models only once on mount
  async function fetchModels() {
    try {
      const response = await client.models.list();
      // setModels(response.data);
      dispatch(onFetched(response.data));
      // dispatch({ type: "onFetched", payload: response.data });
    } catch (error) {
      console.error("Error fetching models:", error);
    }
  }

  useEffect(() => {
    fetchModels();
  }, []);
  return (
    <>
      <Header showModels={showModels} setShowModels={setShowModels} />
      <MainContent />
    </>
  );
}

export default App;
