"use client";
import React, { ReactNode, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  AiOutlineMenu,
  AiOutlineUser,
  AiOutlineDiff,
  AiOutlineFolderOpen,
  AiOutlineTeam,
  AiOutlineAppstore,
  AiOutlineApartment,
  AiOutlineSearch,
  AiOutlineBell,
  AiOutlineMail,
} from "react-icons/ai";
import Link from "next/link";

type NavItem = { href: string; label: string; icons?: ReactNode };

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((open) => !open);

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
    <div className="">
      {/* Mobile Version */}
      <header className="md:hidden">
        <div className="p-4 border-b border-gray-300 relative">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 ">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div className="text-xs font-semibold">Sarah Miller</div>
            </div>

            <button className="cursor-pointer" onClick={toggleMenu}>
              <AiOutlineMenu size="30px" />
            </button>
          </div>

          <div className="w-full flex items-center gap-3 mt-4 bg-gray-100 rounded-md py-2 px-4">
            <span>
              <AiOutlineSearch />
            </span>
            <input
              type="text"
              name=""
              id=""
              placeholder="Search transaction ID, date, amount..."
              className="w-full bg-transparent text-sm text-black p-0 border-0 focus:ring-0 outline-0 placeholder:text-gray-400"
            />
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-black/80 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      ></div>

      <aside
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-20 transform transition-transform duration-300 ease-in-out py-3
        ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="w-full flex justify-center border-b py-4 border-gray-300">
          <h3 className="font-extrabold text-3xl text-blue-600">Escrow</h3>
        </div>
        <nav className="flex flex-col mt-5 px-3">
          {navItems.map((item) => (
            <div
              className="flex cursor-pointer items-center gap-4 rounded-sm px-6 py-3 my-1 hover:bg-blue-100 hover:text-blue-500 hover:border-l-4 hover:border-blue-500 transition-colors "
              key={item.href}
              onClick={toggleMenu}
            >
              <span>{item.icons}</span>

              <Link href="/" className="block  ">
                {item.label}
              </Link>
            </div>
          ))}
        </nav>
      </aside>

      {/* Desktop Version */}
      <header className="hidden md:block min-h-[calc(100vh_-_130px)] ml-60 w-full">
        <div className="grid grid-cols-4 items-center px-6 py-5 border-b border-gray-300 relative">
          <div className="col-span-3">
            <div className="w-[500px] flex items-center gap-3 bg-gray-100 rounded-md py-2 px-4">
              <span>
                <AiOutlineSearch />
              </span>
              <input
                type="text"
                name=""
                id=""
                placeholder="Search transaction ID, date, amount..."
                className="w-full bg-transparent text-sm text-black p-0 border-0 focus:ring-0 outline-0 placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="flex col-span-1 place-items-center gap-4">
            <span className="border-r border-gray-200 px-2">
              <AiOutlineBell size="25px" />
            </span>

            <span className="border-r border-gray-200 pr-4">
              <AiOutlineMail size="25px" />
            </span>

            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div className="text-xs font-semibold">Sarah Miller</div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
