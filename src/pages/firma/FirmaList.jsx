import { Li } from "./li-firma";
export const FirmaList = ({ firmaData, handleClick, active }) => {
	return (
		<ul className="flex justify-around text-slate-50 font-bold tracking-widest text-sm mx-16 md:mx-60 md:text-base md:h-9 xl:text-2xl xl:justify-normal xl:h-10 xl:gap-10 xl:mx-0 xl:mr-40">
			{firmaData.map((element, index) => {
				return (
					<Li
						element={element}
						handleClick={handleClick}
						active={active}
						key={index}
					/>
				);
			})}
		</ul>
	);
};
