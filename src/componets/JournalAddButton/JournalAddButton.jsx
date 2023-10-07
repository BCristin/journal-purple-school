import { CardButton } from '../CardButton/CardButton';
import styles from './JournalAddButton.module.scss';

export const JournalAddButton = () => {
	return (
		<CardButton className={styles['journal-add']}>
			<div>JournalAddButton</div>
		</CardButton>
	);
};
