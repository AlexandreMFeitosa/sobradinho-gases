import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '../components/layout/MainLayout';

import Home from '../pages/Home';
import Products from '../pages/Products';
import ProductDetails from '../pages/ProductDetail';
import Rental from '../pages/Rental';
import Sectors from '../pages/Sectors';
import About from '../pages/About';
import FAQ from '../pages/FAQ';
import Contact from '../pages/Contact';
import SectorDetails from '../pages/Sectors/Details';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/produtos', element: <Products /> },
      { path: '/produto/:slug', element: <ProductDetails /> },
      { path: '/locacao', element: <Rental /> },
      { path: '/segmentos', element: <Sectors /> },
      { path: '/segmentos/:id', element: <SectorDetails /> },
      { path: '/sobre', element: <About /> },
      { path: '/faq', element: <FAQ /> },
      { path: '/contato', element: <Contact /> },
    ],
  },
]);