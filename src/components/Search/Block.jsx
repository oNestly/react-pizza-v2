import { useContext } from 'react';
import { SearchContext } from '../../App'

import styles from './SearchBlock.module.scss';

const SearchBlock = () => {
	const { searchValue, setSearchValue } = useContext(SearchContext);

	return (
		<div className={styles.root}>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' className={styles.icon}>
				<title />
				<g id='search'>
					<path d='M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z' />
				</g>
			</svg>
			<input
				value={searchValue}
				onChange={(event) => setSearchValue(event.target.value)}
				className={styles.input}
				placeholder='Поиск пиццы...'
			/>
			{searchValue && (
				<svg
					onClick={() => setSearchValue('')}
					className={styles.clear}
					xmlns='http://www.w3.org/2000/svg'
					version='1.1'
					viewBox='0 0 212.982 212.982'
				>
					<g id='Close'>
						<path d='M131.804,106.491l75.936-75.936c6.99-6.99,6.99-18.323,0-25.312   c-6.99-6.99-18.322-6.99-25.312,0l-75.937,75.937L30.554,5.242c-6.99-6.99-18.322-6.99-25.312,0c-6.989,6.99-6.989,18.323,0,25.312   l75.937,75.936L5.242,182.427c-6.989,6.99-6.989,18.323,0,25.312c6.99,6.99,18.322,6.99,25.312,0l75.937-75.937l75.937,75.937   c6.989,6.99,18.322,6.99,25.312,0c6.99-6.99,6.99-18.322,0-25.312L131.804,106.491z' />
					</g>
				</svg>
			)}
		</div>
	);
};

export default SearchBlock;
