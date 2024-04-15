import { useState, useEffect } from "react";
import { Li } from "./li-firma.jsx";
import { firmaData } from "../../data/firmaData.jsx";
import { Logos } from "./logos.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
export const Firma = () => {
	const [active, setActive] = useState("0");
	const [data, setData] = useState(0);
	const activeList = firmaData[active];

	useEffect(() => {
		setData(activeList);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [active]);
	useGSAP(() => {
		const section = document.querySelector(".animation");
		const section2 = document.querySelector(".animation2");
		gsap.fromTo(
			section,
			{ scale: 0.7, opacity: 0 },
			{ scale: 1, opacity: 1, duration: 0.8 }
		);
		gsap.fromTo(section2, { opacity: 0 }, { opacity: 1, duration: 0.8 });
	}, [active]);
	const handleClick = (e) => {
		setActive(e.target.id);
	};

	return (
		<section className="grow">
			<h1 className="text-4xl w-fit mx-auto mt-8 lg:text-left md:text-5xl  xl:text-6xl lg:ml-32 xl:mt-12 font-belle  text-slate-100 ">
				O FIRMIE
			</h1>
			<div className="flex flex-col items-center mt-8 md:mt-12 xl:flex-row xl:items-start">
				{Logos(active)}
				<div className="flex flex-col mt-6 md:mt-14 xl:mt-0 xl:pl-40">
					<ul className="flex justify-around text-slate-50 font-bold tracking-widest text-sm mx-16 md:mx-60 md:text-base md:h-9 xl:text-2xl xl:justify-normal xl:h-10 xl:gap-10 xl:mx-0 xl:mr-40">
						{firmaData.map((element, index) => {
							return (
								<Li
									element={element}
									handleClick={handleClick}
									active={active}
									key={index}
								/>
							);
						})}
					</ul>
					<h2 className="text-5xl text-center xl:text-start md:text-6xl xl:text-[80px] mx-auto font-belle text-slate-50 mt-5 xl:mx-0 xl:w-fit brush animation2">
						<strong className="font-normal">{data.title}</strong>
					</h2>
					<p className="text-center mx-6 md:mx-24 text-xl md:text-base xl:text-start xl:mx-0 xl:mr-0 xl:text-xl xl:w-3/5 text-slate-50">
						{data.description}
					</p>
				</div>
			</div>
		</section>
	);
};
