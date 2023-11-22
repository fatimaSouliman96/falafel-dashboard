import MainPro from "../pages/MainPro";
import { routerAddProduct } from "./routerAddPro";
import { routerEditProduct } from "./routesEditProduct";
import { routerProduct } from "./routesProduct";

export const routerMainPro = 
[
    {
    path: "/falafel-project/product",
    element: <MainPro />,
    children: [
        ...routerProduct,
        ...routerAddProduct,
        ...routerEditProduct
    ]
    }
]