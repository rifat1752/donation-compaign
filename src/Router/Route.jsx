
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import Donation from '../Pages/Donation/Donation';
import Statistics from '../Pages/Statistics/Statistics';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Card from '../Pages/card/card';

const myCreateRoute = createBrowserRouter([
{
    path:"/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:"/",
            element: <Home></Home>,
            loader: ()=> fetch('cards.json')
        },
        {
            path:"/Donation",
            element: <Donation></Donation>
        },
        {
            path: "/Statistics",
            element: <Statistics></Statistics>
        },
        {
            path:"/cards/:id",
            element: <Card></Card>,
            loader:()=>fetch('/cards.json')
        }

    ]
}
])

export default myCreateRoute;