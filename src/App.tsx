import { Routes, Route, Navigate } from 'react-router-dom';

import { PeoplePage } from './components/PeoplePage';
import { Navbar } from './components/Navbar';

import './App.scss';
import { HomePage } from './components/HomePage';
import { NotFoundPage } from './components/NotFoundPage';

export const App = () => {
  return (
    <div data-cy="app">
      <Navbar />

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/people" element={<Navigate to="/" replace />} />
            <Route path="/" element={<PeoplePage />} />
            <Route path="/people/:personId" element={<PeoplePage />} />

            <Route path="/home" element={<HomePage />} />

            <Route
              path="*"
              element={<NotFoundPage />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};
