import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Home from "./components/Home";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <section className="flex flex-col items-center w-full">
        <Navbar />
        <Home />
      </section>
    ),
  },
  {
    path: "/products",
    element: (
      <section className="flex flex-col items-center w-full">
        <Navbar />
        <Products />
      </section>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
