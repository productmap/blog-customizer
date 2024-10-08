import arrow from 'src/images/arrow.svg';
import styles from './ArrowButton.module.scss';
import { ReactElement } from 'react';
import { clsx } from 'clsx';

export type OnClick = () => void;

interface ArrowButtonProps {
	onClick: OnClick;
	isOpen: boolean;
}

/**
 * Функция для обработки открытия/закрытия формы
 * @param {OnClick} onClick Обработчик события клика по кнопке.
 * @param isOpen Открыта ли форма.
 * @returns {ReactElement} Компонент ArrowButton.
 */
export const ArrowButton = ({
	onClick,
	isOpen,
}: ArrowButtonProps): ReactElement => {
	return (
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx(styles.container, { [styles.container_open]: isOpen })}
			onClick={onClick}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(styles.arrow, { [styles.arrow_open]: isOpen })}
			/>
		</div>
	);
};
