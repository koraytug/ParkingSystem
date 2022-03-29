import Header from "./components/header/header";
import { Routes, Route } from "react-router-dom";
import GetTicket from "./pages/getticket/getticket";
import HomePage from "./pages/homepage/homepage";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/get-ticket" element={<GetTicket />} />
      </Routes>
    </div>
  );
}

export default App;
