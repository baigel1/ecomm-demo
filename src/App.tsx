import React from "react";
import Header from "./components/Header";
import { SearchHeadlessProvider } from "@yext/search-headless-react";
import MainContent from "./components/MainContent";
import { searchConfig } from "./searchConfig";

import "./App.css";

function App() {
  return (
    <>
      <SearchHeadlessProvider {...searchConfig}>
        <Header />
        <MainContent />
      </SearchHeadlessProvider>
    </>
  );
}

export default App;
