import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import {AboutUs, Hero, Posts} from "/pages";
import {Layout} from "./pages/Layout";


export const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/info",
                element: <AboutUs/>,
            },
            {
                path: "/home",
                element: <Hero/>
            },
            {
                path: "/posts",
                element: <Posts/>
            }]
    }
]);