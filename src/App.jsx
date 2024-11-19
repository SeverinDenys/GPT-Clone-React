import { createContext, useState, useEffect } from "react";
import Header from "./components/Header/Header";
import MainContent from "./components/Maincontent/MainContent";
import OpenAI from "openai";
import "./styles/main.scss";

export const modelContext = createContext();

function App() {
  const [selectedModel, setSelectedModel] = useState(null);
  const [showModels, setShowModels] = useState(false);
  const [models, setModels] = useState([]);

  const client = new OpenAI({
    apiKey: import.meta.env.VITE_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  // Fetch models only once on mount
  async function fetchModels() {
    try {
      const response = await client.models.list();
      setModels(response.data);
    } catch (error) {
      console.error("Error fetching models:", error);
    }
  }

  useEffect(() => {
    fetchModels();
  }, []);

  

  return (
    <modelContext.Provider
      value={{ selectedModel, setSelectedModel, models, setModels }}
    >
      <Header showModels={showModels} setShowModels={setShowModels} />
      <MainContent />
    </modelContext.Provider>
  );
}

export default App;
