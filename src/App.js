import logo from './logo.svg';
import './App.css';
import TinderCard from "./components/TinderCard";

function App() {
  const cards = [
    {
      image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
      color: '#55ccff'
    },
    {
      image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
      color: '#e8e8e8'
    },
    {
      image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
      color: '#0a043c'
    },
    {
      image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
      color: 'black'
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* Traversing through cards arrray using map function
      and populating card with different image and color */}

        {cards.map((card) => (
            <TinderCard image={card.image} color={card.color} />
        ))}
      </header>
    </div>
  );
}

export default App;
