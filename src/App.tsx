
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
