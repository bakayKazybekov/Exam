import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./LoginPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <div>Главное</div>
    },
    {
        path: '/login',
        element: <LoginPage/>
    },
])