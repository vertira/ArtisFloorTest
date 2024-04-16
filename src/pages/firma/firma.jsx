import { useState, useEffect } from "react";
import { firmaData } from "../../data/firmaData.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Helmet } from "react-helmet-async";
import loadable from "@loadable/component";
const Logos = loadable(() => import("./logos.jsx"), {
	resolveComponent: (components) => components.Logos,
});
const FirmaList = loadable(() => import("./FirmaList.jsx"), {
	resolveComponent: (components) => components.FirmaList,
});
const FirmaDescription = loadable(() => import("./FirmaDescription.jsx"), {
	resolveComponent: (components) => components.FirmaDescription,
});
gsap.registerPlugin(useGSAP);
export const Firma = () => {
	const [active, setActive] = useState("0");
	const [data, setData] = useState(0);
	const activeList = firmaData[active];

	useEffect(() => {
		setData(activeList);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [active]);
	// useGSAP(() => {
	// 	const section = document.querySelector(".animation");
	// 	const section2 = document.querySelector(".animation2");
	// 	gsap.fromTo(
	// 		section,
	// 		{ scale: 0.7, opacity: 0 },
	// 		{ scale: 1, opacity: 1, duration: 0.8 }
	// 	);
	// 	gsap.fromTo(section2, { opacity: 0 }, { opacity: 1, duration: 0.8 });
	// }, [active]);
	const handleClick = (e) => {
		setActive(e.target.id);
	};

	return (
		<section className="grow">
			<Helmet>
				<title>Artis Floor - o firmie</title>
				<meta
					name="description"
					content="Profesjonalne usługi cyklinowania podłóg i schodów drewnianych."
				/>
				<meta
					name="keywords"
					content="cyklinowanie podłóg, cyklinowanie schodów, odnawianie parkietu, renowacja podłóg drewnianych, artis floor, cyklinowanie kalisz, schody kalisz, podłoga kalisz"
				/>
				<meta property="og:title" content="Artis Floor - o firmie" />
				<meta
					property="og:description"
					content="Profesjonalne usługi cyklinowania podłóg i schodów drewnianych."
				/>
				<meta
					property="og:image"
					content="https://artis-floor-test.vercel.app/assets/firma/firma.svg"
				/>
			</Helmet>
			<h1 className="text-4xl w-fit mx-auto mt-8 lg:text-left md:text-5xl  xl:text-6xl lg:ml-32 xl:mt-12 font-belle  text-slate-100 ">
				O FIRMIE
			</h1>
			<div className="flex flex-col items-center mt-8 md:mt-12 xl:flex-row xl:items-start">
				<Logos active={active} />
				<div className="flex flex-col mt-6 md:mt-14 xl:mt-0 xl:pl-40">
					<FirmaList
						firmaData={firmaData}
						handleClick={handleClick}
						active={active}
					/>
					<FirmaDescription data={data} />
				</div>
			</div>
		</section>
	);
};
