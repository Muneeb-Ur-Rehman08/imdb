"use client";

import { MdLightMode } from "react-icons/md";
import { BsMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const currentTheme = theme == "system" ? systemTheme : theme;
  return (
    <div>
      {mounted && theme == "dark" ? (
        <MdLightMode
          className="text-xl hover:text-amber-500 cursor-pointer"
          onClick={() => setTheme("light")}
        />
      ) : (
        <BsMoonFill
          className="text-xl hover:text-amber-500 cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
}
