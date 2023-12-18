import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import { routerHome } from './pages/Home/routes/routesHome.jsx';
import { routerMainPro } from './modules/ProductMang/routes/routerMainPro.jsx';
import { routerMainSuppliers } from './modules/SuppliersMang/routes/routerMainSuppliers.jsx';
import { routerMainStore } from './modules/StoreMang/routes/routerMain.jsx';
import { routerPaidBill } from './modules/BillsMang/routes/routerPaidBill.jsx';
import { routerPartlyBill } from './modules/BillsMang/routes/routerPartlyBill.jsx';
import { routerProfile } from './pages/Profile/routes/routerProfile.jsx';
import { routerAllBills } from './modules/BillsMang/routes/routerAllBills.jsx';
import { routerDatils } from './modules/BillsMang/routes/routerDatils.jsx'
import { routerAddBill } from './modules/BillsMang/routes/routerAddBill.jsx'
export const router = createBrowserRouter([
    {
      path: "/falafel-dashboard/",
      element: <App />,
      children: [ 
            ...routerHome,
            ...routerMainPro,
            ...routerMainSuppliers,
            ...routerMainStore,
            ...routerAllBills,
            ...routerPaidBill,
            ...routerPartlyBill,
            ...routerDatils,
            ...routerProfile,
            ...routerAddBill
        ]
    },
  ]);