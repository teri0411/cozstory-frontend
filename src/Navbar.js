import { Link } from "react-router-dom";

export default function Navbar({ children }) {
  return <div className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-gray-900/10 dark:border-gray-50/[0.06] bg-white/90 supports-backdrop-blur:bg-white/95 dark:bg-gray-900/75">
    <div className="max-w-8xl mx-auto">
      <div className="py-4 border-b border-gray-900/10 lg:px-8 lg:border-0 dark:border-gray-300/10 px-4 lg:mx-0">
        <div className="relative flex items-center">
          <Link to="/" className="mr-3 flex-none overflow-hidden md:w-auto">
            <span className="sr-only">CozStory</span>
            <svg width="57" height="32" viewBox="0 0 57 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M 21.242 18 L 18 21.317 L 18 27.68 L 21.245 31 L 52.755 31 L 56 27.68 L 56 21.317 L 52.758 18 L 21.242 18 Z M 3.317 18 L 0 21.317 L 0 27.68 L 3.32 31 L 9.68 31 L 13 27.68 L 13 21.317 L 9.682 18 L 3.317 18 Z" transform="translate(-42 -42) translate(42 42)"></path>
              <path d="M 36.23 0 L 33.001 3.316 L 33.001 9.68 L 36.233 13 L 53.766 13 L 56.998 9.68 L 56.998 3.316 L 53.769 0 L 36.23 0 Z" transform="translate(-42 -42) translate(42 42) matrix(1, 0, 0, 1, -1, 0)" fill="#3a06be"></path>
            </svg>
          </Link>
          <Link to="/">
            <span className="relative text-xl font-bold text-indigo-800">CozStory</span>
          </Link>
          <div className="relative lg:flex items-center ml-auto">
            <nav className="text-sm leading-6 font-semibold text-gray-700 dark:text-gray-200">
              {children}
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
}