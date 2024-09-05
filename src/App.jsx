import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

function App() {
  const [selectedFilter, setSelectedFilter] = useState("1 Day");

  return (
    <div className="App bg-gradient-to-b from-gray-900 to-black min-h-screen text-gray-200">
      <Navbar selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
      <Dashboard selectedFilter={selectedFilter} />
    </div>
  );
}

export default App;
