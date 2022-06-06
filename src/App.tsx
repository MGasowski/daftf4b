import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import routes from "./routes";

function App() {
  return (
    <Layout>
      <Routes>
        {routes.map((route) => (
          <Route
            path={route.route}
            element={route.component}
            key={route.name}
          />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
