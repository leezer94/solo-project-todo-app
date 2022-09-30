import { useSetRecoilState } from "recoil";
import { categoryState } from "../../states";
import { CATEGORIES } from "../../constants";

import { CategoryButton } from "../@commons/Button/CategoryButton";

export const Header = () => {
  const setCurrent = useSetRecoilState(categoryState);

  return (
    <header className="my-4">
      <a href="/" className="text-black">
        <h1 className="text-center font-bold">📋 TODO LIST APP</h1>
      </a>
      <nav className="d-flex justify-center flex-wrap">
        {CATEGORIES.map((category, i) => {
          return (
            <CategoryButton
              key={i}
              title={category.name}
              onClick={(e) => setCurrent(e.target.textContent)}
            />
          );
        })}
      </nav>
    </header>
  );
};
