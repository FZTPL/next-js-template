"use client";

import {
  LayoutDashboard,
  FileText,
  Newspaper,
  Receipt,
  BarChart3,
  Settings,
  X,
} from "lucide-react";


export type SidebarItem = {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
};

export interface SidebarProps {
  items?: SidebarItem[];
  activeHref?: string;
  open: boolean;
  onClose: () => void;
}

const defaultItems: SidebarItem[] = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Documents", href: "/documents", icon: FileText },
  { label: "News", href: "/news", icon: Newspaper },
  { label: "Payslip", href: "/payslip", icon: Receipt },
  { label: "Report", href: "/report", icon: BarChart3 },
];

export default function Sidebar({
  items = defaultItems,
  activeHref = "/",
  open,
  onClose,
}: SidebarProps) {
  return (
    <>
      {/* Mobile / tablet backdrop */}
      <div
        onClick={onClose}
        aria-hidden
        className={`
          fixed inset-0 z-40 bg-black/40 lg:hidden
          transition-opacity duration-200
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />

      <aside
        className={`
          fixed lg:sticky top-0 lg:top-16 left-0 z-50 lg:z-30
          h-screen lg:h-[calc(100vh-4rem)]
          flex flex-col
          bg-white dark:bg-gray-950
          border-r border-gray-200 dark:border-gray-800
          transition-all duration-200 ease-in-out
          w-64
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
          ${open ? "lg:w-64" : "lg:w-18"}
        `}
      >
        <div className="flex items-center justify-between px-4 h-16  border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-2">
            <span
              className="grid h-7 w-7 place-items-center rounded-md bg-emerald-500 text-white font-bold text-sm"
              aria-hidden
            >
              H
            </span>
            <span className="text-base font-semibold tracking-tight text-gray-900 dark:text-gray-100">
              HRDashboard
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close sidebar"
            className="
              rounded-md p-2
              text-gray-500 hover:text-gray-800 hover:bg-gray-100
              dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-800
              transition-colors
            "
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-3 px-2">
          <ul className="space-y-1">
            {items.map((item) => {
              const Icon = item.icon;
              const isActive = item.href === activeHref;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    title={item.label}
                    className={`
                      group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium
                      transition-colors
                      ${
                        isActive
                          ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
                          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                      }
                    `}
                  >
                    {Icon && (
                      <Icon
                        className={`h-5 w-5 shrink-0 ${
                          isActive
                            ? "text-emerald-600 dark:text-emerald-300"
                            : "text-gray-400 group-hover:text-gray-600 dark:text-gray-500 dark:group-hover:text-gray-300"
                        }`}
                      />
                    )}
                    <span className="lg:hidden truncate">{item.label}</span>
                    {/* On desktop, label only shows when sidebar is expanded */}
                    <span className={`hidden truncate ${open ? "lg:inline" : "lg:hidden"}`}>
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-gray-100 dark:border-gray-800 p-2">
          <a
            href="/settings"
            title="Settings"
            className="
              flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium
              text-gray-600 hover:bg-gray-100 hover:text-gray-900
              dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white
              transition-colors
            "
          >
            <Settings className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500" />
            <span className="lg:hidden truncate">Settings</span>
            <span className={`hidden truncate ${open ? "lg:inline" : "lg:hidden"}`}>
              Settings
            </span>
          </a>
        </div>
      </aside>
    </>
  );
}