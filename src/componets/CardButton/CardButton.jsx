import styles from './CardButton.module.scss';

export const CardButton = ({ children, className, ...props }) => {
	const cl = styles['card-button'] + (className ? ' ' + className : '');
	return (
		<button {...props} className={cl}>
			{children}
		</button>
	);
};
