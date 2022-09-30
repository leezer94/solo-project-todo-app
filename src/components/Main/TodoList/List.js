import axios from "axios";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { ENDPOINT } from "../../../constants";
import { currentListState } from "../../../states";

export const List = ({ id, title, path }) => {
  const [currentList, setCurrentList] = useRecoilState(currentListState);
  const index = currentList.findIndex((list) => list.id === id);
  const currentTodo = currentList[index];

  const handleDelete = () => {
    axios.delete(ENDPOINT + path + `/${id}`).then(() => {
      const index = currentList.findIndex((list) => list.id === id);
      const deleted = [
        ...currentList.slice(0, index),
        ...currentList.slice(index + 1),
      ];

      setCurrentList(deleted);
    });
  };

  const handleModify = () => {
    const newTodo = window.prompt("수정내용을 입력해 주세요.");

    axios.patch(ENDPOINT + path + `/${id}`, { title: newTodo }).then(() => {
      const modifiedTodo = {
        ...currentTodo,
        title: newTodo,
      };

      const modified = [
        ...currentList.slice(0, index),
        modifiedTodo,
        ...currentList.slice(index + 1),
      ];

      setCurrentList(modified);
    });
  };

  const handleComplete = () => {
    const { completed } = currentTodo;

    axios
      .patch(ENDPOINT + path + `/${id}`, { completed: !completed })
      .then(() => {
        const modifiedTodo = {
          ...currentTodo,
          completed: !completed,
        };

        const modified = [
          ...currentList.slice(0, index),
          modifiedTodo,
          ...currentList.slice(index + 1),
        ];

        setCurrentList(modified);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <li data-name-id={id} className="menu-list-item d-flex items-center py-2">
      <Span className="w-100 pl-2 menu-name" completed={currentTodo.completed}>
        {title}
      </Span>
      <button
        type="button"
        className="bg-gray-50 text-gray-500 text-sm mr-1 menu-sold-out-button"
        onClick={handleComplete}
      >
        완료
      </button>
      <button
        type="button"
        className="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
        onClick={handleModify}
      >
        수정
      </button>
      <button
        type="button"
        className="bg-gray-50 text-gray-500 text-sm menu-remove-button"
        onClick={handleDelete}
      >
        삭제
      </button>
    </li>
  );
};

const Span = styled.span`
  text-decoration-line: ${(props) =>
    props.completed ? "line-through" : "none"};
`;
