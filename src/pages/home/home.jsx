/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useParagAnimation } from "./useParagAnimation";
import { Helmet } from "react-helmet-async";
export const Home = () => {
	const animation = useParagAnimation();
	return (
		<section className="flex grow">
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
				<meta property="og:title" content="Artis Floor - cyklinowanie" />
				<meta
					property="og:description"
					content="Profesjonalne usługi cyklinowania podłóg i schodów drewnianych."
				/>
				<meta
					property="og:image"
					content="https://artis-floor-test.vercel.app/assets/firma/firma.svg"
				/>
			</Helmet>
			<div className="grow flex flex-col items-center justify-between lg:flex-row lg:items-center lg:justify-between ">
				<div
					className="flex flex-col items-center lg:items-start  mx-6 mt-12 md:mt-20 lg:ml-32 lg:mx-0 lg:mt-0 lg:mb-0 lg:h-52"
					data-aos="fade-right"
				>
					<h1 className="font-barlow text-base  md:text-xl lg:text-4xl text-center lg:text-left tracking-wider text-zinc-200">
						Profesjonalne cyklinowanie parkietu
					</h1>
					<h2
						className="text-[75px] text-center lg:text-left md:text-[100px] font-belle text-white underline decoration-green-600"
					>
						ARTIS FLOOR
					</h2>
					<p
						className="w-[327px] lg:w-[500px] text-center lg:text-left lg:text-2xl text-zinc-200"
						id="customText"
					></p>
				</div>
				<Link to="/firma">
					<button className="size-44 md:size-60 bg-white rounded-full font-belle text-lg md:text-3xl mb-24 md:mb-20 xl:mr-56 lg:mb-0 lg:mt-72 motion-safe:animate-bounce-slow hover:animate-[shadow_1.5s_infinite]">
						<img
							src="assets\shared\parkiet.svg"
							alt=""
							className="size-20 mx-auto"
						/>
						Odnów swój parkiet
					</button>
				</Link>
			</div>
		</section>
	);
};
