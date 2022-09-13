import { Post } from "@common/interfaces";
import { atom } from "recoil";
import { POST_KEY, SEARCH_TEXT_KEY } from "./key";

export const postAtom = atom<Array<Post>>({
  key: POST_KEY,
  default: [],
});

export const searchTextAtom = atom<string>({
  key: SEARCH_TEXT_KEY,
  default: "",
});
