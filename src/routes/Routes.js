import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Login from "../Login/Login";
import AddReview from "../Pages/AddReview/AddReview";
import AddService from "../Pages/AddService/AddService";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home";
import ServiceCardDetail from "../Pages/Services/ServiceCardDetail";
import Services from "../Pages/Services/Services";
import Signup from "../Signup/Signup";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/services/:id',
                element: <ServiceCardDetail></ServiceCardDetail>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/addreview',
                element: <AddReview></AddReview>
            },
            {
                path: '/addservice',
                element: <AddService></AddService>
            }
        ]
    }
]);
export default router;