 
import {create} from "zustand";

interface UserStore {
  data: any;
  setUserData: (data:any) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  data: null,
  setUserData: (data) => set({ data }),
}));