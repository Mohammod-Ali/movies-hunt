import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Home from '../src/Pages/Home/Home';
import Ticket from '../src/Pages/Ticket/Ticket'
import { useState } from "react";

function App() {
  const [movieDetails, setMovieDetails] = useState({})
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home setMovieDetails={setMovieDetails}></Home>,
    },
    {
      path: "/ticket",
      element: <Ticket movieDetails={movieDetails}></Ticket>
    }
  ]);
  
  return (
    <div className="App">
       <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
