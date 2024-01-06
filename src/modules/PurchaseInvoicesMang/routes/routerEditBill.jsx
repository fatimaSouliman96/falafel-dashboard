import EditBill from "../pages/editBill/EditBill"
import { routerEditPriceBill } from "./routerEditPriceBill"
import { routerEditSuppBill } from "./routerEditSuppBill"
import { routerFormEditPro } from "./routerFormEditPro"

export const routerEditBill = 
[
    {
    path: "/falafel-dashboard/edit-bill",
    element: <EditBill />,
    // children: [
    //     ...routerEditSuppBill,
    //     ...routerEditPriceBill,
    //     ...routerFormEditPro
    // ]
    }
]