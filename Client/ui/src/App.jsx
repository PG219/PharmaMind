// App.jsx
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./Components/Home";


const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />, // main dashboard page
  },
  // {
  //   path: "/report/:id",
  //   element: <ReportViewer />, // open specific saved report
  // },
  // {
  //   path: "/saved",
  //   element: <SavedReports />, // list of all saved reports
  // },
  {
    path: "*",
    element: <div className="p-10 text-center text-gray-600">404 — Page not found</div>,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}