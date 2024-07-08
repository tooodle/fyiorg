import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Instagram, MenuIcon, Quote } from "lucide-react";
import logo from '@/public/logo.png'
function Navbar() {
  return (
    <div className="navbar w-screen p-4 bg-white shadow-md flex items-center justify-between fixed  z-50  ">
      <div className="left">
        <p className="text-3xl font-bold text-pink-700 flex item">FYI</p>
      </div>
      <div className="center hidden md:block fixed left-1/2 -translate-x-1/2">
        <Link className="mx-4 font-medium text-pink-600" href={"/"}>
          Home
        </Link>
        <Link className="mx-4 font-medium text-pink-600" href={"/emosphere"}>
          Emosphere
        </Link>
        <Link className="mx-4 font-medium text-pink-600" href={"blogs"}>
          Blogs
        </Link>
        <Link className="mx-4 font-medium text-pink-600" href={"/shop"}>
          Shop
        </Link>
      </div>
      <div className="right flex items-center">
        <Button className="bg-white hover:bg-white text-pink-700 border-2 rounded-3xl border-pink-700 cursor-default ">
          Emosphere Coming Soon!
        </Button>
        <Sheet>
          <SheetTrigger className=" md:hidden mx-2">
            <MenuIcon />
          </SheetTrigger>
          <SheetContent>
            <div className="mt-8 flex flex-col justify-start space-y-4">
              <Link className="mx-4 font-medium text-pink-600" href={"/"}>
                Home
              </Link>
              <Link className="mx-4 font-medium text-pink-600" href={"/emosphere"}>
                Emosphere
              </Link>
              <Link className="mx-4 font-medium text-pink-600" href={"/blogs"}>
                Blogs
              </Link>
              <Link className="mx-4 font-medium text-pink-600" href={"/shop"}>
                Shop
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default Navbar;
