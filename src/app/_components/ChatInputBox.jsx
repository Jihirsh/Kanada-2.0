"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  AudioLines,
  FlaskConical,
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
import { Input } from "@/components/ui/input";

function ChatInputBox() {
  const [userSearchInput, setUserSearchInput] = useState();
  const [searchType, setSearchType] = useState("search");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [mode, setMode] = useState("search");


  return (
    <div className="flex flex-col items-center justify-center w-full mt-20">
      
      {/* Logo and Title */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-glow">
            <Orbit size={32} className="text-background" />
          </div>
          <h1 className="text-5xl font-bold text-foreground">Kanada</h1>
        </div>
        <p className="p-2 text-xl text-muted-foreground max-w-2xl">
          Your AI-powered physics companion for learning, problem-solving, and exploration
        </p>
      </div>
      
      {/* Search Bar */}
      <div className="w-full max-w-4xl mb-6 px-6">
        <Input
          type="text"
          placeholder={mode === "research" ? "Responds in a way to help you learn" : "Ask Anything"}
          className="w-full h-16 px-6 text-lg bg-searchbar border-sear rounded-2xl"
        />
      </div>
      {/* Controls Row */}
      <div className="w-full max-w-4xl mb-8 px-6">
        <div className="flex items-center justify-between">
          {/* Search/Research buttons */}
          <div className="flex gap-2">
            <Button
              variant={mode === "search" ? "default" : "outline"}
              className="gap-2 h-10 px-4 cursor-pointer"
              onClick={() => setMode("search")}
            >
              <SearchCode size={16} />
              Search
            </Button>
            <Button
              variant={mode === "research" ? "default" : "outline"}
              className="gap-2 h-10 px-4 cursor-pointer"
              onClick={() => setMode("research")}
            >
              <FlaskConical size={16} />
              Research
            </Button>
          </div>
          
          {/* Right side icons */}
          <div className="flex gap-2">
            <Button size="sm" variant="ghost" className="h-10 w-10 p-0">
              <Cpu size={18} />
            </Button>
            <Button size="sm" variant="ghost" className="h-10 w-10 p-0">
              <SquareRadical size={18} />
            </Button>
            <Button size="sm" variant="ghost" className="h-10 w-10 p-0">
              <Paperclip size={18} />
            </Button>
            <Button size="sm" variant="default" className="h-10 w-10 p-0 bg-primary text-primary-foreground">
              <AudioLines size={18} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatInputBox;