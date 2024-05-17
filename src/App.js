import "./App.css";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Map from "./components/map/Map";
import Dashboard from "./components/dashboard/Dashboard";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home text={"Hello World"} />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/map",
    element: <Map />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
