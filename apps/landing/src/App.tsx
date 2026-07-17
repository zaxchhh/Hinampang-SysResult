/* eslint-disable @typescript-eslint/no-unused-vars */
import './index.css';

function App() {
  const buttonStyle: React.CSSProperties = {
    padding: '14px 28px', // Enlarged padding
    fontSize: '16px',
    fontWeight: '600',
    borderRadius: '8px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#ffffff',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)'
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    e.currentTarget.style.transform = 'scale(1.05)';
    e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
  };

  return (
    <div className="landing-container">
      <header className="nav-container">
        {/* Logos from the public folder */}
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <img src="/wvsulogo.png" alt="WVSU Logo" style={{ height: '60px' }} />
          <img src="/csclogo.jpg" alt="CSC Logo" style={{ height: '60px' }} />
        </div>

        {/* Enlarged Buttons */}
        <div style={{ display: 'flex', gap: '20px' }}>
          <button style={buttonStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => window.location.href = 'http://localhost:5173'}>Admin</button>
          <button style={buttonStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => window.location.href = 'http://localhost:5174'}>Student</button>
        </div>
      </header>
    </div>
  );
}

export default App;