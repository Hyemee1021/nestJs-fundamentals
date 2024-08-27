import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="p-3 flex flex-row gap-3 bg-slate-200">
      <h1>This is NavBar</h1>
      <Link href="/" className="mr-5">
        Next.js
      </Link>
      <Link href="/users" className="mr-5">
        Users
      </Link>
    </div>
  );
};

export default NavBar;
