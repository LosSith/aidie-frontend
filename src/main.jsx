import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Components/Home/Home";
import WhoIsAidia from "./Components/WhoIsAidia/WhoIsAidia";
import Layout from "./Components/Layout/Layout";
import Events from "./Components/Events/Events";

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
				element: <Events />
			},
			{
				path: "who-is-aidia",
				element: <WhoIsAidia />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)