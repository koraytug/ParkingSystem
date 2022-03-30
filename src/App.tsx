import Header from "./components/header/header";
import { Routes, Route } from "react-router-dom";
import GetTicket from "./pages/getticket/getticket";
import HomePage from "./pages/homepage/homepage";
import CalculatePrice from "./pages/calculate-price/calculate-price";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/get-ticket" element={<GetTicket />} />
        <Route path="/calculate-price" element={<CalculatePrice />} />
      </Routes>
    </div>
  );
}

export default App;
