"use client";

import { SyntaxHighligt } from "@/components/syntax/syntax";
import { Window } from "@/components/window/window";
import { useState } from "react";
import { Welcome } from "./components/welcome";
import { Skills } from "./components/skill";

export default function Home() {
  const codeString = `
/**
* Experienced full-stack developer with a focus on Node.js,
* TypeScript, and MySQL. Skilled in both front-end and back-end
* development, utilizing Vue.js and React.js to create dynamic,
* user-friendly web applications. Committed to writing clean,
* maintainable code and delivering high-quality solutions.
* @returns {string}
*/
const sayHello = (name: string) => {
  return \`HELLO I'AM DHONIARIDHO\`
}
  `;

  const menus = ["Welcome", "Skills"];
  const [activeMenu, setActiveMenu] = useState("Welcome");

  return (
    <main className=" h-full w-full overflow-y-auto">
      <Window
        menus={menus}
        active={activeMenu}
        onChange={(value) => setActiveMenu(value)}
      >
        {activeMenu === "hello.ts" && (
          <SyntaxHighligt codeString={codeString}></SyntaxHighligt>
        )}
        {activeMenu === "Welcome" && <Welcome />}
        {activeMenu === "Skills" && <Skills />}
      </Window>
    </main>
  );
}

const sayHello = () => {};
