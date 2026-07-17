export const Navbar = () => (
  <nav style={{ padding: '1rem', background: '#333', color: '#fff', display: 'flex', gap: '20px' }}>
    <a href="/" style={{ color: 'white' }}>Home</a>
    <a href="/program" style={{ color: 'white' }}>Program</a>
    <a href="/schedule" style={{ color: 'white' }}>Schedule</a>
    <a href="/results" style={{ color: 'white' }}>Results</a>
    <button onClick={() => alert("Theme toggle clicked!")}>Toggle Theme</button>
  </nav>
);