import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.jsx";
import Donation from "./pages/Donation.jsx";
import Statistics from "./pages/Statistics.jsx";
import AppLayout from "./components/AppLayou";
import {
  DonationDetails,
  loader as donationLoader,
} from "./pages/DonationDetails";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/donation",
        element: <Donation />,
      },
      {
        path: "/donation/:id",
        element: <DonationDetails />,
        loader: donationLoader,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
