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
           
          </MenuItem>
        </Link>
        <HoveredLink href={"/about"}>
          <MenuItem setActive={setActive} active={active} item="About">
            
          </MenuItem>
        </HoveredLink>
       
          <MenuItem setActive={setActive} active={active} item="All Courses" >
      <div className="flex flex-col space-y-4">
      <HoveredLink href={"/ourCourses"}>
          All Courses
          </HoveredLink>
          <HoveredLink href={"/basic"}>
          Basic Music Theory
          </HoveredLink>
          <HoveredLink href={"/songWriting"}>
          Songwriting
          </HoveredLink>
          <HoveredLink href={"/ourCourses"}>
          Advanced Composition
          </HoveredLink>
          <HoveredLink href={"/ourCourses"}>
          Music Production
          </HoveredLink>
          
      </div>
          </MenuItem>
      
          <Link href={"/contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact Us"> 
         
          </MenuItem>
          </Link>
          

        
      </Menu>
    </div>
  );
}
