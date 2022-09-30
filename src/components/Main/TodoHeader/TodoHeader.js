import { useRecoilValue } from "recoil";
import { categoryState, currentListState } from "../../../states";

export const TodoHeader = () => {
  const currentCategory = useRecoilValue(categoryState);
  const currentList = useRecoilValue(currentListState);

  return (
    <div className="heading d-flex justify-between">
      <h2 id="category-title" className="mt-1">
        {currentCategory} 리스트
      </h2>
      <span className="mr-2 mt-4 menu-count">총 {currentList.length} 개</span>
    </div>
  );
};
