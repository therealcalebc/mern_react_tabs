import React, { useState } from "react";
import Tab from "../Tab/Tab";
import styles from "./TabbedSection.module.css";

const TabbedSection = ({ tabs }) => {
	const [currentTab, setCurrentTab] = useState(-1);
	return (
		<div className={styles.TabbedSection}>
			<div className={styles.TsHeader}>
				{tabs.map((tab, index) => {
					return (
						<Tab
							key={index}
							id={index}
							label={tab.label}
							isActive={index === currentTab}
							setCurrent={setCurrentTab}
						/>
					);
				})}
			</div>
			<div className={styles.TsBody}>
				{currentTab >= 0 ? tabs[currentTab].content : ""}
			</div>
		</div>
	);
};

export default TabbedSection;
