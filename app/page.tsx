import Navbar1 from "@/components/Navbar1";
import Navbar2 from "@/components/Navbar2";
import Navbar3 from "@/components/Navbar3";
import Navbar4 from "@/components/Navbar4";
import React from "react";

const page = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar2 />
      <Navbar3 />
      <Navbar4 />
      <Navbar1 />
    </div>
  );
};

export default page;
