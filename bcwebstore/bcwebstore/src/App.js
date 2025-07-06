import logo from './logo.jpg';
import './App.css';
import { Link } from 'react-router-dom';
import FlashBar from "./FlashBar";


function App() {
  return (
    
    <div className="App">
      <FlashBar>
        🌟 Notifications will appear here once live 🌟 
      </FlashBar>
      <div id="navigation-bar">
        <Link to="/">
          <img src={logo} className="App-logo" alt="Bloom Circuit logo" />
        </Link>
      </div>
      <div id="nav-wrap">
      <nav id="main-nav">
        <ul className="nav-list">
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/Upcoming">Upcoming</a></li>
          <li><a href="/FAQ">FAQ</a></li>
          <li><a href="/Blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      </div>
      <div id="Main-body">
      <p id="eBay-link">
            This page is under construction. <br /><br />For current listings visit our{' '}
            <a
              href="https://www.ebay.com/usr/bloomcircuit"
              target="_blank"
              rel="noopener noreferrer"
            >
              eBay store
            </a>{' '}
            or <a href="mailto:info@bloom-circuit.com">email us</a>.
          </p>
        </div>
      <header className="App-header">
      <title>Bloom Circuit - Modded Handheld Consoles</title>
      </header>
      
    </div>
  );
}

export default App;
