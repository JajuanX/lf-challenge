import "./PaginationControls.scss";

type Props = {
	page: number;
	totalPages: number | null;
	onNext: () => void;
	onPrev: () => void;
};

/**
 * Pagination controls for navigating pages.
 * @param {Object} props
 * @param {number} props.page - The current page number.
 * @param {number | null} props.totalPages - Total number of pages.
 * @param {Function} props.onNext - Callback for the Next button.
 * @param {Function} props.onPrev - Callback for the Previous button.
 */

const PaginationControls = ({ page, totalPages, onNext, onPrev }: Props) => {
	return (
		<nav className="pagination">
			<button
				className="pagination__button"
				onClick={onPrev}
				disabled={page === 1}
			>
				Previous
			</button>
			<span className="pagination__page">Page {page}</span>
			<button
				className="pagination__button"
				onClick={onNext}
				disabled={totalPages ? page >= totalPages : false}
			>
				Next
			</button>
		</nav>
	);
};

export default PaginationControls;
