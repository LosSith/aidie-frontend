import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import UserNav from "../UserNav/UserNav";
import { useContext } from "react";
import { AppContext } from "../Contexto/AppContext";

const Layout = () => {
	const { isLoggedIn } = useContext(AppContext); // Consumir el estado de inicio de sesión

	return (
		<>
			{isLoggedIn ? <UserNav /> : <Nav />}{" "}
			{/* Mostrar Nav2 si está logueado, sino Nav1 */}
			<main className="main-layout">
				<Outlet />
			</main>
		</>
	);
};
export default Layout;
