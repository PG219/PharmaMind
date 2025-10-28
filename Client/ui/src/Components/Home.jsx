import React from "react";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">PharmaMind Dashboard</h1>
      <p className="text-gray-600 mt-2">
        Search for a molecule to explore new drug repurposing opportunities.
      </p>
      {/* Include your SearchBar + Results here */}
    </div>
  );
}
