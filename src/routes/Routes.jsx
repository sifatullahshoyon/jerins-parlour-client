import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import MainLayout from "../layouts/MainLayout";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout />,
        errorElement : 'error',
        children : [
            {
                path : '/',
                element : <Home />,
            }
        ]
    }
]);