import { PiArrowFatLeftBold, PiArrowFatRightBold } from "react-icons/pi";
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
      {currentPageNum !== 1 && (
        <button
          className={`${currentPageNum === 1 ? "cursor-not-allowed" : ""} flex items-center gap-2 px-1`}
          onClick={handlePreviousPage}
        >
          <span>
            <PiArrowFatLeftBold className="size-6" />
          </span>
          <span className="font-semibold">Previous</span>
        </button>
      )}
      <span className="text-lg font-semibold">{currentPage}</span>
      {currentPageNum !== pageCount && (
        <button
          className={`${currentPageNum === pageCount ? "cursor-not-allowed" : ""} flex items-center gap-2 px-1`}
          onClick={handleNextPage}
        >
          <span className="font-semibold">Next</span>
          <span>
            <PiArrowFatRightBold className="size-6" />
          </span>
        </button>
      )}
    </div>
  );
}

export default Pagination;
