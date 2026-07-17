import { db } from "@hinampang/firebase-sdk";

function App() {
  console.log("Firebase DB Instance:", db);

  return (
    <div style={{ padding: '50px', fontFamily: 'sans-serif' }}>
      <h1>Admin Portal</h1>
      <p>If you see this, the React app is rendering!</p>
      {db ? (
        <p style={{ color: 'green' }}>✓ Firebase is connected.</p>
      ) : (
        <p style={{ color: 'red' }}>✗ Firebase failed to load.</p>
      )}
    </div>
  );
}

export default App;