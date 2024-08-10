import { createRoot } from 'react-dom/client';
import { CSSProperties, StrictMode, useState } from 'react';
import clsx from 'clsx';

import { Article } from 'components/article';
import { ArticleParamsForm } from 'components/article-params-form';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [style, setStyle] = useState({
		'--font-family': defaultArticleState.fontFamilyOption.value,
		'--font-size': defaultArticleState.fontSizeOption.value,
		'--font-color': defaultArticleState.fontColor.value,
		'--container-width': defaultArticleState.contentWidth.value,
		'--bg-color': defaultArticleState.backgroundColor.value,
	});
	const handleStyleChange = (newStyle: CSSProperties) => {
		setStyle((prevStyle) => ({ ...prevStyle, ...newStyle }));
	};

	return (
		<div className={clsx(styles.main)} style={style as CSSProperties}>
			<ArticleParamsForm onStyleChange={handleStyleChange} />
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
