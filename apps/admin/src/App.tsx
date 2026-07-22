import { useState } from 'react';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const navItems = ['Home', 'Program', 'Schedule', 'Results', 'Settings', 'Logout'];

  // Sample Content for each tab
  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <h1>Dashboard Overview</h1>;
      case 'Program':
        return <h1>Event Program List</h1>;
      case 'Schedule':
        return <h1>Upcoming Match Schedule</h1>;
      case 'Results':
        return <h1>Event Scores</h1>;
      case 'Settings':
        return <h1>Account Settings</h1>;
      case 'Logout':
        return <h1>Are you sure you want to log out?</h1>;
      default:
        return <h1>Welcome to Hinampang 2026</h1>;
    }
  };

  return (
    <div className="admin-layout">
      <nav className="sidebar">
        <h2 style={{ padding: '20px', color: '#444' }}>Admin Panel</h2>
        {navItems.map((item) => (
          <div 
            key={item} 
            className={`nav-item ${activeTab === item ? 'active' : ''}`}
            onClick={() => setActiveTab(item)}
          >
            {item}
          </div>
        ))}
      </nav>

      <main className="main-content">
        <div className="content-card">
          {renderContent()}
          {/* You can add specific components here based on the activeTab */}
        </div>
      </main>
    </div>
  );
}

export default App;