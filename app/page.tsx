import Navbar1 from "@/components/Navbar1";
import Navbar2 from "@/components/Navbar2";
import Navbar3 from "@/components/Navbar3";
import Navbar4 from "@/components/Navbar4";
import Navbar5 from "@/components/Navbar5";
import Navbar6 from "@/components/Navbar6";
import Footer1 from "@/components/footer/Footer1";
import Footer2 from "@/components/footer/Footer2";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col">
      <Navbar2 />
      <Navbar3 />
      <Navbar4 />
      <Navbar1 />
      <Navbar5 />
      <Navbar6 />
      <div className="mt-[500px] flex flex-col">
        <Footer1 />
        <Footer2 />
      </div>
    </div>
  );
};

export default page;
