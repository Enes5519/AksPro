import styles from "./Dropdown.module.css";
import IconChevronDown from "@/icons/chevron_down.svg";

const Dropdown = ({ id, title, children }) => (
  <div className={`relative z-10 inline-block text-left h-full ${styles.dropdown}`}>
    <button
      className="inline-flex items-center gap-2 w-full h-full px-4 py-2 transition duration-150 ease-in-out rounded-md hover:text-red-500 focus:outline-none active:text-gray-800"
      type="button"
      aria-haspopup="true"
      aria-expanded="true"
      aria-controls={id}
    >
      <span>{title}</span>
      <IconChevronDown className="h-6 w-6" />
    </button>
    <div
      className={`opacity-0 invisible transition-all duration-300 transform origin-top-right -translate-y-2 ${styles.dropdownMenu}`}
    >
      <div
        className="flex divide-x absolute right-0 origin-top-right bg-white border border-gray-200 divide-gray-100 rounded-md shadow-lg outline-none"
        id={id}
        role="menu"
      >
        {children}
      </div>
    </div>
  </div>
);

export default Dropdown;
