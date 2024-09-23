import { NOTION_LINK, TELEGRAM_LINK } from "@/constants/links";
import Image from "next/image";

export default function Header() {
  return (
    <nav className="">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://jellybeans.wtf/"
          className="flex items-end space-x-2 rtl:space-x-reverse"
        >
          <Image
            src={"/logo.svg"}
            alt="Jelly Beans Logo"
            width={300}
            height={300}
            className="w-10 h-10 -rotate-45 -translate-y-0.5"
          />
          <span className="self-center text-3xl font-semibold whitespace-nowrap font-sugar">
            Jelly Beans
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0 ">
            <li>
              <NavItem href={NOTION_LINK}>Resources</NavItem>
            </li>
            <li>
              <NavItem href={TELEGRAM_LINK}>Contact</NavItem>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="inline-flex items-center justify-center whitespace-nowrap rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
    >
      {children}
    </a>
  );
}
