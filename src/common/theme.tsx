function handleSystemThemeChange(ev: MediaQueryListEvent): void {
    if (ev.matches)
        setTheme("dark");
    else
        setTheme("light");
}

function getSystemTheme(): MediaQueryList {
    return window.matchMedia("(prefers-color-scheme:dark)");
}

/**
 * Returns the saved theme, otherwise system theme.
 */
export function getTheme(): string {
    return localStorage.getItem("theme") || (getSystemTheme().matches ? "dark" : "light");
}

export function setTheme(theme: "light" | "dark" | "system"): void {
    localStorage.setItem("theme", theme);

    const html = document.documentElement;
    const mediaQueryList = getSystemTheme();

    if (theme === "system") {
        theme = mediaQueryList.matches ? "dark" : "light";
        listenSystemTheme(mediaQueryList);
    }
    else {
        mediaQueryList.removeEventListener("change", handleSystemThemeChange);
    }

    html.setAttribute("data-theme", theme);
    (document.body.style as any).webkitColorScheme = theme;

    const meta = document.head.querySelector("meta[name='color-scheme']") as HTMLMetaElement;
    meta.content = theme;
}

export function listenSystemTheme(mediaQueryList?: MediaQueryList): void {
    mediaQueryList = mediaQueryList || getSystemTheme();
    mediaQueryList.addEventListener("change", handleSystemThemeChange);
}