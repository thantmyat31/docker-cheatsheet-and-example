import React from 'react';
import { Routes, Route } from 'react-router-dom';

import RegistrationPage from './components/pages/RegistrationPage/RegistrationPage';
import ListPage from './components/pages/ListPage/ListPage';
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RegistrationPage />} />
        <Route path="/edit/:_id" element={<RegistrationPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
