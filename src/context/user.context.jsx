import { createContext, useState } from 'react';

const UserContext = createContext('test');

const DEFAULT_DATA = {
	setting: { activeUserID: 1, activeJurnal: 0 },
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
					tag: 'blea',
				},
				{
					id: 2,
					title: 'Поход в годы',
					date: new Date('2023-09-07T13:44:21.969Z'),
					text: 'Думал, что очень много време...',
					tag: 'blea',
				},
				{
					id: 3,
					title: 'Первая заметкаПервая заметка',
					date: new Date('2021-10-07T13:44:21.969Z'),
					text: 'Создал первую заметку, чтобы ...',
					tag: 'blea',
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
		{
			id: 3,
			name: 'Huilo',
			jurnalItems: [],
		},
		{
			id: 4,
			name: 'Aliona',
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
			if (newJurnalItem.id === 0) {
				newData.users[activeUser].jurnalItems.push({
					...newJurnalItem,
					id: Math.max(...newData.users[activeUser].jurnalItems.map((el) => el.id), 0) + 1,
				});
			} else {
				const elementToReplace = newData.users[activeUser].jurnalItems.find(
					(el) => el.id === newJurnalItem.id,
				);
				const indexToReplace = newData.users[activeUser].jurnalItems.indexOf(elementToReplace);

				if (indexToReplace !== -1) {
					newData.users[activeUser].jurnalItems.splice(indexToReplace, 1, newJurnalItem);
				}
			}
			localStorage.setItem('data', JSON.stringify(newData));
			console.log(newData);
			return newData;
		});
	};

	const deleteJurnal = (id) => {
		if (confirm('esti sigur?'))
			setData((data) => {
				const newData = { ...data };

				const elementToReplace = newData.users[newData.setting.activeUserID].jurnalItems.find(
					(el) => el.id === id,
				);
				const indexToReplace =
					newData.users[newData.setting.activeUserID].jurnalItems.indexOf(elementToReplace);

				if (indexToReplace !== -1) {
					newData.users[newData.setting.activeUserID].jurnalItems.splice(indexToReplace, 1);
				}

				localStorage.setItem('data', JSON.stringify(newData));
				console.log(newData);
				return newData;
			});
		setActiveJurnal(0);
	};
	const setActiveJurnal = (id) => {
		setData((data) => {
			return {
				...data,
				setting: {
					...data.setting,
					activeJurnal: +id,
				},
			};
		});
	};

	return (
		<UserContext.Provider
			value={{ data, setData, setActiveUserContext, addJurnal, deleteJurnal, setActiveJurnal }}>
			{children}
		</UserContext.Provider>
	);
};
export default UserContext;
