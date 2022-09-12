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
            <a
              className="relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 focus:shadow-none"
              href="#"
              aria-label="Previous"
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li>
            <a
              className="relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href="#"
            >
              1
            </a>
          </li>
          <li>
            <a
              className="relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href="#"
            >
              2
            </a>
          </li>
          <li>
            <a
              className="relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href="#"
            >
              3
            </a>
          </li>
          <li>
            <a
              className="relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href="#"
              aria-label="Next"
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
  // return <Link href="/"></Link>;
};

export default Pagination;
