import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
	<ContentLoader
		speed={2}
		width={280}
		height={466}
		viewBox='0 0 280 466'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
		className='pizza-block'
	>
		<circle cx='140' cy='125' r='125' />
		<rect x='0' y='268' rx='10' ry='10' width='280' height='28' />
		<rect x='0' y='315' rx='10' ry='10' width='280' height='88' />
		<rect x='0' y='420' rx='10' ry='10' width='90' height='45' />
		<rect x='130' y='420' rx='10' ry='10' width='150' height='45' />
	</ContentLoader>
);

export default Skeleton;
