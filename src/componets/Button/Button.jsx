import styles from './Button.module.scss';
export const Button = () => {
	const clicked = () => {};
	return (
		<button onClick={clicked} className={`${styles.button} ${styles.accent}`}>
			Button
		</button>
	);
};
