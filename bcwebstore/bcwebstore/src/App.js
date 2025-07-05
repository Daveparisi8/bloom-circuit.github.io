import logo from './logo.jpg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <title>Bloom Circuit - Modded Handheld Consoles</title>
        <Link to="/">
          <img src={logo} className="App-logo" alt="Bloom Circuit logo" />
        </Link>

        <div id="Desc-wrapper">
          <p id="Main-landing-text">
            Bloom Circuit's webpage is coming soon
          </p>

          <p id="eBay-link">
            For active listings visit our{' '}
            <a
              href="https://www.ebay.com/usr/bloomcircuit"
              target="_blank"
              rel="noopener noreferrer"
            >
              eBay store
            </a>{' '}
            or <a href="mailto:info@bloom-circuit.com">email us</a>.
          </p>

          <p id="built-by">This webpage is built with React</p>
        </div>
      </header>
    </div>
  );
}

export default App;
