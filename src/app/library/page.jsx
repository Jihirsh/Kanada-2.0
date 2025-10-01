import React from "react";
import Resources from "../_components/Resources";
import { SidebarTrigger } from "@/components/ui/sidebar";

function page() {
  return (
    <div className="w-full">
      <div className="absolute top-3 left-2 md:hidden lg:hidden">
        <SidebarTrigger className="bg-white text-black" />
      </div>
      <Resources />
    </div>
  );
}

export default page;
