import { Navbar } from "@hinampang/ui-components";

function App() {
  return (
    <div>
      {/* This Navbar is coming from your shared package */}
      <Navbar /> 
      
      <main style={{ padding: '20px' }}>
        <h1>User Dashboard</h1>
        <p>This content is specific to the User Portal.</p>
      </main>
    </div>
  );
}

export default App;