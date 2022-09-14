import { FC } from "react";
import { RiSearch2Line } from "react-icons/ri";
import styles from "./styles.module.css";

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

const SearchInput: FC<Props> = ({ onChange, onClick }) => {
  return (
    <div className={`${styles.searchInputWrapper}`}>
      <input
        className={`${styles.searchInput}`}
        placeholder="검색어를 입력하세요."
        onChange={onChange}
      />
      <RiSearch2Line
        className={`${styles.searchInputIcon}`}
        type="submit"
        onClick={onClick}
      />
    </div>
  );
};

export default SearchInput;
