import axios from "axios";
import { useCallback, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { ENDPOINT } from "../../../constants";
import { categoryState, currentListState } from "../../../states";
import { getCurrentPath } from "../../../utils";

export const TodoForm = () => {
  const currentCategory = useRecoilValue(categoryState);
  const [currentList, setCurrentList] = useRecoilState(currentListState);
  const [title, setTitle] = useState("");
  const current = getCurrentPath(currentCategory);
  const titleRef = useRef(null);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const newTodo = { id: currentList.length + 1, title, completed: false };

      axios
        .post(ENDPOINT + current, newTodo)
        .then(() => setCurrentList([...currentList, newTodo]));

      titleRef.current.value = "";
    },
    [current, currentList, setCurrentList, title]
  );

  return (
    <form onSubmit={handleSubmit}>
      <div className="d-flex w-100">
        <label htmlFor="menu-name" className="input-label" hidden>
          할일 추가 하기
        </label>
        <input
          type="text"
          ref={titleRef}
          name="menuName"
          className="input-field"
          placeholder="추가할 할 일을 적어주세요."
          autoComplete="off"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          data-category-name="espresso"
          type="button"
          name="submit"
          className="input-submit bg-green-600 ml-2"
          onClick={handleSubmit}
        >
          확인
        </button>
      </div>
    </form>
  );
};
