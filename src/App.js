import logo from './logo.svg';
import './App.css';
import './css/styles.css';
import { Bookings, Main } from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
    
  );
}

export default App;
