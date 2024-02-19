import logo from './logo.svg';
import './App.css';
import './css/styles.css';
import { BookingPage, Footer, Header, HomePage, Main, Nav } from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes> 
        <Route path="/" element={<Main />}></Route>
        <Route path="/booking" element={<BookingPage  />}></Route>
    </Routes>
  <Footer />
    </BrowserRouter>
    
  );
}

export default App;
