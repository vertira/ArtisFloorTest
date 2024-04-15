import background from "../../assets/video/final.mp4";
export const BackgroundVideo = () => {
	return (
		<video
			autoPlay
			loop
			muted
			loading="lazy"
			className="fixed -z-10 w-screen h-screen object-cover"
		>
			<source src={background} type="video/mp4" />
		</video>
	);
};
