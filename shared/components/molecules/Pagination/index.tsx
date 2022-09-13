import { usePagination } from "shared/hooks/usePagination";
import Link from "next/link";
import { FC } from "react";
import styles from "./styles.module.css";

interface Props {
  onChange: (pageNum: number) => void;
  totalCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination: FC<Props> = ({
  onChange,
  totalCount,
  pageSize,
  currentPage,
}) => {
  const { isPreview, isNext, pageNumbers } = usePagination({
    totalCount,
    pageSize,
    currentPage,
  });

  return (
    <div className="flex justify-center">
      <nav aria-label="Pagination">
        <ul className="flex list-style-none">
          <li>
            <div className="relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none cursor-pointer">
              <span aria-hidden="true">&laquo;</span>
            </div>
          </li>
          {pageNumbers.map((number, i) => (
            <li key={i}>
              <div
                onClick={() => onChange(number)}
                className="relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none cursor-pointer"
              >
                {number}
              </div>
            </li>
          ))}
          <li>
            <div
              className="relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none cursor-pointer"
              aria-label="Next"
            >
              <span aria-hidden="true">&raquo;</span>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
  // return <Link href="/"></Link>;
};

export default Pagination;
