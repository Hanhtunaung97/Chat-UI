import { create } from "zustand";

const useUserStore = create((set) => ({
  user: [],
  setUser: (user) => set((state) => ({ user: user })),
  resetUser: () => set((state) => ({ user: [] })),
}));
export default useUserStore;
