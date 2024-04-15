// import { Navigation } from "./components/Navigation.jsx";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/home.jsx";
// import { Wycena } from "./pages/wycena/wycena.jsx";
// import { Firma } from "./pages/firma/firma.jsx";
// import { Contact } from "./pages/Contact.jsx";
import { useBackground } from "./hook/useBackground.jsx";
// import { BackgroundVideo } from "./pages/home/backgroundVideo.jsx";
import loadable from "@loadable/component";
import "./index.css";
import { useParagAnimation } from "./pages/home/useParagAnimation.jsx";
const Navigation = loadable(() => import("./components/Navigation.jsx"), {
	resolveComponent: (components) => components.Navigation,
});
const BackgroundVideo = loadable(
	() => import("./pages/home/backgroundVideo.jsx"),
	{
		resolveComponent: (components) => components.BackgroundVideo,
	}
);
const Firma = loadable(() => import("./pages/firma/firma.jsx"), {
	resolveComponent: (components) => components.Firma,
});
const Contact = loadable(() => import("./pages/Contact.jsx"), {
	resolveComponent: (components) => components.Contact,
});
const Wycena = loadable(() => import("./pages/wycena/wycena.jsx"), {
	resolveComponent: (components) => components.Wycena,
});

export const App = () => {
	const animation = useParagAnimation();
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
