import { FC } from "react";

interface Props {
  onPageChange: (pageNum: number) => void;
  currentPage: number;
  isPreview: boolean;
  isNext: boolean;
  pageNumbers: Array<number>;
}

const Pagination: FC<Props> = ({
  onPageChange,
  currentPage,
  isPreview,
  isNext,
  pageNumbers,
}) => {
  return (
    <div className="flex justify-center">
      <nav aria-label="Pagination">
        <ul className="flex list-style-none">
          <li>
            <div
              onClick={() => isPreview && onPageChange(pageNumbers[0])}
              className="relative block p-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none cursor-pointer"
            >
              <span aria-hidden="true">&laquo;&laquo;</span>
              {/* <RiArrowLeftSLine /> */}
            </div>
          </li>
          <li>
            <div
              onClick={() => isPreview && onPageChange(currentPage - 1)}
              className="relative block p-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none cursor-pointer"
            >
              <span aria-hidden="true">&laquo;</span>
              {/* <RiArrowLeftSLine /> */}
            </div>
          </li>
          {pageNumbers.map((number, i) => (
            <li key={i}>
              <div
                onClick={() => onPageChange(number)}
                className="relative block py-2 px-4 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none cursor-pointer"
              >
                {number}
              </div>
            </li>
          ))}
          <li>
            <div
              onClick={() => isNext && onPageChange(currentPage + 1)}
              className="relative block p-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none cursor-pointer"
              aria-label="Next"
            >
              <span aria-hidden="true">&raquo;</span>
              {/* <RiArrowRightSLine /> */}
            </div>
          </li>
          <li>
            <div
              onClick={() =>
                isNext && onPageChange(pageNumbers[pageNumbers.length - 1])
              }
              className="relative block p-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none cursor-pointer"
              aria-label="Next"
            >
              <span aria-hidden="true">&raquo;&raquo;</span>
              {/* <RiArrowRightSLine /> */}
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
  // return <Link href="/"></Link>;
};

export default Pagination;
