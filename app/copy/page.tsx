"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

const codeBlocks = [
  `        {
          name: "Post Content",
          url: "/horizontal.png",
          isHidden: true,
          size: "large",
          input: {
            label: "Enter Post URL:",
            placeholder: "URL to the post",
          },
        }`,
  `        {
          type: "text",
          currentValue: "Zohaib Yousaf",
          input: {
            title: "Username",
            label: "Enter Linkedin user's name:",
            placeholder: "User's name",
          },
        }`,
  `        {
          type: "choice",
          currentValue: "1st",
          choices: [
            { key: "1st", value: "1st" },
            { key: "2nd", value: "2nd" },
            { key: "3rd", value: "3rd" },
          ],
          input: {
            title: "User's connection degree",
            label: "Chose connection degree:",
            placeholder: "1st, 2nd or 3rd",
          },
        }`,
  `        { name: "Padding", min: 1, max: 5, current: 2, default: 2 },
        { name: "Roundness", min: 1, max: 5, current: 2, default: 2 },
        { name: "Theme", min: 0, max: 1, current: 1 },
        { name: "Video", min: 0, max: 1, current: 1 },`,
];

function renderCode(code: string) {
  const highlightedCode = code
    .replace(/("[^"]*")(?=\s*:)/g, '<span class="text-blue-400">$1</span>') // Highlight keys
    .replace(
      /([a-zA-Z0-9_]+)(?=\s*:)/g,
      '<span class="text-blue-400">$1</span>',
    ) // unquoted keys
    .replace(/(:\s*)("[^"]*")/g, '$1<span class="text-green-400">$2</span>') // Highlight string values
    .replace(/(:\s*)([0-9]+)/g, '$1<span class="text-orange-400">$2</span>') // Highlight numbers
    .replace(
      /(:\s*)(true|false)/g,
      '$1<span class="text-purple-400">$2</span>',
    ); // Highlight booleans

  return highlightedCode;
}

export default function CopyPage() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8 md:p-12 font-sans selection:bg-purple-500/30">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent pb-1">
            Configurations
          </h1>
          <p className="text-neutral-400 text-lg">
            Click the copy button on the top right corner of each block to copy
            its content to your clipboard.
          </p>
        </header>

        <div className="grid gap-8">
          {codeBlocks.map((code, index) => (
            <div
              key={index}
              className="group relative bg-[#111] rounded-2xl border border-neutral-800 overflow-hidden shadow-2xl transition-all duration-300 hover:border-neutral-700 hover:shadow-purple-500/10"
            >
              <div className="flex justify-between items-center px-4 py-3 bg-[#161616] border-b border-neutral-800">
                <div className="flex gap-2 items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <button
                  onClick={() => handleCopy(code, index)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 transition-all text-sm font-medium"
                >
                  {copiedIndex === index ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <div className="p-6 overflow-x-auto">
                <pre className="font-mono text-[13.5px] sm:text-sm leading-relaxed text-neutral-300">
                  <code
                    dangerouslySetInnerHTML={{ __html: renderCode(code) }}
                  />
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
