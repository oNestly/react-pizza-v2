// import React from 'react';
import { useState, useEffect } from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/Pizza/Block';
import PizzaSkeleton from '../components/Pizza/Skeleton';

const Home = () => {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [categoryId, setCategoryId] = useState(0);
	const [sortType, setSortType] = useState({
		name: 'популярности (DESC)',
		sortProperty: 'rating'
	});

	useEffect(() => {
		setIsLoading(true);

		const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
		const sortBy = sortType.sortProperty.replace('-', '');
		const category = categoryId > 0 ? `category=${categoryId}` : '';

		fetch(`https://631f1c5c58a1c0fe9f60945d.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`)
			.then((res) => res.json())
			.then((arr) => {
				setItems(arr);
				setIsLoading(false);
			});
		window.scrollTo(0, 0);
	}, [categoryId, sortType]);

	return (
		<>
			<div className='content__top'>
				<Categories value={categoryId} onClickCategory={(index) => setCategoryId(index)} />
				<Sort value={sortType} onClickSort={(index) => setSortType(index)} />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{isLoading
					? [...new Array(6)].map((_, index) => <PizzaSkeleton key={index} />)
					: items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
			</div>
		</>
	);
};

export default Home;
