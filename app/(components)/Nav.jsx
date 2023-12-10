import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="flex w-screen justify-between items-center">
      <div className="flex text-xl mx-2">hello</div>
      <div className="flex">
        <Link href="/" className="nbtn">
          Home
        </Link>
        <Link href="/ticketpage/" className="nbtn">
          New Ticket
        </Link>
      </div>
    </div>
  );
};

export default Nav;
