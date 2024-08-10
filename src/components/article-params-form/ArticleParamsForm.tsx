import { useState } from 'react';
import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import cn from 'classnames';

import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const handleSidebarClick = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	return (
		<>
			<ArrowButton onClick={handleSidebarClick} isOpen={isSidebarOpen} />
			<aside
				className={cn(
					styles.container,
					isSidebarOpen && styles.container_open
				)}>
				<form className={styles.form}>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
