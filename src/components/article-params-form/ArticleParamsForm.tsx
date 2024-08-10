import React, { useState } from 'react';
import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import cn from 'classnames';

import styles from './ArticleParamsForm.module.scss';
import { Select } from 'components/select';
import { RadioGroup } from 'components/radio-group';
import { Separator } from 'components/separator';
import {
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	OptionType,
} from 'src/constants/articleProps';

export const ArticleParamsForm = ({
	onStyleChange,
}: {
	onStyleChange: (style: object) => void;
}) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [style, setStyle] = useState(defaultArticleState);

	const handleChange = (
		property: keyof typeof defaultArticleState,
		selected: OptionType
	) => {
		setStyle((prevStyle) => ({
			...prevStyle,
			[property]: selected,
		}));
	};

	const handleReset = () => {
		setStyle(defaultArticleState);
		onStyleChange({
			'--font-family': defaultArticleState.fontFamilyOption.value,
			'--font-size': defaultArticleState.fontSizeOption.value,
			'--font-color': defaultArticleState.fontColor.value,
			'--container-width': defaultArticleState.contentWidth.value,
			'--bg-color': defaultArticleState.backgroundColor.value,
		});
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const newStyle = {
			'--font-family': style.fontFamilyOption.value,
			'--font-size': style.fontSizeOption.value,
			'--font-color': style.fontColor.value,
			'--container-width': style.contentWidth.value,
			'--bg-color': style.backgroundColor.value,
		};
		onStyleChange(newStyle);
	};

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
				<form className={styles.form} onSubmit={handleSubmit}>
					<div className={styles.topContainer}>
						<h2 className={styles.topContainer__header}>Задайте параметры</h2>
					</div>
					<div className={styles.middleContainer}>
						<Select
							title='Шрифт'
							options={fontFamilyOptions}
							selected={style.fontFamilyOption}
							onChange={(selected: OptionType) =>
								handleChange('fontFamilyOption', selected)
							}
						/>
						<RadioGroup
							title='Размер шрифта'
							name='font-size'
							options={fontSizeOptions}
							selected={style.fontSizeOption}
							onChange={(selected: OptionType) =>
								handleChange('fontSizeOption', selected)
							}
						/>
						<Select
							title='Цвет шрифта'
							options={fontColors}
							selected={style.fontColor}
							onChange={(selected: OptionType) =>
								handleChange('fontColor', selected)
							}
						/>
						<Separator />
						<Select
							title='Цвет фона'
							options={backgroundColors}
							selected={style.backgroundColor}
							onChange={(selected: OptionType) =>
								handleChange('backgroundColor', selected)
							}
						/>
						<Select
							title='Ширина контента'
							options={contentWidthArr}
							selected={style.contentWidth}
							onChange={(selected: OptionType) =>
								handleChange('contentWidth', selected)
							}
						/>
					</div>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={handleReset} />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
