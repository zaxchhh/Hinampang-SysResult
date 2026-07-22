/* eslint-disable @typescript-eslint/no-unused-vars */
import './index.css';

function App() {
  // Navigation handler
  const navigateTo = (url: string) => {
    window.location.href = url;
  };

  return (
    <main className="landing-container">
      {/* Central Content Area */}
      <div className="content-wrapper">
        <h1 className="main-title">Hinampang 2026</h1>
        <p className="theme-text">
          "Kadalag-an": Preparation Paves Triumph, Brotherhood Builds Champions."
        </p>

        {/* Buttons Section using the professional liquid-glass-button class */}
        <nav className="button-group" aria-label="Portal Navigation">
          <button 
            type="button"
            className="liquid-glass-button" 
            onClick={() => navigateTo('http://localhost:5173')}
            aria-label="Navigate to Admin Portal"
          >
            Admin Portal
          </button>
          
          <button 
            type="button"
            className="liquid-glass-button" 
            onClick={() => navigateTo('http://localhost:5174')}
            aria-label="Navigate to Student Portal"
          >
            Student Portal
          </button>
        </nav>
      </div>
    </main>
  );
}

export default App;