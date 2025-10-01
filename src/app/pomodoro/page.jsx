import React from "react";
import Pomodoro from "../_components/Pomodoro";
import { SidebarTrigger } from "@/components/ui/sidebar";

function page() {
  return (
    <div className="w-full">
      <div className="absolute top-2 left-2 md:hidden lg:hidden z-10">
        <SidebarTrigger className="bg-black" />
      </div>
      <Pomodoro />
    </div>
  );
}

export default page;
