import styles from './Input.module.scss';

export const Input = ({ name, type = 'text', setInputData, inputData, inputRef }) => {
	const setInput = (e) => {
		setInputData((val) => {
			return { ...val, [name]: e.target.value };
		});
	};

	return (
		<input
			ref={inputRef}
			className={styles.input}
			type={type}
			name={name}
			id={name}
			onChange={setInput}
			value={inputData[name]}
		/>
	);
};
