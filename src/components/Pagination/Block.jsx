import ReactPaginate from 'react-paginate';


import styles from './PaginationBlock.module.scss';

const PaginationBlock = ({ pageCount, onChangePage, isLoading }) => {

	return (
		<ReactPaginate
			className={[isLoading ? styles.none : styles.wrapper]}
			pageClassName={styles.page}
			activeClassName={styles.page_active}
			pageLinkClassName={styles.page__link}
			activeLinkClassName={styles.page__link_active}
			previousClassName={styles.previous}
			previousLinkClassName={styles.previous__link}
			nextClassName={styles.next}
			nextLinkClassName={styles.next__link}
			breakLabel='...'
			nextLabel='>'
			previousLabel='<'
			onPageChange={(event) => onChangePage(event.selected + 1)}
			pageRangeDisplayed={4}
			pageCount={pageCount}
		/>
	);
};

export default PaginationBlock;
