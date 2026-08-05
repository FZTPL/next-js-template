"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Menu, Mail, MessageSquare, ChevronDown } from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
};

export interface NavbarProps {
  logoText?: string;
  navLinks?: NavLink[];
  userName?: string;
  userAvatarUrl?: string;
  hasMailNotification?: boolean;
  hasMessageNotification?: boolean;
  sidebarOpen?: boolean;
  onToggleSidebar?: () => void;
  onSearch?: (value: string) => void;
}

const defaultLinks: NavLink[] = [
  { label: "Documents", href: "#" },
  { label: "News", href: "/" },
  { label: "Payslip", href: "/" },
  { label: "Report", href: "/" },
];

export default function Navbar({

  navLinks = defaultLinks,
  userName = "Account",
  userAvatarUrl,
  hasMailNotification = true,
  hasMessageNotification = true,
  sidebarOpen = true,
  onToggleSidebar,
  onSearch,
}: NavbarProps) {
  const [query, setQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch?.(e.target.value);
  };

  return (
    <header
      className="
        sticky top-0 z-40 w-full
        border-b border-gray-200 dark:border-gray-800
        bg-white dark:bg-gray-950
        text-gray-900 dark:text-gray-100
        transition-colors
      "
    >
      <div className="flex h-16 items-center gap-3 px-4 sm:px-6 lg:px-8">
        {/* Hamburger (toggles the Sidebar component) + logo */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onToggleSidebar}
            aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
            aria-expanded={sidebarOpen}
            className="
              inline-flex items-center justify-center
              rounded-md p-2
              text-gray-500 hover:text-gray-800 hover:bg-gray-100
              dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-800
              transition-colors
            "
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {/* Search */}
        <div className="flex-1 min-w-0 max-w-xl">
          <label className="relative block">
            <span className="sr-only">Search anything</span>
            <Search
              className="
                pointer-events-none absolute left-3 top-1/2 -translate-y-1/2
                h-4 w-4 text-gray-400 dark:text-gray-500
              "
            />
            <input
              type="text"
              value={query}
              onChange={handleSearchChange}
              placeholder="Search anything..."
              className="
                w-full rounded-lg
                bg-gray-100 dark:bg-gray-900
                border border-transparent
                py-2 pl-9 pr-14 text-sm
                placeholder:text-gray-400 dark:placeholder:text-gray-500
                focus:outline-none focus:ring-2 focus:ring-emerald-500/50
                focus:bg-white dark:focus:bg-gray-800
                transition-colors
              "
            />
            <kbd
              className="
                hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2
                items-center gap-0.5 rounded-md
                border border-gray-200 dark:border-gray-700
                bg-white dark:bg-gray-800
                px-1.5 py-0.5 text-[11px] font-medium
                text-gray-500 dark:text-gray-400
              "
            >
              ⌘ F
            </kbd>
          </label>
        </div>

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center gap-6 shrink-0 px-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                text-sm font-medium
                text-gray-600 hover:text-gray-900
                dark:text-gray-300 dark:hover:text-white
                transition-colors
              "
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Icons + user */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          <IconButton
            label="Mail"
            icon={<Mail className="h-5 w-5" />}
            showDot={hasMailNotification}
          />
          <IconButton
            label="Messages"
            icon={<MessageSquare className="h-5 w-5" />}
            showDot={hasMessageNotification}
          />

          {/* User menu */}
          <button
            type="button"
            className="
              flex items-center gap-1.5 rounded-full pl-1 pr-1.5 py-1
              hover:bg-gray-100 dark:hover:bg-gray-800
              transition-colors
            "
          >
            {userAvatarUrl ? (
              <Image
                src={userAvatarUrl}
                alt={userName}
                width={32}
                height={32}
                className="h-8 w-8 rounded-full object-cover"
              />
            ) : (
              <span
                className="
                  grid h-8 w-8 place-items-center rounded-full
                  bg-emerald-100 text-emerald-700
                  dark:bg-emerald-900 dark:text-emerald-300
                  text-xs font-semibold
                "
              >
                {userName
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </span>
            )}
            <ChevronDown className="hidden sm:block h-4 w-4 text-gray-400 dark:text-gray-500" />
          </button>
        </div>
      </div>
    </header>
  );
}

function IconButton({
  icon,
  label,
  showDot,
}: {
  icon: React.ReactNode;
  label: string;
  showDot?: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className="
        relative inline-flex items-center justify-center
        rounded-full p-2
        text-gray-500 hover:text-gray-800 hover:bg-gray-100
        dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-800
        transition-colors
      "
    >
      {icon}
      {showDot && (
        <span
          className="
            absolute top-1.5 right-1.5 h-2 w-2 rounded-full
            bg-red-500 ring-2 ring-white dark:ring-gray-950
          "
        />
      )}
    </button>
  );
}