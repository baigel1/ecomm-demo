import React from 'react';
import Header from './components/Header'
import { AnswersHeadlessProvider } from '@yext/answers-headless-react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

import './App.css';

function App() {
  return (
    <>
    <Router>
      <AnswersHeadlessProvider
        apiKey='a59283fd20d998993e96988674ef4dbc'
        experienceKey='h_blue_pim'
        locale='en'
      >
        <Header />
        <Routes>
          {/* <Route path='' element={<SearchResults />}/> */}
        </Routes>
      </AnswersHeadlessProvider>
    </Router>
    
    </>
  );
}

export default App;
