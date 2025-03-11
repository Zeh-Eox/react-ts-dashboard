import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";
import User from "../types/User";

interface AuthState {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const useUserInformationStore = create<AuthState>()(
    devtools(
        persist((set) => (
            {
                user: null,
                login: (user: User) => set({ user, isAuthenticated: true }),
                logout: () => set({ user: null, isAuthenticated: false }),
                isAuthenticated: false
            }
        ),
        {
            name: 'user-information-storage', // Storage name
            storage: createJSONStorage(() => localStorage) // Storage type
        })
    )
)

export default useUserInformationStore;