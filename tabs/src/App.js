import "./App.css";
import TabbedSection from "./components/TabbedSection/TabbedSection";

const tabs = [
	{ label: "Tab 1", content: "Tab 1 content is showing here." },
	{ label: "Tab 2", content: "Tab 2 content is showing here." },
	{ label: "Tab 3", content: "Tab 3 content is showing here." },
	{ label: "Tab 4", content: "Tab 4 content is showing here." },
	{ label: "Tab 5", content: "Tab 5 content is showing here." },
	{ label: "Tab 6", content: "Tab 6 content is showing here." },
	{ label: "Tab 7", content: "Tab 7 content is showing here." },
	{ label: "Tab 8", content: "Tab 8 content is showing here." },
	{ label: "Tab 9", content: "Tab 9 content is showing here." },
	{ label: "Tab 10", content: "Tab 10 content is showing here." },
	{ label: "Tab 11", content: "Tab 11 content is showing here." },
	{ label: "Tab 12", content: "Tab 12 content is showing here." },
];

function App() {
	return (
		<div className='App'>
			<TabbedSection tabs={tabs} />
		</div>
	);
}

export default App;

/* <header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
			</header> */
