"use client";
import React, { useState } from "react";
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
    active: true,
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
  const [isLogin, setIsLogin] = useState(true);
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarRail />
      <SidebarContent className="bg-sidebar">
        {/* Logo */}
        <div className="p-6">
          <div
            className={`flex items-center gap-3 ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <Orbit size={20} className="text-background" />
            </div>
            {!isCollapsed && (
              <span className="text-xl font-semibold text-sidebar-foreground">
                Kaṇāda
              </span>
            )}
          </div>
        </div>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu
              className={
                isCollapsed
                  ? "flex flex-col items-center h-full space-y-3"
                  : "px-4 space-y-2"
              }
            >
              {MenuOptions.map((menu, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton
                    asChild
                    className={`${isCollapsed ? "p-0" : "px-3 py-5"} ${
                      path === menu.path && "text-base bg-special"
                    }`}
                  >
                    <a
                      href={menu.path}
                      className="space-x-2 text-sidebar-foreground hover:bg-special hover:text-sidebar-foreground"
                    >
                      <menu.icon className="h-8 w-8" />
                      {!isCollapsed && (
                        <span className="text-base">{menu.title}</span>
                      )}
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
            isLogin ? (
              <div className="flex justify-between">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <SidebarTrigger />
              </div>
            ) : (
              <Button className="w-full bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90 gap-2">
                <LogIn size={16} />
                Log In
              </Button>
            )
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
