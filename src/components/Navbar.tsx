import { Component, JSX, Show, createSignal } from "solid-js";

const Header: Component<{ logoImg?: JSX.Element; bgColorClass?: string }> = (
  props,
) => {
  const [isMenuOpen, setMenuOpen] = createSignal(false);

  const toggleOpenMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const bgColorClass = props.bgColorClass
    ? props.bgColorClass
    : "bg-white dark:bg-gray-900";

  return (
    <nav class={`relative ${bgColorClass}`}>
      <div class="container mx-auto py-4 md:flex md:items-center md:justify-between">
        <div class="flex items-center justify-between">
          <a href="/" class="flex items-center">
            {props.logoImg}
            <div class="flex flex-col font-title">
              <h1 class="border-b border-gray-200 text-lg font-semibold text-gray-800">
                PAPA MUDA
              </h1>
              <h2 class="font-semibold text-gray-800">Software</h2>
            </div>
          </a>
          {/* Mobile menu button */}
          <div class="flex pr-4 md:hidden">
            <button
              onClick={toggleOpenMenu}
              type="button"
              class="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400"
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
          class="absolute inset-x-0 z-20 w-full bg-white px-6 py-4 transition-all duration-300 ease-in-out dark:bg-gray-900 md:relative md:top-0 md:mt-0 md:flex md:w-auto md:translate-x-0 md:items-center md:bg-transparent md:p-0 md:opacity-100 md:dark:bg-transparent"
          classList={{
            "translate-x-0 opacity-100": isMenuOpen(),
            "opacity-0 -translate-x-full": !isMenuOpen(),
          }}
        >
          <div class="flex flex-col md:flex-row lg:mx-6">
            <a
              class="my-2 transform font-title text-gray-700 transition-colors duration-300 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="/"
            >
              Home
            </a>
            {/* <a
              class="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0 font-title"
              href="#"
            >
              Pembuatan Website
            </a>
            <a
              class="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0 font-title"
              href="#"
            >
              Pembuatan Aplikasi
            </a> */}
            <a
              class="my-2 transform font-title text-gray-700 transition-colors duration-300 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="/projects"
            >
              Projects
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
      class="h-6 w-6"
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
      class="h-6 w-6"
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
