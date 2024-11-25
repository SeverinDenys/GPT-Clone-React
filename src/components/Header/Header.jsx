/* eslint-disable react/prop-types */
import { useState } from "react";
import Models from "../Header/Models";

let items = localStorage.getItem("chats");
if (items) {
  items = JSON.parse(items).map((item) => {
    return item.chatId;
  });
} else {
  items = [];
}

const Header = ({ showModels, setShowModels }) => {
  const handleBtnClick = () => {
    setShowModels(!showModels);
  };

  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setHamburgerMenuOpen(!hamburgerMenuOpen);
    console.log("Hamburger menu open:", !hamburgerMenuOpen);
  };

  return (
    <>
      <div className="headerContainer">
        <header className="header">
          {!hamburgerMenuOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#b4b4b4"
              xmlns="http://www.w3.org/2000/svg"
              className="header_img-hamburger"
              onClick={toggleHamburgerMenu}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 8C3 7.44772 3.44772 7 4 7H20C20.5523 7 21 7.44772 21 8C21 8.55228 20.5523 9 20 9H4C3.44772 9 3 8.55228 3 8ZM3 16C3 15.4477 3.44772 15 4 15H14C14.5523 15 15 15.4477 15 16C15 16.5523 14.5523 17 14 17H4C3.44772 17 3 16.5523 3 16Z"
              />
            </svg>
          ) : (
            <svg
              fill="#000000"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              className="header_img-hamburger "
              onClick={toggleHamburgerMenu}
              viewBox="0 0 490 490"
            >
              <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337" />
            </svg>
          )}

          <div className="headerBtnHolder" onClick={handleBtnClick}>
            <button className="headerBtnHolder__button">
              GPT-Clone
            </button>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="headerBtnHolder-icon"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.29289 9.29289C5.68342 8.90237 6.31658 8.90237 6.70711 9.29289L12 14.5858L17.2929 9.29289C17.6834 8.90237 18.3166 8.90237 18.7071 9.29289C19.0976 9.68342 19.0976 10.3166 18.7071 10.7071L12.7071 16.7071C12.5196 16.8946 12.2652 17 12 17C11.7348 17 11.4804 16.8946 11.2929 16.7071L5.29289 10.7071C4.90237 10.3166 4.90237 9.68342 5.29289 9.29289Z"
                fill="#b4b4b4"
              />
            </svg>
          </div>

          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#b4b4b4"
            xmlns="http://www.w3.org/2000/svg"
            className="header_img-newChat"
          >
            <path d="M15.6729 3.91287C16.8918 2.69392 18.8682 2.69392 20.0871 3.91287C21.3061 5.13182 21.3061 7.10813 20.0871 8.32708L14.1499 14.2643C13.3849 15.0293 12.3925 15.5255 11.3215 15.6785L9.14142 15.9899C8.82983 16.0344 8.51546 15.9297 8.29289 15.7071C8.07033 15.4845 7.96554 15.1701 8.01005 14.8586L8.32149 12.6785C8.47449 11.6075 8.97072 10.615 9.7357 9.85006L15.6729 3.91287ZM18.6729 5.32708C18.235 4.88918 17.525 4.88918 17.0871 5.32708L11.1499 11.2643C10.6909 11.7233 10.3932 12.3187 10.3014 12.9613L10.1785 13.8215L11.0386 13.6986C11.6812 13.6068 12.2767 13.3091 12.7357 12.8501L18.6729 6.91287C19.1108 6.47497 19.1108 5.76499 18.6729 5.32708Z" />
          </svg>
        </header>

        <div className={`sidebar ${hamburgerMenuOpen ? "open" : ""}`}>
          <div className="sidebar-content">
            <ul>
              {items.map((item) => {
                return <li key={item}>{item}</li>;
              })}
            </ul>
          </div>
        </div>
        {showModels && <Models />}
      </div>
    </>
  );
};

export default Header;
