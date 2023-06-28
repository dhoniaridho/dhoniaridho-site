"use client";
import { AiOutlineBranches } from "react-icons/ai";
import { HiX } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import { tv } from "tailwind-variants";

export function Window({
  children,
  menus,
  active,
  onChange,
}: {
  children: React.ReactNode;
  menus: string[];
  active: string;
  onChange: (menu: string) => void;
}) {
  const activeMenu = tv({
    base: ["min-w-[200px]  p-1 rounded-t-lg", "hover:bg-slate-900"],
    variants: {
      active: {
        true: ["bg-slate-900"],
        false: ["bg-slate-950"],
      },
    },
  });

  return (
    <motion.div
      dragTransition={{
        bounceStiffness: 1000,
        bounceDamping: 1000000,
        power: 0,
      }}
      drag={false}
      className="bg-slate-900 rounded-lg shadow-xl border-slate-700 border w-full flex flex-col h-full"
    >
      <div className={["flex flex-col w-full h-10 space-y-2"].join(" ")}>
        <div className="flex justify-between rounded-t-lg bg-black/50 pr-5 z-10 ">
          <AnimatePresence>
            <div className="flex pl-2 pt-2">
              {menus.map((menu, index) => (
                <motion.div
                  key={index}
                  layoutId="section"
                  role="button"
                  className={activeMenu({ active: menu === active })}
                  onClick={() => onChange(menu)}
                >
                  <div className="flex items-center gap-2 h-7 p-2 justify-between">
                    <div className="space-x-2 flex">
                      <img
                        className="w-3 h-3"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
                        alt=""
                      />
                      <p className="text-xs">{menu}</p>
                    </div>
                    <span>
                      <button className="hover:bg-slate-100/20 p-0.5 rounded">
                        <HiX />
                      </button>
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
          <div className="space-x-2 my-auto">
            <button className="w-3 h-3 bg-yellow-600 rounded-full"></button>
            <button className="w-3 h-3 bg-green-600 rounded-full"></button>
            <button className="w-3 h-3 bg-red-600 rounded-full group"></button>
          </div>
        </div>
      </div>
      <div className="border-none focus:outline-none outline-none flex-1">
        {children}
      </div>
      <div className="flex justify-between rounded-lg bg-gray-900 items-center text-xs">
        <ul>
          <li>
            <a
              className="flex gap-2 items-center bg-slate-950 h-8 px-5 rounded-lg"
              href="http://github.com/dhoniaridho"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineBranches></AiOutlineBranches>
              <span>main*</span>
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
