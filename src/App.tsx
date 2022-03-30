import Header from "./components/header/header";
import { Routes, Route } from "react-router-dom";
import GetTicket from "./pages/getticket/getticket";
import HomePage from "./pages/homepage/homepage";
import CalculatePrice from "./pages/calculate-price/calculate-price";
import Payment from "./pages/payment/payment";
import CheckTicketState from "./pages/check-ticket-state/check-ticket-state";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/get-ticket" element={<GetTicket />} />
        <Route path="/calculate-price" element={<CalculatePrice />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/check-ticket-state" element={<CheckTicketState />} />
      </Routes>
    </div>
  );
}

export default App;
