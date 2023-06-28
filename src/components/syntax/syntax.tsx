"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

export function SyntaxHighligt({ codeString }: { codeString: string }) {
  return (
    <SyntaxHighlighter
      customStyle={{
        background: "none",
      }}
      language="javascript"
      style={nightOwl}
    >
      {codeString}
    </SyntaxHighlighter>
  );
}
