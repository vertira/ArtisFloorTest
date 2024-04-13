export const Logos = (activeState, activeList) => {
	switch (activeState) {
		case "0":
			return (
				<img
					src={`assets/firma/${activeList.name}.svg`}
					alt={`photo of planet ${activeList.name}`}
					className="size-44 md:size-72 xl:size-[445px] xl:ml-60 animation"
				/>
			);
		case "1":
			return (
				<>
					<div className="w-4/5 xl:w-full xl:ml-10 grid grid-cols-3 xl:grid-cols-3 gap-0 row-auto bg-slate-100 rounded-2xl items-center justify-items-center xl:pt-10 animation">
						<img src="\assets\firma\products\loba.png" alt="" />
						<img src="\assets\firma\products\blanchon.png" alt="" />
						<img src="\assets\firma\products\osmo.jpg" alt="" />
						<img src="\assets\firma\products\berger.svg" alt="" />
						<img src="\assets\firma\products\bona.png" alt="" />
						<img src="\assets\firma\products\renove.png" alt="" />
					</div>
				</>
			);
		case "2":
			return (
				<>
					<div className="grid grid-cols-2 size-64 md:size-96 xl:size-4/5 lg:ml-10 items-center gap-5 animation">
						<img src="\assets\firma\service\hummel.webp" alt="" />
						<img src="\assets\firma\service\festool.svg" alt="" />
					</div>
				</>
			);
		default:
			return null;
	}
};
