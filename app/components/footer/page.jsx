import { Instagram, Link } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <div className="footer w-full z-10 bg-white border-t-2  border-pink-700 shadow-md p-4 flex  gap-6 text-sm justify-between">
      <div className="m-0 p-0 flex gap-3 items-center">
        Follow us on :{" "}
        <Link href={"https://www.instagram.com/fyiorg"}>
          <Instagram />
          
        </Link>{" "}
      </div>
      <div className="flex gap-3">
        <p>
          Copyright © 2024 FYI{" "}
          <span className="hidden md:inline">
            - Finding You & I - All Rights Reserved.
          </span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
