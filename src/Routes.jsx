import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import { routerProduct } from './modules/ProductMang/routes/routesProduct.jsx';
import { routerHome } from './pages/Home/routes/routesHome.jsx';
import { routerMainPro } from './modules/ProductMang/routes/routerMainPro.jsx';
import { routerMainSuppliers } from './modules/SuppliersMang/routes/routerMainSuppliers.jsx';


export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [ 
            ...routerHome,
            ...routerMainPro,
            ...routerMainSuppliers

        ]
    },
  ]);