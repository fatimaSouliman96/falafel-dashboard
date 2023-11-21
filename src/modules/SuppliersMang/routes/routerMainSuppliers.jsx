import MainSuppliers from "../pages/MainSuppliers";
import { routerAddSupplier } from "./routerAddSupplier";
import { routerEditSupplier } from "./routerEditSupplier";
import { routerSuppliersMang } from "./routerSuppliersMang";

export const routerMainSuppliers = 
[
    {
    path: "suppliers",
    element: <MainSuppliers />,
    children: [
        ...routerSuppliersMang,
        ...routerAddSupplier,
        ...routerEditSupplier
    ]
    }
]