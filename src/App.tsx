import React from 'react';
import Header from './components/Header';
import { AnswersHeadlessProvider } from '@yext/answers-headless-react';
import MainContent from './components/MainContent';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from 'react-router-dom'

import './App.css';

function App() {
  return (
    <>
  
      <AnswersHeadlessProvider
        apiKey='a59283fd20d998993e96988674ef4dbc'
        experienceKey='h_blue_pim'
        locale='en'
      >
        <Header />
        <MainContent />
      </AnswersHeadlessProvider>
    
    
    </>
  );
}

export default App;
