import { atom } from "recoil";

export const categoryState = atom({
  key: "category",
  default: "청소",
});

export const currentListState = atom({
  key: "currentList",
  default: [],
});
