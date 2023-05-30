import { createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./sass/main.scss";



const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
