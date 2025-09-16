import { Button } from "@/components/ui/button"
import ChatInputBox from "./_components/ChatInputBox"
import { QuickTopics } from "./_components/QuickTopics"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <ChatInputBox />
      <QuickTopics />
    </div>
  )
}