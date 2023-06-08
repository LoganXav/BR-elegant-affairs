import { lazy, Suspense } from "react";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const Gallery = lazy(() => import("./pages/Gallery"));
import "./sass/main.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/gallery"
            element={
              <Suspense
                fallback={
                  <div className="circle">
                    <CircularProgress />
                  </div>
                }
              >
                <Gallery />
              </Suspense>
            }
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
