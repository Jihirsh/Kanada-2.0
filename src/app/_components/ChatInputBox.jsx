"use client";
import React, { useState } from "react";
import {
  AudioLines,
  ArrowUp,
  FlaskConical,
  Cpu,
  Paperclip,
  SearchCode,
  SquareRadical,
  Orbit,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
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

      {/* Input Section */}
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
            {/* Search/Research toggle */}
            <div className="flex gap-2">
              <Button
                variant={mode === "search" ? "default" : "outline"}
                size="sm"
                className="gap-1 h-9 px-3 cursor-pointer"
                onClick={() => setMode("search")}
              >
                <SearchCode size={16} />
                Search
              </Button>
              <Button
                variant={mode === "research" ? "default" : "outline"}
                size="sm"
                className="gap-1 h-9 px-3 cursor-pointer"
                onClick={() => setMode("research")}
              >
                <FlaskConical size={16} />
                Research
              </Button>
            </div>

            {/* Right side icons */}
            <div className="flex gap-2">
              {!hasInput ? (
                <>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center justify-center h-9 w-9 hover:bg-accent rounded-full cursor-pointer focus-visible:ring-0">
                      <Cpu size={18} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Gemini</DropdownMenuItem>
                      <DropdownMenuItem>GPT 4.1</DropdownMenuItem>
                      <DropdownMenuItem>Kanada - coming soon</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-9 w-9 rounded-full cursor-pointer"
                  >
                    <SquareRadical size={18} />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-9 w-9 rounded-full cursor-pointer"
                  >
                    <Paperclip size={18} />
                  </Button>
                </>
              ) : null}
              
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
