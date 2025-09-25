import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicInterface from "@/pages/PublicInterface";
import InternalInterface from "@/pages/InternalInterface";
import { ROUTES } from "@/config/routes";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path={ROUTES.PUBLIC.HOME} element={<PublicInterface />} />
        <Route path={ROUTES.PUBLIC.ABOUT} element={<PublicInterface />} />
        <Route
          path={ROUTES.PUBLIC.PRODUCTS_SERVICES}
          element={<PublicInterface />}
        />
        <Route path={ROUTES.PUBLIC.NEWS} element={<PublicInterface />} />
        <Route path={ROUTES.PUBLIC.CONTACT} element={<PublicInterface />} />

        {/* Internal Routes */}
        <Route path={ROUTES.INTERNAL.HOME} element={<InternalInterface />} />
        <Route path={ROUTES.INTERNAL.ABOUT} element={<InternalInterface />} />
        <Route path={ROUTES.INTERNAL.NEWS} element={<InternalInterface />} />
        <Route
          path={ROUTES.INTERNAL.DEVELOPMENT}
          element={<InternalInterface />}
        />
        <Route path={ROUTES.INTERNAL.REPORTS} element={<InternalInterface />} />
        <Route
          path={ROUTES.INTERNAL.APPLICATIONS}
          element={<InternalInterface />}
        />
        <Route path={ROUTES.INTERNAL.SEARCH} element={<InternalInterface />} />
      </Routes>
    </Router>
  );
}

export default App;
