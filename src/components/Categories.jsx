import { useState } from 'react';

function Categories() {
	const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

	const categories = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	];

	const onClickCategory = (index) => {
		setActiveCategoryIndex(index);
	};

	return (
		<div className='categories'>
			<ul>
				{categories.map((value, index) => (
					<li
						onClick={() => onClickCategory(index)}
						className={activeCategoryIndex === index ? 'active' : ''}
						key={index}
					>
						{value}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Categories;
