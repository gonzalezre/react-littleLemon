import logo from './logo.svg';
import './App.css';
import './css/styles.css';
import { Footer, Header, Main, Nav } from './components';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      
      <Header />
      <Main />
      <Footer />
  
    </BrowserRouter>
    
  );
}

export default App;
