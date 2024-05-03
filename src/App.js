import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

import HomePage from './pages/HomePage/HomePage.jsx';
import Header from './components/Header/Header.jsx';

function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
