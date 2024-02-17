import Main from "../Main";
import { routerHome } from '../../Home/routes/routesHome.jsx';
import { routerMainPro } from '../../../modules/ProductMang/routes/routerMainPro.jsx';
import { routerMainSuppliers } from '../../../modules/SuppliersMang/routes/routerMainSuppliers.jsx';
import { routerPaidBill } from '../../../modules/PurchaseInvoicesMang/routes/routerPaidBill.jsx';
import { routerPartlyBill } from '../../../modules/PurchaseInvoicesMang/routes/routerPartlyBill.jsx';
import { routerProfile } from '../../Profile/routes/routerProfile.jsx';
import { routerAllBills } from '../../../modules/PurchaseInvoicesMang/routes/routerAllBills.jsx';
import { routerDatils } from '../../../modules/PurchaseInvoicesMang/routes/routerDatils.jsx'
import { routerAddBill } from '../../../modules/PurchaseInvoicesMang/routes/routerAddBill.jsx'
import { routerMainSales } from '../../../modules/SalesInvoicesMang/routes/mainSalesRouter.jsx';
import { routerStore } from '../../../modules/StoreMang/routes/routerStore.jsx';
import { routerEditBill } from '../../../modules/PurchaseInvoicesMang/routes/routerEditBill.jsx';
import { routerUnPaid } from "../../../modules/PurchaseInvoicesMang/routes/routerUnPaid.jsx";

export const routerMain = 
[
    {
    path: "/falafel-dashboard/main",
    element: <Main />,
    children: [ 
            
        ...routerHome,
        ...routerMainPro,
        ...routerMainSuppliers,
        ...routerStore,
        ...routerAllBills,
        ...routerPaidBill,
        ...routerPartlyBill,
        ...routerUnPaid,
        ...routerDatils,
        ...routerProfile,
        ...routerAddBill,
        ...routerEditBill,
        ...routerMainSales,
        
    ]
    }
]