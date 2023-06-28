"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AiOutlineHome,
  AiFillHome,
  AiFillFolder,
  AiFillFolderOpen,
  AiFillSetting,
  AiOutlineSetting,
  AiOutlineUser,
} from "react-icons/ai";
import { tv } from "tailwind-variants";

const MenuItem = ({
  active,
  text,
  activeIcon,
  icon,
  href,
}: {
  active: boolean;
  text: string;
  activeIcon?: React.ReactNode;
  icon?: React.ReactNode;
  href: string;
}) => {
  const className = tv({
    base: [
      "aspect-square",
      "text-center",
      "px-3",
      "flex",
      "justify-center",
      "items-center",
      "flex-col",
      "rounded-md",
      "hover:bg-gray-500/20",
      "relative",
      "w-12"
    ],
  });

  return (
    <AnimatePresence>
      <Link key={href} href={href} className={className()}>
        <span className="text-white text-2xl z-10">
          {active ? activeIcon : icon}
        </span>
        {/* <span className="text-2xs pt-0.5 z-10">{text}</span> */}
        {active && (
          <motion.div
            layoutId="nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-sky-500 h-1 w-6 rounded-full absolute bottom-0"
          />
        )}
        {active && (
          <motion.div
            layoutId="nav-glow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-sky-500 w-5 brightness-200 h-8 blur-xl absolute bottom-0 rounded-lg -z-10"
          />
        )}
      </Link>
    </AnimatePresence>
  );
};

export const Sidebar = () => {
  const menus = [
    {
      href: "/",
      text: "Home",
      activeIcon: <AiFillHome />,
      icon: <AiOutlineHome />,
      active: true,
    },
    {
      href: "/showcase",
      text: "Showcase",
      activeIcon: <AiFillFolderOpen />,
      icon: <AiFillFolder />,
      active: true,
    },
    {
      href: "/profile",
      text: "Profile",
      activeIcon: <AiOutlineUser />,
      icon: <AiOutlineUser />,
      active: true,
    },
    {
      href: "/gear",
      text: "Gear",
      activeIcon: <AiFillSetting />,
      icon: <AiOutlineSetting />,
      active: false,
    },
  ];

  const currentPath = usePathname();

  return (
    <aside className="w-full backdrop:blur-lg backdrop-opacity-10 rounded-lg sticky inset-0 bg-gray-900/50 text-slate-200 space-y-1 flex justify-center">
      <AnimatePresence>
        {menus.map((menu) => (
          <MenuItem
            key={menu.href}
            {...menu}
            active={currentPath === menu.href}
          />
        ))}
      </AnimatePresence>
    </aside>
  );
};
