import styles from "./styles.module.css";
import { RiSearch2Line } from "react-icons/ri";

const SearchInput = () => {
  return (
    <div className={`${styles.searchInputWrapper}`}>
      <input
        className={`${styles.searchInput}`}
        placeholder="검색어를 입력하세요."
      />
      <RiSearch2Line className={`${styles.searchInputIcon}`} type="submit" />
    </div>
  );
};

export default SearchInput;
