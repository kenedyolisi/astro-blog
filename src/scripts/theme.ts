const theme = (() => {
  if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  }

  const darkThemeQuery = window.matchMedia("prefers-color-scheme: dark");

  if (darkThemeQuery.matches) {
    return "dark";
  }

  return "light";
})();

const htmlElem = document.documentElement;

if (theme === "light") {
  htmlElem.classList.remove("dark");
} else {
  htmlElem.classList.add("dark");
}

function handleThemeToggle() {
  const htmlElem = document.documentElement;

  htmlElem.classList.toggle("dark");

  const isDark = htmlElem.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

document
  .getElementById("theme-toggle")
  .addEventListener("click", handleThemeToggle);
