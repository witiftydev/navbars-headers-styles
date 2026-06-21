import Navbar1 from "@/components/Navbar1";
import Navbar2 from "@/components/Navbar2";
import React from "react";

const page = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar1 />
      <Navbar2 />
    </div>
  );
};

export default page;
