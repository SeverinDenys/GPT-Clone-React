import { createContext, useState } from "react";
import Header from "./components/Header/Header";
import MainContent from "./components/Maincontent/MainContent";
import "./styles/main.scss";

export const modelContext = createContext();

function App() {
  const [selectedModel, setSelectedModel] = useState(null);
  const [showModels, setShowModels] = useState(false);

  return (
    <modelContext.Provider
      value={{ selectedModel, setSelectedModel }}
    >
      <Header showModels={showModels} setShowModels={setShowModels} />
      <MainContent />
    </modelContext.Provider>
  );
}

export default App;
