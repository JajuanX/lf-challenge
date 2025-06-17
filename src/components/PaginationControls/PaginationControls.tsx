import { Link } from "react-router-dom";
import "./PaginationControls.scss";

type Props = {
	page: number;
	totalPages: number | null;
	loading: boolean;
};

/**
 * Pagination controls for navigating pages.
 * @param {Object} props
 * @param {number} props.page - The current page number.
 * @param {number | null} props.totalPages - Total number of pages.
 * @param {Function} props.onNext - Callback for the Next button.
 * @param {Function} props.onPrev - Callback for the Previous button.
 */

const PaginationControls = ({
	page,
	totalPages,
	loading,
}: Props) => {
	const isFirst = page <= 1;
	const isLast = totalPages ? page >= totalPages : false;

	return (
		<nav className="pagination">
			{isFirst || loading ? (
				<span
					className="pagination__link pagination__link--disabled"
					aria-disabled="true"
				>
					Previous
				</span>
			) : (
				<Link
					to={`/characters?page=${page - 1}`}
					className="pagination__link"
					aria-label="Previous Page"
				>
					Previous
				</Link>
			)}

			<span className="pagination__page">Page {page}</span>

			{isLast || loading ? (
				<span
					className="pagination__link pagination__link--disabled"
					aria-disabled="true"
				>
					Next
				</span>
			) : (
				<Link
					to={`/characters?page=${page + 1}`}
					className="pagination__link"
					aria-label="Next Page"
				>
					Next
				</Link>
			)}
		</nav>
	);
};

export default PaginationControls;
