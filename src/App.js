import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

import HomePage from './pages/HomePage/HomePage.jsx';

function App() {

  return (
    <>
    <BrowserRouter>
    <h1 className='title'>Shopify Help Desk</h1>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
