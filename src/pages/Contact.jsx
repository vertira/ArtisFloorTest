import { useRef } from "react";
import { FadeIn } from "../hook/fadeIn";
export const Contact = () => {
	const animation = useRef();
	return (
		<section className="flex grow ">
			<FadeIn stagger={0.2} x={300} duration={1} ref={animation}>
				{/* <div className="relative">
				<h1 className="text-5xl font-belle text-slate-100 absolute top-1/2 left-1/2 z-10  -translate-y-1/2 -translate-x-1/2">KONTAKT</h1>
					<img
						src="assets\kontakt\deska.webp"
						alt=""
						className="mx-auto saturate-50 h-52 mt-10"
					/>
				</div> */}
				<div className="flex bg-deska bg-cover bg-center mt-10 h-3/5 w-4/5 mx-auto saturate-50 rounded-2xl justify-center">
					<h1 className="text-6xl font-belle text-slate-50 mt-2 h-full">
						Kontakt
					</h1>
				</div>
			</FadeIn>
		</section>
	);
};
