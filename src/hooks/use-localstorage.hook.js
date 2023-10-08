import { useContext, useEffect } from 'react';
import UserContext from '../context/user.context';

export const useLocalStorage = () => {
	const { setData } = useContext(UserContext);
	useEffect(() => {
		const res = JSON.parse(localStorage.getItem('data'));
		if (res) setData(res);
	}, []);
};
