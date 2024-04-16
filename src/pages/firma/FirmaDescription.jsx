export const FirmaDescription = ({ data }) => {
	return (
		<>
			<h2 className="text-5xl text-center xl:text-start md:text-6xl xl:text-[80px] mx-auto font-belle text-slate-50 mt-5 xl:mx-0 xl:w-fit brush animation2">
				<strong className="font-normal">{data.title}</strong>
			</h2>
			<p className="text-center mx-6 md:mx-24 text-xl md:text-base xl:text-start xl:mx-0 xl:mr-0 xl:text-xl xl:w-3/5 text-slate-50">
				{data.description}
			</p>
		</>
	);
};
