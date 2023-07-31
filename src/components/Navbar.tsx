import { Component, JSX, Show, createSignal } from "solid-js";

const Header: Component<{ logoImg?: JSX.Element }> = (props) => {
  const [isMenuOpen, setMenuOpen] = createSignal(false);

  const toggleOpenMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav class="relative bg-white dark:bg-gray-900">
      <div class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div class="flex items-center justify-between">
          <a href="#" class="flex items-center">
            {props.logoImg}
            <div class="flex flex-col font-title">
              <h1 class="text-lg text-gray-800 font-semibold border-b border-gray-200">
                PAPA MUDA
              </h1>
              <h2 class="text-gray-800 font-semibold">Software</h2>
            </div>
          </a>
          {/* Mobile menu button */}
          <div class="flex md:hidden">
            <button
              onClick={toggleOpenMenu}
              type="button"
              class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              <Show when={!isMenuOpen()} fallback={<CloseIcon />}>
                <HamburgerIcon />
              </Show>
            </button>
          </div>
        </div>
        {/* Mobile Menu open: "block", Menu closed: "hidden" */}
        <div
          class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center"
          classList={{
            "translate-x-0 opacity-100": isMenuOpen(),
            "opacity-0 -translate-x-full": !isMenuOpen(),
          }}
        >
          <div class="flex flex-col md:flex-row md:mx-6">
            <a
              class="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0 font-title"
              href="#"
            >
              Home
            </a>
            <a
              class="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0 font-title"
              href="#"
            >
              Shop
            </a>
            <a
              class="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0 font-title"
              href="#"
            >
              Contact
            </a>
            <a
              class="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0 font-title"
              href="#"
            >
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

const HamburgerIcon: Component<{}> = (props) => {
  return (
    <svg
      x-show="!isOpen"
      xmlns="http://www.w3.org/2000/svg"
      class="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4 8h16M4 16h16"
      ></path>
    </svg>
  );
};
const CloseIcon: Component<{}> = (props) => {
  return (
    <svg
      x-show="isOpen"
      xmlns="http://www.w3.org/2000/svg"
      class="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  );
};
