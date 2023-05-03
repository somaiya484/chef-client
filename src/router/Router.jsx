import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../components/Home/Home";
import Blog from "../components/Blog/Blog";
import Login from "../components/Loginpage/Login/Login";
import LoginPage from "../components/Loginpage/LoginPage";
import Registration from "../components/Loginpage/Registration/Registration";
import Chef from "../components/Others/Chef/Chef";
import ChefRecipies from "../components/ChefRecipies/ChefRecipies";

const router = createBrowserRouter([
    {
        path:'/',
        element:<LoginPage></LoginPage>,
        children:[
            {
                path:'/',
                element:<Navigate to='/home'></Navigate>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Registration></Registration>
            }
        ]
    },

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home></Home>,
            },
        ]
    },
    {
        path: '/blog',
        element: <Blog></Blog>
    },
    // {
    //     path: '/chef/:id',
    //     element: <ChefRecipies></ChefRecipies>,
    //     loader:({params}) => fetch(`http://localhost:5000/chef/${params.id}`)
    // },
    {
        path:'/chef/:id',
        element:<Chef></Chef>,
        loader:({params}) => fetch(`http://localhost:5000/chef/${params.id}`)
    }


]);


export default router