import './App.css';
import { Header } from './componets/Header/Header';
import { JournalAddButton } from './componets/JournalAddButton/JournalAddButton';
import { JournalForm } from './componets/JournalForm/JournalForm';
import { JournalList } from './componets/JournalList/JournalList';
import { UserContextProvider } from './context/user.context';
import { Body } from './layouts/Body/Body';
import { LeftPanel } from './layouts/LeftPanel/LeftPanel';

function App() {
	return (
		<UserContextProvider>
			<div className="app">
				<LeftPanel>
					<Header />
					<JournalAddButton />
					<JournalList />
				</LeftPanel>
				<Body>
					<JournalForm />
				</Body>
			</div>
		</UserContextProvider>
	);
}

export default App;
