import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../components/Home/Home";
import Blog from "../components/Blog/Blog";
import Login from "../components/Loginpage/Login/Login";
import LoginPage from "../components/Loginpage/LoginPage";
import Registration from "../components/Loginpage/Registration/Registration";
import Chef from "../components/Others/Chef/Chef";
// import ChefRecipies from "../components/ChefRecipies/ChefRecipies";
import Errorpage from "../components/ErrorPage/ErroePage";
import ChefRecipies from "../components/Others/Chef/ChefRecipies";

const router = createBrowserRouter([
    {
        path:'/',
        element:<LoginPage></LoginPage>,
        errorElement:<Errorpage></Errorpage>,
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
        errorElement:<Errorpage></Errorpage>,
        children: [
            {
                path: '/home',
                element: <Home></Home>,
            },
            {
                path:'/chefRecipes/:id',
                element:<ChefRecipies></ChefRecipies>,
                loader:({params}) => fetch(`https://the-recipes-server-somaiyai342-gmailcom.vercel.app/chef/${params.id}`)
            }
        ]
    },
    {
        path: '/blog',
        element: <Blog></Blog>
    },


]);


export default router