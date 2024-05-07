import { getAllProduct } from "@/services/Auth/authService";
import { create } from "zustand";

export const useStoreProducts = create((set) => ({
  loading: false,
  success: false,
  error: false,
  data: [],
  errorData: null,
  products: async () => {
    set({
      loading: true,
      success: false,
      error: false,
      data: [],
      errorData: null,
    });

    try {
      const products = await getAllProduct();
      set({
        loading: false,
        success: true,
        error: false,
        data: products.data,
        errorData: null,
      });
    } catch (error) {
      set({
        loading: false,
        success: false,
        error: true,
        data: [],
        errorData: error.message,
      });
    }
  },
}));
