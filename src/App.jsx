import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/Home";
import ServicesPage from "./pages/Services";
import RootLayout from "./pages/Root";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import RoomPage from "./pages/Room";


const router = createBrowserRouter([
  { 
    path: '/', 
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage />},
      { path: '/services', element: <ServicesPage />},
      { path: '/services/#room', element: <RoomPage />},
      { path: '/about', element: <AboutPage /> },
      { path: '/contact', element: <ContactPage />}
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
