import { useSearchParams } from "react-router-dom";

function Pagination({ count, pageSize }) {
  const [searchParams, setSearchParams] = useSearchParams();

  // Read current page first
  const currentPage = searchParams.get("page") || 1;
  const currentPageNum = Number(currentPage);

  // Compute max page size for the query
  const pageCount = Math.ceil(count / pageSize);

  function handleNextPage() {
    // If the current page is the last maximum page for the query, return.
    if (currentPageNum === pageCount) return;
    // If not, add 1 to the current page
    searchParams.set("page", currentPageNum + 1);
    setSearchParams(searchParams);
  }

  function handlePreviousPage() {
    // If current page is already at 1, return.
    if (currentPageNum === 1) return;
    // If not, subtract 1 from the current page
    searchParams.set("page", currentPageNum - 1);
    setSearchParams(searchParams);
  }
  if (pageCount === 1) return null;

  return (
    <div className="mt-8 flex justify-end space-x-4 xs:text-lg md:mt-12 md:text-xl">
      <button
        className={currentPageNum === 1 ? "cursor-not-allowed" : ""}
        onClick={handlePreviousPage}
      >
        &larr; Previous{" "}
      </button>
      <span className="font-semibold">{currentPage}</span>
      <button
        className={currentPageNum === pageCount ? "cursor-not-allowed" : ""}
        onClick={handleNextPage}
      >
        Next &rarr;
      </button>
    </div>
  );
}

export default Pagination;
