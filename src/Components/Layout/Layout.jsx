import { Outlet } from "react-router-dom";
import Nav from '../Nav/Nav'


const Layout = () => {
	return (
		<>
			<Nav />
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default Layout;
