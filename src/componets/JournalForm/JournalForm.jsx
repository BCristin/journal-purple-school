import { useContext, useRef, useState } from 'react';
import UserContext from '../../context/user.context';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import styles from './JournalForm.module.scss';
const defaultValueForm = {
	title: '',
	date: new Date().toISOString().split('T')[0],
	tag: '',
	text: '',
};
export const JournalForm = () => {
	const [inputData, setInputData] = useState(defaultValueForm);
	const inputRef = useRef();
	const inputRef2 = useRef();

	const { data, addJurnal } = useContext(UserContext);
	const activeUserID = data.setting.activeUserID;
	console.log(data);
	const addJournalItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);

		const isValid = Object.values(formProps).every((value) => value.trim() !== '');

		if (isValid) {
			addJurnal(formProps, activeUserID);
			setInputData(defaultValueForm);
		} else {
			if (formProps.title === '') {
				inputRef.current.focus();
			} else if (formProps.text === '') inputRef2.current.focus();
		}
	};

	return (
		<form onSubmit={addJournalItem} className={styles['journal-form']}>
			<div className={styles['form-row']}>
				<Input name="title" inputData={inputData} setInputData={setInputData} inputRef={inputRef} />
				<button className={styles['delete']} type="button">
					<img src="/archive.svg" alt="Кнопка удалить" />
				</button>
			</div>
			<div className={styles['form-row']}>
				<label htmlFor="date" className={styles['form-label']}>
					<img src="/calendar.svg" alt="Иконка календаря" />
					<span>Дата</span>
				</label>
				<Input name="date" type="date" inputData={inputData} setInputData={setInputData} />
			</div>
			<div className={styles['form-row']}>
				<label htmlFor="tag" className={styles['form-label']}>
					<img src="/folder.svg" alt="Иконка папки" />
					<span>Метки</span>
				</label>
				<Input name="tag" inputData={inputData} setInputData={setInputData} />
			</div>
			<textarea
				name="text"
				id="post"
				cols="30"
				rows="10"
				ref={inputRef2}
				onChange={(e) =>
					setInputData((v) => {
						return { ...v, text: e.target.value };
					})
				}
				value={inputData.text}></textarea>
			<Button>Save</Button>
		</form>
	);
};
