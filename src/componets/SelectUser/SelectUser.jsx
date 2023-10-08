import { useContext, useState } from 'react';
import UserContext from '../../context/user.context';
import styles from './SelectUser.module.scss';

export const SelectUser = () => {
	const { data, setActiveUserContext } = useContext(UserContext);

	const [activeUser, setActiveUser] = useState(data.setting.activeUserID);
	const selectedUser = (e) => {
		setActiveUser(e.target.value);
		setActiveUserContext(e.target.value);
	};
	return (
		<select
			value={activeUser}
			onChange={selectedUser}
			name="user"
			id="user"
			className={styles.select}>
			{data.users.map((user) => (
				<option key={user.id} value={user.id}>
					{user.name}
				</option>
			))}
		</select>
	);
};
