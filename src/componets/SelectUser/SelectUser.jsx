import { useContext } from 'react';
import UserContext from '../../context/user.context';
import styles from './SelectUser.module.scss';

export const SelectUser = () => {
	const { data, setActiveUserContext, setActiveJurnal } = useContext(UserContext);

	// const [activeUser, setActiveUser] = useState(data.setting.activeUserID);
	const selectedUser = (e) => {
		// setActiveUser(e.target.value);
		setActiveUserContext(e.target.value);
		setActiveJurnal(0);
	};
	return (
		<select
			value={data.setting.activeUserID}
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
