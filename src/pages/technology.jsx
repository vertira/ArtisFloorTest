import { useRef } from "react";
import { FadeIn } from "../hook/fadeIn";
import { useNavigate } from "react-router-dom";
export const Technology = () => {
	const animation = useRef();
	const navigate = useNavigate();
	navigate("/");
	return (
		<section>
			<FadeIn stagger={0.2} x={300} duration={1} ref={animation}>
				<h1 className="text-slate-200 text-[100px] text-center">BE SOON...</h1>
			</FadeIn>
		</section>
	);
};
