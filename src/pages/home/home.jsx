/* eslint-disable no-unused-vars */
// import styles from "../styles/home.module.css";
import { Link } from "react-router-dom";
import { useParagAnimation } from "./useParagAnimation";

export const Home = () => {
	// const animation = useParagAnimation();
	return (
		<section className="flex grow">
			<div className="grow flex flex-col items-center justify-between lg:flex-row lg:items-center lg:justify-between ">
				<div
					className="flex flex-col items-center lg:items-start  mx-6 mt-12 md:mt-20 lg:ml-32 lg:mx-0 lg:mt-0 lg:mb-0 lg:h-52"
					data-aos="fade-right"
				>
					<h1 className="font-barlow text-base  md:text-xl lg:text-4xl text-center lg:text-left tracking-wider text-zinc-200">
						Profesjonalne cyklinowanie parkietu
					</h1>
					<h2
						className="text-[80px] text-center lg:text-left md:text-[100px] font-belle text-white underline decoration-green-600"
						id="text"
					>
						ARTIS FLOOR
					</h2>
					<p
						className="w-[327px] lg:w-[500px] text-center lg:text-left lg:text-2xl text-zinc-200"
						id="customText"
					></p>
				</div>
				<Link to="/firma">
					<button className="size-48 md:size-60 bg-white rounded-full font-belle text-lg md:text-3xl mb-12 md:mb-20 xl:mr-56 lg:mb-0 lg:mt-72 motion-safe:animate-bounce-slow hover:animate-[shadow_1.5s_infinite]">
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
