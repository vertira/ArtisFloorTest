/* eslint-disable react/prop-types */
// import styles from "./destination.module.css";
export const Li = (props) => {
	return (
		<li
			className={`font-barlow text-base hover:animate-pulse hover:border-b-2 hover:border-green-500  ${
				`${props.active}` === `${props.element.id}` ? "active" : ""
			}`}
			onClick={props.handleClick}
			role="button"
			key={props.element.id}
			id={props.element.id}
		>
			{props.element.name}
		</li>
	);
};
