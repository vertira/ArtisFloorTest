import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import TextPlugin from "gsap/TextPlugin";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, TextPlugin);
export const TextAnimation = () => {
	const textAnimation = useRef();
	useGSAP(
		() => {
			gsap.defaults({ ease: "none" });
			const tl = gsap.timeline();
			tl.to("#customText", {
				delay: 1,
				duration: 2,
				text: "Marzysz o pięknej podłodze drewnianej?",
			});
			tl.to("#customText", {
				delay: 1,
				opacity: 0,
			});
			tl.set("#customText", {
				text: "",
			});
			tl.to("#customText", {
				opacity: 1,
			});
			tl.to("#customText", {
				duration: 2,
				text: {
					value: `Z <b>Artis Floor</b> to możliwe !`,
					padSpace: true,
				},
			});
			tl.to("#customText", {
				delay: 1,
				opacity: 0,
			});
			tl.set("#customText", {
				text: "",
			});
			tl.to("#customText", {
				opacity: 1,
			});
			tl.to("#customText", {
				duration: 3,
				text: "Oferujemy szeroki zakres usług renowacji parkietu, dopasowanych do Twoich potrzeb i budżetu.",
			});
			tl.to("#customText", {
				delay: 3,
				opacity: 0,
			});
			tl.to("#customText", {
				opacity: 1,
				delay: 1,
				duration: 0,
				text: "Marzysz o pięknej podłodze drewnianej? Z <b>Artis Floor</b> to możliwe! Oferujemy szeroki zakres usług renowacji parkietu, dopasowanych do Twoich potrzeb i budżetu.",
			});
		},
		{ scope: textAnimation }
	);
	return (
		<span ref={textAnimation}>
			<p
				className="w-[327px] lg:w-[500px] text-center lg:text-left lg:text-2xl text-zinc-200"
				id="customText"
			></p>
		</span>
	);
};
