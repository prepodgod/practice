import React, { createContext, useState } from "react";
import Header from "./components/header/header";
import Main from "./pages/main";
import "./App.sass"
import { Routes, Route } from "react-router-dom"
import Page404 from "./pages/Page404";
import CartEmptyPage from "./pages/cartEmptyPage";
import CartPage from "./pages/cartPage";


export const SearchContext = createContext()

function App() {
  const [inputValue, setInputValue] = useState("")

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ inputValue, setInputValue }}>
        <Header />
        <div className="content">
          <Routes>

            <Route path="/" element={<Main />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="cart-empty" element={<CartEmptyPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>

        </div>
      </SearchContext.Provider>

    </div >
  );
}

export default App;
