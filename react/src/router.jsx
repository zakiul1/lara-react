import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import GuestLayout from "./layout/GuestLayout";
import ProtectedLayout from "./layout/ProtectedLayout";

const router = createBrowserRouter([
	{
		path: '/',
		element: <GuestLayout />,
		children: [
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/signup',
				element: <SignUp />,
			},
		],
	},
	{
		path: '/',
		element: <ProtectedLayout />,
		children: [
			{
				path: '/home',
				element: <Home />,
			},
			{
				path: '/profile',
				element: <Home />,
			},
		],
	},
]);

export default router;