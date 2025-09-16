"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  Atom,
  AudioLines,
  ChartSpline,
  Cpu,
  Paperclip,
  SearchCode,
  SquareRadical,
  Orbit,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

function ChatInputBox() {
  const [userSearchInput, setUserSearchInput] = useState();
  const [searchType, setSearchType] = useState("search");
  const [loading, setLoading] = useState(false);
  const router = useRouter();


  return (
    <div className="flex flex-col items-center justify-center w-full">
      
      {/* Logo and Title */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-glow">
            <Orbit size={32} className="text-background" />
          </div>
          <h1 className="text-5xl font-bold text-foreground">Kanada</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Your AI-powered physics companion for learning, problem-solving, and exploration
        </p>
      </div>
      <div className="p-2 w-full max-w-2xl border rounded-2xl mt-5">
        <div className="flex justify-between items-end">
          <Tabs defaultValue="Search" className="w-[400px]">
            <TabsContent value="Search">
              <input
                type="text"
                placeholder="Ask Anything"
                className="w-full p-4 outline-none"
                onChange={(e) => setUserSearchInput(e.target.value)}
              />
            </TabsContent>
            <TabsContent value="Research">
              <input
                type="text"
                placeholder="Responds in a way to help you learn"
                className="w-full p-4 outline-none"
                onChange={(e) => setUserSearchInput(e.target.value)}
              />
            </TabsContent>
            <TabsList>
              <TabsTrigger
                value="Search"
                className={"text-primary"}
                onClick={() => setSearchType("search")}
              >
                <SearchCode /> Search
              </TabsTrigger>
              <TabsTrigger
                value="Research"
                className={"text-primary"}
                onClick={() => setSearchType("research")}
              >
                <Atom /> Research
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex gap-4 items-center">
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none p-2 rounded-md hover:bg-gray-100">
                <Cpu className="text-gray-500 h-5 w-5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost">
              <ChartSpline className="text-gray-500 h-5 w-5" />
            </Button>
            <Button variant="ghost">
              <SquareRadical className="text-gray-500 h-5 w-5" />
            </Button>
            <Button variant="ghost">
              <Paperclip className="text-gray-500 h-5 w-5" />
            </Button>
            <Button
              onClick={() => {
                userSearchInput ? onSearchQuery() : null;
              }}
            >
              {!userSearchInput ? (
                <AudioLines className="text-white h-5 w-5" />
              ) : (
                <ArrowRight className="text-white h-5 w-5" disabled={loading} />
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatInputBox;