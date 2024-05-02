import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

import HomePage from './pages/HomePage/HomePage.jsx';

function App() {

  return (
    <>
    <BrowserRouter>
    <h1>CHATBOT</h1>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
