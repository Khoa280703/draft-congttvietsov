import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicInterface from "@/pages/PublicInterface";
import InternalInterface from "@/pages/InternalInterface";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes - All handled by PublicInterface */}
        <Route path="/*" element={<PublicInterface />} />

        {/* Internal Routes - All handled by InternalInterface */}
        <Route path="/internal/*" element={<InternalInterface />} />
      </Routes>
    </Router>
  );
}

export default App;
