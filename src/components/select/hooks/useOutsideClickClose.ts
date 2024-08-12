import { RefObject, useEffect } from 'react';

type UseOutsideClickClose = {
	isOpen: boolean;
	onChange: (newValue: boolean) => void;
	onClose?: () => void;
	rootRef: RefObject<HTMLDivElement>;
};

/**
 * Хук для обработки события клика вне компонента для его закрытия.
 *
 * @param {UseOutsideClickClose} params - Объект, содержащий isOpen, rootRef, onClose и onChange.
 * @param {boolean} params.isOpen - Логический флаг, указывающий, открыт ли компонент.
 * @param {RefObject<HTMLDivElement>} params.rootRef - Ссылка на корневой элемент компонента.
 * @param {function} [params.onClose] - Необязательная функция, вызываемая при закрытии компонента.
 * @param {function} params.onChange - Функция, вызываемая при изменении открытого состояния компонента.
 * @return {void}
 */
export const useOutsideClickClose = ({
	isOpen,
	rootRef,
	onClose,
	onChange,
}: UseOutsideClickClose): void => {
	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			const { target } = event;
			if (
				target instanceof Node &&
				rootRef.current &&
				!rootRef.current.contains(target)
			) {
				if (isOpen) {
					onClose?.();
					onChange(false);
				}
			}
		};

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape' && isOpen) {
				onClose?.();
				onChange(false);
			}
		};

		if (isOpen) {
			window.addEventListener('mousedown', handleClick);
			window.addEventListener('keydown', handleKeyDown);
		} else {
			window.removeEventListener('mousedown', handleClick);
			window.removeEventListener('keydown', handleKeyDown);
		}

		return () => {
			window.removeEventListener('mousedown', handleClick);
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [isOpen, rootRef, onClose, onChange]);
};
