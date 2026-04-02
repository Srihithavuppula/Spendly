import { useApp } from "../../context/AppContext";

const Navbar = () => {
  const { user, theme, toggleTheme, toggleRole } = useApp();

  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 px-6 py-4 flex items-center justify-between sticky top-0 z-10 transition-colors duration-200">
      <div className="flex items-center gap-3">
        {/* Polished Spendly Logo */}
        <span className="inline-flex items-center gap-2.5">
          <div className="flex items-center justify-center w-8 h-8 rounded-[10px] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-400 shadow-[0_2px_10px_rgba(168,85,247,0.4)] border border-white/20 dark:border-gray-800/50">
            <svg className="w-4 h-4 text-white drop-shadow-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a4 4 0 0 0-8 0c0 4 8 3 8 7a4 4 0 0 1-8 0" />
              <path d="M12 3v18" />
            </svg>
          </div>
          <span className="text-[22px] font-black tracking-tight text-gray-600 dark:text-white select-none">
            Spendly
          </span>
        </span>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors shadow-sm"
          aria-label="Toggle dark mode"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>

        {/* Role badge button */}
        <button
          onClick={toggleRole}
          className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${user.role === "admin"
            ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
            : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
            } transition-colors hover:opacity-80 cursor-pointer shadow-sm`}
          title="Click to toggle role"
        >
          {user.role === "admin" ? (
            <>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              Admin
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              Viewer
            </>
          )}
        </button>

        {/* Avatar */}
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
          {user.avatar}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;