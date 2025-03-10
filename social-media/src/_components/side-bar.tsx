import { signOut } from "@/auth";
import { Home, LogOut, User2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const navLinks = [
  { url: "/home", label: "Home", icon: Home },
  { url: "/profile", label: "Profile", icon: User2 },
];

const Sidebar = () => {
  return (
    <div className="col-span-3 flex flex-col h-full p-4">
      <nav className="flex flex-col">
        {navLinks.map((el) => (
          <Link
            href={el.url}
            key={el.url}
            className="flex items-center px-4 py-3 rounded-md hover:bg-zinc-100 transition"
          >
            <el.icon className="w-5 h-5 mr-3" />
            <span>{el.label}</span>
          </Link>
        ))}
      </nav>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
        className="mt-auto"
      >
        <button
          type="submit"
          className="flex items-center px-4 py-3 rounded-md hover:bg-zinc-100 transition w-full"
        >
          <LogOut className="w-5 h-5 mr-3" /> Sign Out
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
