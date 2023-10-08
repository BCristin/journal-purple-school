import { useEffect, useState } from 'react';
import styles from './Input.module.scss';

export const Input = ({ type = 'text', name }) => {
	const [value, setValue] = useState('');

	useEffect(() => {
		if (type === 'date') setValue(new Date().toISOString().split('T')[0]);
		// eslint-disable-next-line
	}, []);
	const onChangeFn = (e) => {
		setValue(e.target.value);
	};

	return (
		<input
			className={styles.input}
			type={type}
			name={name}
			value={value}
			onChange={onChangeFn}
			id={name}
		/>
	);
};
