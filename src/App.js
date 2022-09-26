import { useState } from 'react';
import UpdateBook from './components/modals/UpdateBook';
import DeleteBook from './components/modals/DeleteBook';
import CreateBook from './components/modals/CreateBook';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {

  return (
    <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/product/:slug" element={<ProductDetail />} /> */}
        </Routes>
    </div>
  );
}

export default App;
