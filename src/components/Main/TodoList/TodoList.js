import axios from "axios";
import { categoryState, currentListState } from "../../../states";
import { ENDPOINT } from "../../../constants";
import { List } from "./List";
import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react";
import { getCurrentPath } from "../../../utils";

export const TodoList = () => {
  const currentCategory = useRecoilValue(categoryState);
  const [currentList, setCurrentList] = useRecoilState(currentListState);
  const current = getCurrentPath(currentCategory);

  useEffect(() => {
    axios
      .get(ENDPOINT + current)
      .then((res) => {
        const list = res.data;

        setCurrentList(list);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [current, setCurrentList]);

  return (
    <ul
      data-category-name={currentCategory}
      id="menu-list"
      className="mt-3 pl-0"
    >
      {currentList.map(({ id, title }, i) => {
        return <List key={i} id={id} title={title} path={current} />;
      })}
    </ul>
  );
};
