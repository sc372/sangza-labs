import { Post } from "@common/interfaces";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { postAtom, searchTextAtom } from "./atom";

interface UsePostActionsParam {
  posts: Array<Post>;
}

interface UsePostActions { }

type UsePostActionsFunction = (params: UsePostActionsParam) => UsePostActions;

export const usePostActions: UsePostActionsFunction = ({ posts }) => {
  const [postsState, setPostsState] = useRecoilState(postAtom);
  const [searchTextState, setSearchTextState] = useRecoilState(searchTextAtom);

  useEffect(() => { }, []);

  return {};
};
