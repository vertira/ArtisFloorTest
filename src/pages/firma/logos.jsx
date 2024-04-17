import { LazyLoadImage } from "react-lazy-load-image-component";
import svg from "../../assets/firma/firma.svg";
import loba from "../../assets/firma/products/loba.png";
import blanchon from "../../assets/firma/products/blanchon.png";
import osmo from "../../assets/firma/products/osmo.jpg";
import berger from "../../assets/firma/products/berger.svg";
import bona from "../../assets/firma/products/bona.png";
import hummel from "../../assets/firma/service/hummel.webp";
import festool from "../../assets/firma/service/festool.svg";

export const Logos = ({ active }) => {
	switch (active) {
		case "0":
			return (
				<LazyLoadImage
					src={svg}
					alt={`logo of Artis Floor`}
					className="size-44 md:size-72 xl:size-[445px] xl:ml-60 animation"
				/>
			);
		case "1":
			return (
				<div className="w-4/5 xl:w-full xl:ml-10 grid grid-cols-3 xl:grid-cols-3 gap-0 row-auto bg-slate-100 rounded-2xl items-center justify-items-center xl:pt-10 animation">
					<LazyLoadImage src={loba} alt="logo of company loba" />
					<LazyLoadImage src={blanchon} alt="logo of company blanchon" />
					<LazyLoadImage src={osmo} alt="logo of company osmo" />
					<LazyLoadImage src={berger} alt="logo of company berger" />
					<LazyLoadImage src={bona} alt="logo of company bona" />
				</div>
			);
		case "2":
			return (
				<div className="grid grid-cols-2 size-64 md:size-96 xl:size-4/5 lg:ml-10 items-center gap-5 animation">
					<LazyLoadImage src={hummel} alt="photo of hummel machine" />
					<LazyLoadImage src={festool} alt="logo of company festool" />
				</div>
			);
		default:
			return null;
	}
};
