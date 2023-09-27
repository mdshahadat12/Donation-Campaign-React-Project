import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import Donation from "../Pages/Donation";
import Statistics from "../Pages/Statistics";
import CardDatails from "../Pages/CardDatails";
import Erorr from "../Pages/Erorr";

const Router = createBrowserRouter([
    {
        path:"/",
        element: <HomeLayout></HomeLayout>,
        errorElement: <Erorr></Erorr>,
        children:[
            {
                path:"/",
                element: <Home></Home>,
            },
            {
                path: "/donation",
                element: <Donation></Donation>,
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>
            },
            {
                path: "/details/:id",
                element: <CardDatails></CardDatails>,
                loader: ()=> fetch('/apiData.json')
            },
        ]
    }
])
export default Router;