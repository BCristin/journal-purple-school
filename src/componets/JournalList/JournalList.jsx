import { useContext } from 'react';
import UserContext from '../../context/user.context';
import { sortItems } from '../../utils/sortItems';
import { CardButton } from '../CardButton/CardButton';
import { JournalItem } from '../JournalItem/JournalItem';
import styles from './JournalList.module.scss';

export const JournalList = () => {
	const { data } = useContext(UserContext);
	const activeUser = data.setting.activeUserID;
	const items = data.users[activeUser].jurnalItems;
	const renderData = sortItems(items).map((item) => (
		<CardButton key={item.id}>
			<JournalItem {...item} />
		</CardButton>
	));
	if (items.length === 0) return <p>Записей пока нет, добавьте первую</p>;
	return <div className={styles['journal-list']}>{renderData}</div>;
};
