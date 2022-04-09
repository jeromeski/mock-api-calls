import "./styles.css";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TourPackages from "./pages/TourPackages";
import TourPackagesDetails from "./pages/TourPackageDetails";

function App() {
  return (
    <BrowserRouter>
      <main id="content" className="site-main">
        <Routes>
          <Route exact path="/" element={<TourPackages />} />
          <Route
            exact
            path="/packages/:slug"
            element={<TourPackagesDetails />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

const queryClient = new QueryClient();

export default function () {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}
