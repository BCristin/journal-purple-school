import { useContext, useEffect } from 'react';
import UserContext from '../../context/user.context';
import { SelectUser } from '../SelectUser/SelectUser';
import styles from './Header.module.scss';

export const Header = () => {
	const { setData } = useContext(UserContext);

	useEffect(() => {
		const res = JSON.parse(localStorage.getItem('data'));
		if (res) setData(res);
	}, []);
	return (
		<>
			<img className={styles.logo} src="/src/assets/Personal Journal.svg" alt="logo" />
			<SelectUser />
		</>
	);
};
