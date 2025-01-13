import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import MainContent from "./components/Maincontent/MainContent";
import OpenAI from "openai";
import "./styles/main.scss";
import { useDispatch } from "react-redux";
import { onFetched } from "../src/store/models";
import { getStoredItem } from "./store/messages";

function App() {
  const [showModels, setShowModels] = useState(false);
  const [items, setItems] = useState(getStoredItem());

  const dispatch = useDispatch();

  const client = new OpenAI({
    apiKey: import.meta.env.VITE_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  // Fetch models only once on mount
  async function fetchModels() {
    try {
      const response = await client.models.list();

      dispatch(onFetched(response.data));
    } catch (error) {
      console.error("Error fetching models:", error);
    }
  }

  useEffect(() => {
    fetchModels();
  }, []);
  return (
    <>
      <Header
        showModels={showModels}
        setShowModels={setShowModels}
        items={items}
        setItems={setItems}
      />
      <MainContent setItems={setItems} items={items} />
    </>
  );
}

export default App;
