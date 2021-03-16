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
				{/* <Tab label='xxxxxxTab1xxxxxx' isActive={false} />
				<Tab label='Tab2' isActive={true} />
				<Tab label='Tab3' isActive={false} /> */}
			</div>
			<div className={styles.TsBody}>
				{currentTab >= 0 ? tabs[currentTab].content : ""}
			</div>
		</div>
	);
};

export default TabbedSection;

//<div className={styles.TsBody}>Tab 2 content is showing here.</div>;
