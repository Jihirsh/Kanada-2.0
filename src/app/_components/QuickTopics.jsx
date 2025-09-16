import { Atom, Apple, Zap, Telescope } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const topics = [
  {
    icon: Atom,
    title: "Quantum Mechanics",
    description: "Explore the quantum world",
  },
  {
    icon: Apple,
    title: "Classical Physics",
    description: "Newton's laws and more",
  },
  {
    icon: Zap,
    title: "Electromagnetism",
    description: "Electric and magnetic fields",
  },
  {
    icon: Telescope,
    title: "Astrophysics",
    description: "Explore the cosmos",
  },
];

export const QuickTopics = () => {
  return (
    <div className="px-8 pb-12 pt-24">
      <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">
        Quick Topics
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {topics.map((topic) => (
          <Card
            key={topic.title}
            className="[background:var(--gradient-card)] border-border hover:bg-accent transition-all duration-300 cursor-pointer group [box-shadow:var(--shadow-elegant)] hover:[box-shadow:var(--shadow-glow)]"
          >
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-2xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <topic.icon
                  size={32}
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                {topic.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {topic.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8">
        <p className="text-muted-foreground">
          Start by typing a question above or click on any topic
        </p>
      </div>
    </div>
  );
};
