// import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCategoryId } from '../redux/slices/filterSlice';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/Pizza/Block';
import PizzaSkeleton from '../components/Pizza/Skeleton';
import PaginationBlock from '../components/Pagination/Block';

const Home = () => {
	const dispatch = useDispatch();
	const searchValue = useSelector((state) => state.filter.searchValue);
	const categoryId = useSelector((state) => state.filter.categoryId);
	const sortType = useSelector((state) => state.filter.sort.sortProperty);

	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [pageCount, setPageCount] = useState(0);

	const onClickCategory = (id) => {
		dispatch(setCategoryId(id));
	};

	useEffect(() => {
		setIsLoading(true);

		const order = sortType.includes('-') ? 'asc' : 'desc';
		const sortBy = sortType.replace('-', '');
		const category = categoryId > 0 ? `category=${categoryId}` : '';
		const search = searchValue ? `&search=${searchValue}` : '';

		fetch(
			`https://631f1c5c58a1c0fe9f60945d.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}`
		)
			.then((res) => res.json())
			.then((arr) => {
				setPageCount(Math.ceil(arr.length / 4));
			})
			.then(() => {
				fetch(
					`https://631f1c5c58a1c0fe9f60945d.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
				)
					.then((res) => res.json())
					.then((arr) => {
						setItems(arr);
						setIsLoading(false);
					});
			});
	}, [categoryId, sortType, searchValue, currentPage, pageCount]);

	const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
	const skeletons = [...new Array(4)].map((_, index) => <PizzaSkeleton key={index} />);

	return (
		<>
			<div className='content__top'>
				<Categories value={categoryId} onClickCategory={(index) => onClickCategory(index)} />
				<Sort />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>{isLoading ? skeletons : pizzas}</div>
			<PaginationBlock
				isLoading={isLoading}
				pageCount={pageCount}
				onChangePage={(number) => setCurrentPage(number)}
			/>
		</>
	);
};

export default Home;
