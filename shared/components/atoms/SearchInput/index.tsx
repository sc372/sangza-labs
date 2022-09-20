import { ChangeEvent, FC, KeyboardEvent } from "react";
import { RiSearch2Line } from "react-icons/ri";
import styles from "./styles.module.css";

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

const SearchInput: FC<Props> = ({ onChange, onClick, onKeyDown }) => {
  return (
    <div className={`${styles.searchInputWrapper}`}>
      <input
        className={`${styles.searchInput}`}
        placeholder="검색어를 입력하세요."
        onChange={onChange}
        onKeyDown={onKeyDown}
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
