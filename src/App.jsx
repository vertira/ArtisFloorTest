// import { Navigation } from "./components/Navigation.jsx";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/home.jsx";
import { useBackground } from "./hook/useBackground.jsx";
import loadable from "@loadable/component";
import "./index.css";
import { useParagAnimation } from "./pages/home/useParagAnimation.jsx";
import { Helmet, HelmetProvider } from "react-helmet-async";
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
					<Route
						path="/"
						element={
							<HelmetProvider>
								<Home>
									<Helmet>
										<title>Artis Floor - cyklinowanie</title>
										<meta
											name="description"
											content="Profesjonalne usługi cyklinowania podłóg i schodów drewnianych."
										/>
										<meta
											name="keywords"
											content="cyklinowanie podłóg, cyklinowanie schodów, odnawianie parkietu, renowacja podłóg drewnianych, artis floor, cyklinowanie kalisz, schody kalisz, podłoga kalisz"
										/>
										<meta
											property="og:title"
											content="Artis Floor - cyklinowanie"
										/>
										<meta
											property="og:description"
											content="Profesjonalne usługi cyklinowania podłóg i schodów drewnianych."
										/>
										<meta
											property="og:image"
											content="https://artis-floor-test.vercel.app/assets/firma/firma.svg"
										/>
									</Helmet>
								</Home>
							</HelmetProvider>
						}
					/>
					<Route path="/firma" element={<Firma />} />
					<Route path="/wycena" element={<Wycena />} />
					<Route path="/kontakt" element={<Contact />} />
				</Routes>
			</div>
		</div>
	);
};
