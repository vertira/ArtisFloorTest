import { Link } from "react-router-dom";
export const NavbarList = (props, setOpen) => {
	return (
		<>
			<li
				className={`flex h-full w-fit font-barlow text-slate-300 hover:text-white tracking-widest mr-12 mb-5 lg:mb-0 items-center hover:border-b-4 hover:animate-pulse hover:border-green-500 ${
					`${props.active}` === "0"
						? "border-b-2 border-green-500 text-white"
						: ""
				}`}
				id="0"
			>
				<Link to="/" onClick={()=>setOpen(false) }>
					<span className="font-barlow font-bold mr-3 hidden lg:inline">
						00
					</span>
					START
				</Link>
			</li>
			<li
				className={`flex h-full w-fit font-barlow text-slate-300 tracking-widest mr-12 mb-5 lg:mb-0 items-center hover:border-b-4 hover:animate-pulse hover:border-green-500 ${
					`${props.active}` === "1"
						? "border-b-2 border-green-500 text-white"
						: ""
				}`}
				id="1"
			>
				<Link to="/firma" onClick={()=>setOpen(false)}>
					<span className="font-barlow font-bold mr-3 hidden lg:inline">
						01
					</span>
					O FIRMIE
				</Link>
			</li>
			<li
				className={`flex h-full w-fit font-barlow text-slate-300 tracking-widest mr-12 mb-5 lg:mb-0 items-center hover:border-b-4 hover:animate-pulse hover:border-green-500 ${
					`${props.active}` === "2"
						? "border-b-2 border-green-500 text-white"
						: ""
				}`}
				id="2"
			>
				<Link to="/wycena" onClick={()=>setOpen(false)}>
					<span className="font-barlow font-bold mr-3 hidden lg:inline">
						02
					</span>
					WYCENA
				</Link>
			</li>
			<li
				className={`flex h-full w-fit font-barlow text-slate-300 tracking-widest  items-center hover:border-b-4 hover:animate-pulse hover:border-green-500 ${
					`${props.active}` === "3"
						? "border-b-2 border-green-500 text-white"
						: ""
				}`}
				id="3"
			>
				<Link to="/technology" onClick={()=>setOpen(false)}>
					<span className="font-barlow font-bold mr-3 hidden lg:inline">
						03
					</span>
					KONTAKT
				</Link>
			</li>
		</>
	);
};
