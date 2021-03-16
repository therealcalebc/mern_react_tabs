import React from "react";
import styles from "./Tab.module.css";

const Tab = (props) => {
	const { id, label, isActive, setCurrent } = props;
	let styleClasses = styles.Tab + " ";
	styleClasses += isActive ? styles.active : styles.inactive;
	return (
		<button className={styleClasses} onClick={(e) => setCurrent(id)}>
			{label}
		</button>
	);
};

export default Tab;
