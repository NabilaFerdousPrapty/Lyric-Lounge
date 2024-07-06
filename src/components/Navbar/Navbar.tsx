"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home">
            Home
          </MenuItem>
        </Link>
        <HoveredLink href={"/about"}>
          <MenuItem setActive={setActive} active={active} item="About">
            About
          </MenuItem>
        </HoveredLink>
        <HoveredLink href={"/ourCourses"}>
          <MenuItem setActive={setActive} active={active} item="All Courses" >
            Our Courses
          </MenuItem>

        </HoveredLink>
      </Menu>
    </div>
  );
}
