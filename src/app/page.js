import ChatInputBox from "./_components/ChatInputBox";
import { QuickTopics } from "./_components/QuickTopics";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="absolute top-2 left-2 md:hidden lg:hidden">
        <SidebarTrigger />
      </div>
      <ChatInputBox />
      <QuickTopics />
    </div>
  );
}
