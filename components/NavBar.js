import Image from "next/image";
import Link from "next/link";
import React from "react";
import svg from "@/public/github-mark.svg";

const NavBar = () => {
  return (
    <nav className=" bg-slate-800">
      <ul className="flex container mx-auto px-10 py-5 justify-between">
        <li className="text-white cursor-pointer text-3xl font-bold">
          <div>
            <span className="font-bold text-green-700">&lt;</span>
            Pass
            <span className="font-bold text-green-700">OP/&gt;</span>
          </div>
        </li>
        {/* <li className="text-white flex gap-5">
          <Link className="hover:font-semibold" href={"/"}>
            Home
          </Link>
          <Link className="hover:font-semibold" href={"/"}>
            About
          </Link>
          <Link className="hover:font-semibold" href={"/"}>
            Contact
          </Link>
        </li> */}
        <li>
          <Link
            target="_blank"
            href={"https://github.com/Yeshwanth-R"}
            className="flex hover:bg-green-700 gap-2 p-1 rounded-full bg-green-600 justify-center items-center text-white"
          >
            <Image
              className="invert"
              width={35}
              height={"auto"}
              src={svg}
              alt="github"
            />
            <span className="text-xl pr-2">GitHub</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
