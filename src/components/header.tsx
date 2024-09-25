import { NOTION_LINK, TELEGRAM_LINK } from "@/constants/links";
import { LibraryBig, Megaphone } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="">
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
            className="w-10 h-10 -rotate-45 -translate-y-1"
          />
          <span className="self-center text-3xl font-semibold whitespace-nowrap font-sugar">
            Jelly Beans
          </span>
        </a>
        <nav className="w-full md:w-auto md:block hidden">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0 ">
            <li>
              <NavItem href={NOTION_LINK}>
                <LibraryBig size={20} />
                <span>Resources</span>
              </NavItem>
            </li>
            <li>
              <NavItem href={TELEGRAM_LINK}>
                <Megaphone size={20} />
                <span>Contact</span>
              </NavItem>
            </li>
          </ul>
        </nav>
      </div>
    </header>
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
      className="inline-flex space-x-2 items-center justify-center whitespace-nowrap rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
    >
      {children}
    </a>
  );
}
