import { useContext, useEffect, useRef, useState } from 'react';
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

	const { data, addJurnal, setActiveJurnal, deleteJurnal } = useContext(UserContext);
	const activeUserID = data.setting.activeUserID;
	const activeJurnal = data.setting.activeJurnal;

	useEffect(() => {
		setActiveJurnal(0);
	}, []);

	const addJournalItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);

		const isValid = Object.values(formProps).every((value) => value.trim() !== '');
		formProps.id = activeJurnal;

		if (isValid) {
			addJurnal(formProps, activeUserID);
			setInputData(defaultValueForm);
		} else {
			if (formProps.title === '') {
				inputRef.current.focus();
			} else if (formProps.text === '') inputRef2.current.focus();
		}
	};

	useEffect(() => {
		if (!activeJurnal) {
			setInputData(defaultValueForm);
		}
		if (data.activeJurnal !== 0) {
			const newValue = data.users
				.find((el) => el.id === activeUserID)
				.jurnalItems.find((el) => el.id === activeJurnal);
			// console.log({ ...newValue });
			if (newValue)
				setInputData({ ...newValue, date: new Date(newValue.date).toISOString().split('T')[0] });
		}
	}, [activeUserID, activeJurnal]);
	return (
		<form onSubmit={addJournalItem} className={styles['journal-form']}>
			<div className={styles['form-row']}>
				<Input name="title" inputData={inputData} setInputData={setInputData} inputRef={inputRef} />
				{activeJurnal > 0 && (
					<button
						className={styles['delete']}
						type="button"
						onClick={() => deleteJurnal(activeJurnal)}>
						<img src="/archive.svg" alt="Кнопка удалить" />
					</button>
				)}
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
