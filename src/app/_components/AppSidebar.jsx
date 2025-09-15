"use client";
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import Image from "next/image";
import {
  Compass,
  DraftingCompass,
  Library,
  LogIn,
  Orbit,
  PenSquare,
  Timer,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const MenuOptions = [
  {
    title: "Chat",
    icon: PenSquare,
    path: "/",
  },
  {
    title: "Discover",
    icon: Compass,
    path: "/discover",
  },
  {
    title: "Library",
    icon: Library,
    path: "/library",
  },
  {
    title: "Quizzes",
    icon: DraftingCompass,
    path: "/quizzes",
  },
  {
    title: "Pomodoro",
    icon: Timer,
    path: "/pomodoro",
  },
];

function AppSidebar() {
  const path = usePathname();
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarContent className="bg-sidebar">
        {/* Logo */}
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <Orbit size={20} className="text-background" />
            </div>
            {!isCollapsed && (
              <span className="text-xl font-semibold text-sidebar-foreground">
                Kanada
              </span>
            )}
          </div>
        </div>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {MenuOptions.map((menu, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton
                    asChild
                    className={`p-4 py-6 hover:font-medium 
                    ${path?.includes(menu.path) && "text-base bg-gray-600"}`}
                  >
                    <a
                      href={menu.path}
                      className="flex items-center space-x-3 px-3 py-2 text-sidebar-foreground hover:text-sidebar rounded-lg transition-colors"
                    >
                      <menu.icon className="h-8 w-8" />
                      <span className="text-base">{menu.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        {/* Login Button or Sidebar Trigger */}
        <div className="mt-auto p-4">
          {!isCollapsed ? (
            <Button 
              className="w-full bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90 gap-2"
            >
              <LogIn size={16} />
              Log In
            </Button>
          ) : (
            <div className="flex justify-center">
              <SidebarTrigger />
            </div>
          )}
        </div>
      </SidebarContent>
    </Sidebar>
  );
}

export default AppSidebar;
