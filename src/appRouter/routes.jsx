import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
} from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import NotFound from '../pages/NotFound';



const routes = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="*" element={<NotFound />} />
            </Route >
        )
    );
    return <RouterProvider router={router} />
}

export default routes;