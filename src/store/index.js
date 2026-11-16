import { create } from "zustand";
import * as Yup from "yup";
import { data } from "react-router-dom";

export const validationSchema = Yup.object({
  name: Yup.string().required().min(3),
  price: Yup.number().required().min(1).max(5000),
  imgsrc: Yup.string().required().url(),
  instock: Yup.boolean(),
});

export const useIndex = create((set) => ({
  index: null,
  setIndex: (index) => set({ index }),  
}));

export const useProducts = create((set) => ({
  products: JSON.parse(localStorage.getItem("products") || "[]"),
  setProducts: (data) => set(() => ({ products: [...data] })),
}));
