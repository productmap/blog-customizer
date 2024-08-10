import { useState } from 'react';
import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import cn from 'classnames';

import styles from './ArticleParamsForm.module.scss';
import { Separator } from 'components/separator';
import { Select } from 'components/select';
import {
	backgroundColors,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { RadioGroup } from 'components/radio-group';

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
					<div className={styles.topContainer}>
						<h2 className={styles.topContainer__header}>Задайте параметры</h2>
					</div>
					<div className={styles.middleContainer}>
						<Select
							title={'шрифт'}
							selected={fontFamilyOptions[0]}
							options={fontFamilyOptions}
							onChange={(option) => console.log(option)}
						/>
						<RadioGroup
							title={'рАЗМЕР шрифта'}
							name={'font-size'}
							options={fontSizeOptions}
							selected={fontSizeOptions[0]}
							onChange={(option) => console.log(option)}
						/>
						<Select
							title={'Цвет фона'}
							selected={fontColors[0]}
							options={fontColors}
							onChange={(option) => console.log(option)}
						/>
						<Separator />
						<Select
							title={'Цвет фона'}
							selected={fontColors[0]}
							options={fontColors}
							onChange={(option) => console.log(option)}
						/>
						<Select
							title={'Цвет фона'}
							selected={backgroundColors[2]}
							options={backgroundColors}
							onChange={(option) => console.log(option)}
						/>
					</div>
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							type='reset'
							onClick={() => console.log('Сбросить')}
						/>
						<Button
							title='Применить'
							type='submit'
							onClick={() => console.log('Сохранить')}
						/>
					</div>
				</form>
			</aside>
		</>
	);
};
