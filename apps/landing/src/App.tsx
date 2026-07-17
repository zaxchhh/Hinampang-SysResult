function Landing() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1>Hinampang SysResult</h1>
      <p>Select your portal:</p>
      
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <button onClick={() => window.location.href = 'http://localhost:5173'}>
          Go to Admin Portal
        </button>
        <button onClick={() => window.location.href = 'http://localhost:5174'}>
          Go to User Portal
        </button>
      </div>
    </div>
  );
}
export default Landing;