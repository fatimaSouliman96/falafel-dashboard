import Store from "../pages/Store";
import { routerAdd } from "./routerAdd";
import { routerMainStore } from "./routerMain";

export const routerStore = 
[
    {
    path: "/falafel-dashboard/main-store",
    element: <Store />,
    children: [
        ...routerMainStore,
        ...routerAdd
    ]
    }
]