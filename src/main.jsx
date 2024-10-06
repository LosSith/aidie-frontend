import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";
import Events from "./Components/Events/Events";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import { AppProvider } from "../src/Components/Contexto/AppContext";
import WhoIsAidie from "./Components/WhoIsAidie/WhoIsAidie";
import UserProfile from "./Components/UsersProfile/UsersProfile";
import FormPostBuy from "./Components/FormPostBuy/FormPostBuy";
import FormPostBuy2 from "./Components/FormPostBuy/FormPostBuy2";
import FormPostBuy3 from "./Components/FormPostBuy/FormPostBuy3";
console.log("main.jsx is running");

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "events",
				element: <Events />,
			},
			{
				path: "who-is-aidie",
				element: <WhoIsAidie />,
			},
			{
				path: "register",
				element: <Register />,
			},
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "profile",
				element: <UserProfile />,
			},
			{
				path: "post.buy",
				element: <FormPostBuy />,
			},
			{
				path: "post.buy2",
				element: <FormPostBuy2 />,
			},
			{
				path: "post.buy3",
				element: <FormPostBuy3 />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AppProvider>
			<RouterProvider router={router} />
		</AppProvider>
	</React.StrictMode>
);
