// apps/user/src/App.tsx
import './index.css';

function App() {
  const games = [
    "Basketball (Men)", "Basketball (Women)", "Volleyball (Men)", 
    "Volleyball (Women)", "Football", "Taekwondo", "Chess", "Esports"
  ];

  return (
    <div className="carousel-container">
      {games.map((game, index) => (
        <div key={index} className="game-card">
          <h2>{game}</h2>
          <p>Click for Results</p>
        </div>
      ))}
    </div>
  );
}

export default App;