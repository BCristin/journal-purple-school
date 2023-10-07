import styles from './CardButton.module.scss';

export const CardButton = ({ children, className }) => {
	const cl = styles['card-button'] + (className ? ' ' + className : '');
	return <button className={cl}>{children}</button>;
};
