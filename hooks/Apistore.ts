 
import {create} from "zustand";

interface UserStore {
  data: any[] | null; // Adjust the type for your data
  setUserData: (data: any[] | null) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  data: null,
  setUserData: (data) => set({ data }),
}));