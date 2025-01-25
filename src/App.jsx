import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes';
import Error from './pages/Error';
import Layout from './components/Layout';

const App = () => {
  return (
    <div className="w-full h-screen flex flex-col bg-slate-200 varela-round">
      <Router>
        <Routes>
          {Object.values(routes).map((route, key) => (
            <Route
              key={key}
              path={route.path}
              element={<Layout>{route.page}</Layout>}
            />
          ))}
          <Route
            path="/profile/:username"
            element={<Layout>{Object.values(routes).find(r => r.path === '/profile').page}</Layout>}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
