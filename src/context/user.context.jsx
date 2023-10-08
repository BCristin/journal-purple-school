import { createContext, useState } from 'react';

const UserContext = createContext('test');

const DEFAULT_DATA = {
	setting: { activeUserID: 1 },
	users: [
		{
			id: 0,
			name: 'Ion',
			jurnalItems: [
				{
					id: 1,
					title: 'Подготовка к обновлению курсов',
					date: new Date('2022-10-07T13:44:21.969Z'),
					text: 'Горные походы открывают удивительные природные ландшафты, испытывают туристов физически и морально, дают возможность почувствовать себя первопроходцем. У горных походов свои секреты, приобщиться к которым можно только в команде единомышленников и профессионалов.',
				},
				{
					id: 2,
					title: 'Поход в годы',
					date: new Date('2023-09-07T13:44:21.969Z'),
					text: 'Думал, что очень много време...',
				},
				{
					id: 3,
					title: 'Первая заметкаПервая заметка',
					date: new Date('2021-10-07T13:44:21.969Z'),
					text: 'Создал первую заметку, чтобы ...',
				},
			],
		},
		{
			id: 1,
			name: 'Andrei',
			jurnalItems: [],
		},
		{
			id: 2,
			name: 'Vasile',
			jurnalItems: [],
		},
	],
};
export const UserContextProvider = ({ children }) => {
	const [data, setData] = useState(DEFAULT_DATA);

	const setActiveUserContext = (id) => {
		setData((data) => {
			return {
				...data,
				setting: {
					...data.setting,
					activeUserID: +id,
				},
			};
		});
	};
	const addJurnal = (newJurnalItem, activeUser) => {
		setData((data) => {
			const newData = { ...data };
			newData.users[activeUser].jurnalItems.push({
				...newJurnalItem,
				id: Math.max(...newData.users[activeUser].jurnalItems.map((el) => el.id), 0) + 1,
			});
			localStorage.setItem('data', JSON.stringify(newData));

			return newData;
		});
	};

	return (
		<UserContext.Provider value={{ data, setData, setActiveUserContext, addJurnal }}>
			{children}
		</UserContext.Provider>
	);
};
export default UserContext;
