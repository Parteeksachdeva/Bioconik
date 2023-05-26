import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <section className="flex flex-col items-center w-full">
        <Navbar />
        <Hero />
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
