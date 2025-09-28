// store/useStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type State = {
  activeNav: string | null
  setNavItem: (name: string) => void
}

export const useStore = create<State>()(persist(
    (set) => ({
        activeNav: null,
        setNavItem: (name) => set({ activeNav: name }),
    }), 
    {
        name: 'nav-item',
    }
))