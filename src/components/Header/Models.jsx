import { useContext } from "react";
import { modelContext } from "../../App";

const Models = () => {
  const { selectedModel, setSelectedModel } =
    useContext(modelContext);

  const onBtnClick = (model) => {
    setSelectedModel(selectedModel === model ? null : model);
  };
  return (
    <modelContext.Provider value={{ selectedModel }}>
      <div className="models">
        <h2>Choose your Model</h2>

        <div
          className="models__options"
          onClick={() => onBtnClick("gpt-4o")}
        >
          <p>gpt-4<span>o</span></p>
          {selectedModel === "gpt-4o" ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon-md"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM16.0755 7.93219C16.5272 8.25003 16.6356 8.87383 16.3178 9.32549L11.5678 16.0755C11.3931 16.3237 11.1152 16.4792 10.8123 16.4981C10.5093 16.517 10.2142 16.3973 10.0101 16.1727L7.51006 13.4227C7.13855 13.014 7.16867 12.3816 7.57733 12.0101C7.98598 11.6386 8.61843 11.6687 8.98994 12.0773L10.6504 13.9039L14.6822 8.17451C15 7.72284 15.6238 7.61436 16.0755 7.93219Z"
                fill="currentColor"
              ></path>
            </svg>
          ) : (
            <svg
              className="svg-icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <path d="M511.7952 256c141.2096 0 256 114.7904 256 256s-114.7904 256-256 256-256-114.7904-256-256S370.688 256 511.7952 256M511.7952 204.8c-169.6768 0-307.2 137.5232-307.2 307.2 0 169.6768 137.5232 307.2 307.2 307.2s307.2-137.5232 307.2-307.2C818.9952 342.3232 681.472 204.8 511.7952 204.8L511.7952 204.8z" />
            </svg>
          )}
        </div>

        <div
          className="models__options"
          onClick={() => onBtnClick("gpt-4o-mini")}
        >
          <p>gpt-4<span>o</span>-mini</p>
          {selectedModel === "gpt-4o-mini" ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon-md"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM16.0755 7.93219C16.5272 8.25003 16.6356 8.87383 16.3178 9.32549L11.5678 16.0755C11.3931 16.3237 11.1152 16.4792 10.8123 16.4981C10.5093 16.517 10.2142 16.3973 10.0101 16.1727L7.51006 13.4227C7.13855 13.014 7.16867 12.3816 7.57733 12.0101C7.98598 11.6386 8.61843 11.6687 8.98994 12.0773L10.6504 13.9039L14.6822 8.17451C15 7.72284 15.6238 7.61436 16.0755 7.93219Z"
                fill="currentColor"
              ></path>
            </svg>
          ) : (
            <svg
              className="svg-icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <path d="M511.7952 256c141.2096 0 256 114.7904 256 256s-114.7904 256-256 256-256-114.7904-256-256S370.688 256 511.7952 256M511.7952 204.8c-169.6768 0-307.2 137.5232-307.2 307.2 0 169.6768 137.5232 307.2 307.2 307.2s307.2-137.5232 307.2-307.2C818.9952 342.3232 681.472 204.8 511.7952 204.8L511.7952 204.8z" />
            </svg>
          )}
        </div>

        <div
          className="models__options"
          onClick={() => onBtnClick("gpt-4")}
        >
          <p>gpt-4</p>
          {selectedModel === "gpt-4" ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon-md"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM16.0755 7.93219C16.5272 8.25003 16.6356 8.87383 16.3178 9.32549L11.5678 16.0755C11.3931 16.3237 11.1152 16.4792 10.8123 16.4981C10.5093 16.517 10.2142 16.3973 10.0101 16.1727L7.51006 13.4227C7.13855 13.014 7.16867 12.3816 7.57733 12.0101C7.98598 11.6386 8.61843 11.6687 8.98994 12.0773L10.6504 13.9039L14.6822 8.17451C15 7.72284 15.6238 7.61436 16.0755 7.93219Z"
                fill="currentColor"
              ></path>
            </svg>
          ) : (
            <svg
              className="svg-icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <path d="M511.7952 256c141.2096 0 256 114.7904 256 256s-114.7904 256-256 256-256-114.7904-256-256S370.688 256 511.7952 256M511.7952 204.8c-169.6768 0-307.2 137.5232-307.2 307.2 0 169.6768 137.5232 307.2 307.2 307.2s307.2-137.5232 307.2-307.2C818.9952 342.3232 681.472 204.8 511.7952 204.8L511.7952 204.8z" />
            </svg>
          )}
        </div>

        <div
          className="models__options"
          onClick={() => onBtnClick("gpt-3.5-turbo")}
        >
          <p>gpt-3.5-turbo</p>
          {selectedModel === "gpt-3.5-turbo" ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon-md"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM16.0755 7.93219C16.5272 8.25003 16.6356 8.87383 16.3178 9.32549L11.5678 16.0755C11.3931 16.3237 11.1152 16.4792 10.8123 16.4981C10.5093 16.517 10.2142 16.3973 10.0101 16.1727L7.51006 13.4227C7.13855 13.014 7.16867 12.3816 7.57733 12.0101C7.98598 11.6386 8.61843 11.6687 8.98994 12.0773L10.6504 13.9039L14.6822 8.17451C15 7.72284 15.6238 7.61436 16.0755 7.93219Z"
                fill="currentColor"
              ></path>
            </svg>
          ) : (
            <svg
              className="svg-icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <path d="M511.7952 256c141.2096 0 256 114.7904 256 256s-114.7904 256-256 256-256-114.7904-256-256S370.688 256 511.7952 256M511.7952 204.8c-169.6768 0-307.2 137.5232-307.2 307.2 0 169.6768 137.5232 307.2 307.2 307.2s307.2-137.5232 307.2-307.2C818.9952 342.3232 681.472 204.8 511.7952 204.8L511.7952 204.8z" />
            </svg>
          )}
        </div>
      </div>
    </modelContext.Provider>
  );
};

export default Models;
