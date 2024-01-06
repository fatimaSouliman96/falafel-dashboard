import AddBill from "../pages/addBill/AddBill";
import { routerAddPriceBill } from "./routerAddPriceBill";
import { routerAddSuppBill } from "./routerAddSuppBill";
import { routerFormAddPro } from "./routerFormAddPro";

export const routerAddBill = 
[
    {
    path: "/falafel-dashboard/add-bill",
    element: <AddBill />,
    children: [
        ...routerAddSuppBill,
        ...routerFormAddPro,
        ...routerAddPriceBill
    ]
    }
]