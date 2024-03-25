"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Navbar() {
  const [navBackground, setnavBackgroudn] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 520) {
      setnavBackgroudn(true);
    } else {
      setnavBackgroudn(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  });
  return (
    <>
      <nav className=" fixed top-0 z-10  w-full py-4  md:px-32">
        <div
          className={`flex justify-between rounded-xl p-4 px-8 font-bold text-white shadow  ${navBackground ? "bg-gray-800" : "backdrop-blur-lg"}`}
        >
          <Link href={"/"}>
            {" "}
            <Image
              src={"/logo.png"}
              alt="logo"
              width={56}
              height={56}
              loading="lazy"
              className="cursor-pointer"
            />
          </Link>

          <div className="flex gap-4 max-md:hidden  ">
            <p>
              <Link href={"/"}>Home</Link>
            </p>
            <p>
              <Link href={"/about"}>About Us</Link>
            </p>
            <p>
              <Link href={"/services"}>Services</Link>
            </p>
            <p>
              <Link href={"/team"}>Teams</Link>
            </p>
          </div>

          <div className="  md:hidden ">
            <Sheet>
              <SheetTrigger>
                <AlignJustify className="text-white" size="24" />
              </SheetTrigger>
              <SheetContent className="bg-transparent backdrop-blur-lg">
                <div>
                  <ul className="flex flex-col gap-4 p-4">
                    <p className="text-white hover:underline">
                      <Link href={"/"}>Home</Link>
                    </p>
                    <p className="text-white hover:underline">
                      <Link href={"/about"}>About Us</Link>
                    </p>
                    <p className="text-white hover:underline">
                      <Link href={"/services"}>Services</Link>
                    </p>
                    <p className="text-white hover:underline">
                      <Link href={"/team"}>Teams</Link>
                    </p>
                  </ul>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
}
