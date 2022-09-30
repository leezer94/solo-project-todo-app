import { Header } from "../Header/Header";
import { Main } from "../Main/Main";

export const Container = () => {
  return (
    <div className="d-flex justify-center mt-5 w-100">
      <div className="w-100">
        <Header />
        <Main />
      </div>
    </div>
  );
};
