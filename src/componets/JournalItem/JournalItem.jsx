import styles from './JournalItem.module.scss';
export const JournalItem = ({ title, date, text }) => {
	const formateDate = new Intl.DateTimeFormat('ro-RO').format(date);
	return (
		<div className={styles['journal-item']}>
			<h2 className={styles['journal-item__header']}>{title}</h2>
			<h2 className={styles['journal-item__body']}>
				<div className={styles['journal-item__date']}>{formateDate}</div>
				<div className={styles['journal-item__text']}>{text}</div>
			</h2>
		</div>
	);
};
