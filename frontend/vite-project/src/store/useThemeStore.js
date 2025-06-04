import { create } from "zustand";

const applyTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
};

export const useThemeStore = create((set) => {
    const initialTheme = localStorage.getItem("chat-theme") || "cyberpunk";
    applyTheme(initialTheme);

    return {
        theme: initialTheme,
        setTheme: (theme) => {
            localStorage.setItem("chat-theme", theme);
            applyTheme(theme);
            set({ theme });
        }
    };
});