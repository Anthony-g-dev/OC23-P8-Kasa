import '../css/reset.css'
import '../css/main.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import { Error } from './pages/Error';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Accomodation } from './pages/Accommodation';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error/>,
    element: <Home/>,
    loader: () => fetch("/src/data/logements.json"),
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/accomodation",
    element: <Accomodation/>,
    children: [
      {
        path: ":id",
        element: <Accomodation/>
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App