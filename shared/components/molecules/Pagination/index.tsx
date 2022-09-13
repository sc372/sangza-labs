import { usePagination } from "@hooks/usePagination";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

interface Props<T> {
  data: Array<T>;
  onChange: (pageNum: number) => void;
  totalCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination = <T,>({
  data,
  onChange,
  totalCount,
  pageSize,
  currentPage,
}: Props<T>) => {
  const { isPreview, isNext, pageNumbers } = usePagination({
    data,
    totalCount,
    pageSize,
    currentPage,
  });

  return (
    <div className="flex justify-center">
      <nav aria-label="Pagination">
        <ul className="flex list-style-none">
          <li>
            <div
              onClick={() => isPreview && onChange(currentPage - 1)}
              className="relative block p-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none cursor-pointer"
            >
              {/* <span aria-hidden="true">&laquo;</span> */}
              <RiArrowLeftSLine />
            </div>
          </li>
          {pageNumbers.map((number, i) => (
            <li key={i}>
              <div
                onClick={() => onChange(number)}
                className="relative block py-2 px-4 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none cursor-pointer"
              >
                {number}
              </div>
            </li>
          ))}
          <li>
            <div
              onClick={() => isNext && onChange(currentPage + 1)}
              className="relative block p-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none cursor-pointer"
              aria-label="Next"
            >
              {/* <span aria-hidden="true">&raquo;</span> */}
              <RiArrowRightSLine />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
  // return <Link href="/"></Link>;
};

export default Pagination;
