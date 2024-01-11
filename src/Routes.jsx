import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import { routerHome } from './pages/Home/routes/routesHome.jsx';
import { routerMainPro } from './modules/ProductMang/routes/routerMainPro.jsx';
import { routerMainSuppliers } from './modules/SuppliersMang/routes/routerMainSuppliers.jsx';
import { routerPaidBill } from './modules/PurchaseInvoicesMang/routes/routerPaidBill.jsx';
import { routerPartlyBill } from './modules/PurchaseInvoicesMang/routes/routerPartlyBill.jsx';
import { routerProfile } from './pages/Profile/routes/routerProfile.jsx';
import { routerAllBills } from './modules/PurchaseInvoicesMang/routes/routerAllBills.jsx';
import { routerDatils } from './modules/PurchaseInvoicesMang/routes/routerDatils.jsx'
import { routerAddBill } from './modules/PurchaseInvoicesMang/routes/routerAddBill.jsx'
import { routerMainSales } from './modules/SalesInvoicesMang/routes/mainSalesRouter.jsx';
import { routerStore } from './modules/StoreMang/routes/routerStore.jsx';
import { routerEditBill } from './modules/PurchaseInvoicesMang/routes/routerEditBill.jsx';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [ 
            ...routerHome,
            ...routerMainPro,
            ...routerMainSuppliers,
            ...routerStore,
            ...routerAllBills,
            ...routerPaidBill,
            ...routerPartlyBill,
            ...routerDatils,
            ...routerProfile,
            ...routerAddBill,
            ...routerEditBill,
            ...routerMainSales,
            
        ]
    },
  ]);