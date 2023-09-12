import { create } from "zustand";

// Create your store
const useStore = create((set) => ({
  // Define your initial state here
  currentNode: 0,
  setCurrentNode: (node) => set((state) => ({ count: node })),
}));

export default useStore;
