import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
import DashboardLayout from "./components/layouts/DashboardLayout";

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <DashboardLayout>
                {route.element}
              </DashboardLayout>
            }
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
