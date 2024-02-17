import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import { routerMain } from './pages/main/routes/routerMain.jsx';

export const router = createBrowserRouter([
    {
      path: "/falafel-dashboard/",
      element: <App />,
      
    },
    ...routerMain,

  ]);