import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Home from '../src/Pages/Home/Home';
import Ticket from '../src/Pages/Ticket/Ticket'

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/ticket",
      element: <Ticket></Ticket>
    }
  ]);
  
  return (
    <div className="App">
       <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
