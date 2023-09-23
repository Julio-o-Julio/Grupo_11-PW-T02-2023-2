import { Outlet } from "react-router-dom";

import "./styles/App.css";

function App() {
  return (
    <main className="Main">
      <Outlet />
    </main>
  );
}

export default App;
