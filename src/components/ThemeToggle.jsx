export default function ThemeToggle() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="bg-slate-200 dark:bg-slate-700 
                 px-3 py-1 rounded text-sm"
    >
      🌙 / ☀️
    </button>
  );
}
