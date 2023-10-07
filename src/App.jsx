import './App.css';
import { Button } from './componets/Button/Button';
import { CardButton } from './componets/CardButton/CardButton';
import { Header } from './componets/Header/Header';
import { JournalAddButton } from './componets/JournalAddButton/JournalAddButton';
import { JournalItem } from './componets/JournalItem/JournalItem';
import { JournalList } from './componets/JournalList/JournalList';
import { Body } from './layouts/Body/Body';
import { LeftPanel } from './layouts/LeftPanel/LeftPanel';

function App() {
	const data = [
		{
			title: 'Подготовка к обновлению курсов',
			date: new Date(),
			text: 'Горные походы открывают удивительные природные ландшафты, испытывают туристов физически и морально, дают возможность почувствовать себя первопроходцем. У горных походов свои секреты, приобщиться к которым можно только в команде единомышленников и профессионалов.',
		},
		{
			title: 'Поход в годы',
			date: new Date(),
			text: 'Думал, что очень много време...',
		},
		{
			title: 'Первая заметкаПервая заметка',
			date: new Date(),
			text: 'Создал первую заметку, чтобы ...',
		},
	];
	return (
		<div className="app">
			<LeftPanel>
				<Header />
				<JournalAddButton />
				<JournalList>
					{data.map((item) => (
						<CardButton key={item.title}>
							<JournalItem {...item} />
						</CardButton>
					))}
					<Button />
				</JournalList>
			</LeftPanel>
			<Body>Body</Body>
		</div>
	);
}

export default App;
