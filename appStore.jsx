// src/store/appStore.js

import { create } from "zustand";

const useAppStore = create((set) => ({
  activeApp: "services",
  setActiveApp: (appId) => set({ activeApp: appId }),
}));

export default useAppStore;
