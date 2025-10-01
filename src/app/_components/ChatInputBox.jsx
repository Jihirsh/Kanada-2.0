"use client";
import React, { useState } from "react";
import {
  AudioLines,
  ArrowUp,
  FlaskConical,
  Rocket,
  Paperclip,
  SearchCode,
  SquareRadical,
  Orbit,
  Sparkles,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function ChatInputBox() {
  const [mode, setMode] = useState("search");
  const [userSearchInput, setUserSearchInput] = useState("");

  const hasInput = userSearchInput.trim().length > 0;

  const handleInputChange = (e) => {
    setUserSearchInput(e.target.value);
  };

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
          Your AI-powered physics companion for learning, problem-solving, and
          exploration
        </p>
      </div>

      {/* Input Section - make it go at bottom of screen on small screens */}
      <div className="w-full max-w-4xl mb-6 px-6">
        <div className="flex flex-col w-full bg-searchbar border border-white/15 rounded-3xl px-4 py-4 gap-2">
          {/* Input field */}
          <Input
            type="text"
            placeholder={
              mode === "research"
                ? "Responds in a way to help you learn"
                : "Ask Anything"
            }
            value={userSearchInput}
            onChange={handleInputChange}
            className="w-full h-12 border-0 bg-transparent focus-visible:ring-0 text-lg placeholder:text-muted-foreground"
          />

          {/* Buttons */}
          <div className="flex items-center justify-between mt-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="default" className="rounded-full cursor-pointer">
                  {mode === "research" ? (
                    <FlaskConical size={18} />
                  ) : (
                    <Rocket size={18} />
                  )}
                  {mode === "research" ? (
                    <span>Research</span>
                  ) : (
                    <span>Search</span>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuGroup>
                  <DropdownMenuItem onClick={() => setMode("search")}>
                    <Rocket size={16} /> Search
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setMode("research")}>
                    <FlaskConical size={16} /> Research
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuLabel className="flex items-center gap-2">
                    <Sparkles size={16} /> Models
                  </DropdownMenuLabel>
                  <DropdownMenuItem>Gemini</DropdownMenuItem>
                  <DropdownMenuItem>GPT 4.1</DropdownMenuItem>
                  <DropdownMenuItem>
                    Kanada <span className="text-ring">- coming soon</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* Right side icons */}
            <div className="flex gap-3">
              <Button
                size="icon"
                variant="ghost"
                className="hidden md:flex h-9 w-9 rounded-full cursor-pointer border border-white/15"
              >
                <SquareRadical size={18} />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="h-9 w-9 rounded-full cursor-pointer border border-white/15"
              >
                <Paperclip size={18} />
                
              </Button>

              <Button
                size="icon"
                variant="default"
                className="h-9 w-9 bg-primary text-primary-foreground rounded-full cursor-pointer transition-all duration-200"
              >
                {hasInput ? (
                  <ArrowUp size={18} className="text-background" />
                ) : (
                  <AudioLines size={18} className="text-background" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatInputBox;
