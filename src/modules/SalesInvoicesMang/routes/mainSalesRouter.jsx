import MainSales from "../Pages/MainSales";
import { routerAddBillSales } from "./addBillSaleRouter";
import { routerEditBillSales } from "./editBillRouter";
import { routerSalesBill } from "./salesBillRouter";

export const routerMainSales =
    [
        {
            path: "/falafel-dashboard/main/main-sales",
            element: <MainSales />,
            children: [
                ...routerSalesBill,
                ...routerAddBillSales,
                ...routerEditBillSales
            ]
        }
    ]