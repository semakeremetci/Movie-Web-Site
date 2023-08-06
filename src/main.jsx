import React from "react";
import ReactDOM from "react-dom/client";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
// import Home from "./pages/Home.jsx";
// import LogInPage from "./pages/LogInPage.jsx";
// import SignUpPage from "./pages/SignUpPage.jsx";
import { BrowserRouter } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/Movie-Web-Site/",
//     element: <App />,
//     children: [
//       {
//         path: "/Movie-Web-Site/",
//         element: <Home />,
//       },
//       {
//         path: "/Movie-Web-Site/LogInPage",
//         element: <LogInPage />,
//       },
//       {
//         path: "/Movie-Web-Site/SignUpPage",
//         element: <SignUpPage />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
