import React from "react";
import Header from "./components/Header";
import { SearchHeadlessProvider } from "@yext/search-headless-react";
import MainContent from "./components/MainContent";

import "./App.css";

function App() {
  return (
    <>
      <SearchHeadlessProvider
        apiKey="a59283fd20d998993e96988674ef4dbc"
        experienceKey="h_blue_pim"
        locale="en"
      >
        <Header />
        <MainContent />
      </SearchHeadlessProvider>
    </>
  );
}

export default App;
