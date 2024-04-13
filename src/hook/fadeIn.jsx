import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { forwardRef } from "react";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);
export const FadeIn = forwardRef(
	({ children, stagger = 0, x = 0, duration = 0, y = 0, scale }, ref) => {
		const el = useRef();
		const animation = useRef();

		useGSAP(() => {
			animation.current = gsap.from(el.current.children, {
				opacity: 0,
				duration,
				stagger,
				scale,
				x,
				y,
			});
		});

		return <span ref={el}>{children}</span>;
	}
);
FadeIn.displayName = "FadeIn";
