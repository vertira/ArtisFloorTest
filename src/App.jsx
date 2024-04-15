import { Navigation } from "./components/Navigation.jsx";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/home.jsx";
import { Wycena } from "./pages/wycena/wycena.jsx";
import { Firma } from "./pages/firma/firma.jsx";
import { Contact } from "./pages/Contact.jsx";
import { useBackground } from "./hook/useBackground.jsx";
import { BackgroundVideo } from "./pages/home/backgroundVideo.jsx";
import "./index.css";

export const App = () => {
	const backgroundClass = useBackground();
	return (
		<div
			className={`bg-center ${
				backgroundClass ? backgroundClass : null
			} bg-cover`}
		>
			{backgroundClass ? "" : <BackgroundVideo />}
			<div className="min-h-screen flex flex-col backdrop-brightness-50 backdrop-saturate-50 backdrop-contrast-150 ">
				<Navigation />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/firma" element={<Firma />} />
					<Route path="/wycena" element={<Wycena />} />
					<Route path="/kontakt" element={<Contact />} />
				</Routes>
			</div>
		</div>
	);
};
