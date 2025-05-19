"use client";
import React, { ReactNode } from "react";
import {
  AiOutlineUser,
  AiOutlineDiff,
  AiOutlineFolderOpen,
  AiOutlineTeam,
  AiOutlineAppstore,
  AiOutlineApartment,
} from "react-icons/ai";
import Link from "next/link";

type NavItem = { href: string; label: string; icons?: ReactNode };

const Sidebar = () => {
  const navItems: NavItem[] = [
    { href: "/", label: "Dashboard", icons: <AiOutlineAppstore /> },
    {
      href: "/transactions",
      label: "Transactions",
      icons: <AiOutlineApartment />,
    },
    { href: "/users", label: "Users", icons: <AiOutlineUser /> },
    { href: "/admins", label: "Admins", icons: <AiOutlineTeam /> },
    { href: "/invoices", label: "Invoices", icons: <AiOutlineFolderOpen /> },
    {
      href: "/compliance",
      label: "Compliance",
      icons: <AiOutlineDiff />,
    },
  ];

  return (
    <div className="hidden md:block fixed z-11 left-0 top-0 min-h-screen w-60 border-r border-gray-300">
      <aside>
        <div className="w-full flex justify-center border-b py-5 border-gray-300">
          <h3 className="font-extrabold text-3xl text-blue-600 -m-[0.1px]">
            Escrow
          </h3>
        </div>

        <nav className="mt-8 px-3">
          {navItems.map((item) => (
            <div
              className="flex cursor-pointer items-center gap-4 rounded-sm px-6 py-3 my-5 hover:bg-blue-100 hover:text-blue-500 hover:border-l-4 hover:border-blue-500 transition-colors "
              key={item.href}
            >
              <span>{item.icons}</span>

              <Link href="/" className="block  ">
                {item.label}
              </Link>
            </div>
          ))}
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
