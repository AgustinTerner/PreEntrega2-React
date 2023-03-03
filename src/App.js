import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import Negras from './components/Negras';
import Rojas from './components/Rojas';
import Rubias from './components/Rubias';

function App() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route path="/rubias" element={<Rubias />} />
          <Route path="/rojas" element={<Rojas />} />
          <Route path="/negras" element={<Negras />} />
        </Routes>
      </BrowserRouter>
    );
  }

export default App;