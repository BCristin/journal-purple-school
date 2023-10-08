import { useContext } from 'react';
import UserContext from '../../context/user.context';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import styles from './JournalForm.module.scss';

export const JournalForm = () => {
	const { data, addJurnal } = useContext(UserContext);
	const activeUserID = data.setting.activeUserID;
	console.log(data);
	const addJournalItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);

		// const newDatas = (value) => [
		// 	{ ...formProps, id: Math.max(...value.map((i) => i.id)) + 1 },
		// 	...value,
		// ];

		const isValid = Object.values(formProps).every(
			(value) => value !== null && value !== undefined && value.trim() !== '',
		);

		if (isValid) {
			addJurnal(formProps, activeUserID);

			// console.log(newDatas, JSON.stringify(newDatas));
		}
	};

	return (
		<form onSubmit={addJournalItem} className={styles['journal-form']}>
			<div className={styles['form-row']}>
				<Input name="title" />
				<button className={styles['delete']} type="button">
					<img src="/archive.svg" alt="Кнопка удалить" />
				</button>
			</div>
			<div className={styles['form-row']}>
				<label htmlFor="date" className={styles['form-label']}>
					<img src="/calendar.svg" alt="Иконка календаря" />
					<span>Дата</span>
				</label>
				<Input name="date" type="date" />
			</div>
			<div className={styles['form-row']}>
				<label htmlFor="tag" className={styles['form-label']}>
					<img src="/folder.svg" alt="Иконка папки" />
					<span>Метки</span>
				</label>
				<Input name="tag" />
			</div>
			<textarea name="text" id="post" cols="30" rows="10"></textarea>
			<Button>Save</Button>
		</form>
	);
};
