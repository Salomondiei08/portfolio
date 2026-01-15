"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const initialMessages: Message[] = [
  {
    role: "assistant",
    content:
      "Hi! I'm an AI assistant that can answer questions about my creator's work, research, and projects. What would you like to know?",
  },
];

const sampleResponses: Record<string, string> = {
  research:
    "My creator's research focuses on large language models, multimodal AI systems, and efficient training techniques. Recent work includes papers on attention mechanisms and parameter-efficient fine-tuning.",
  projects:
    "Some notable projects include a Neural Architecture Search system, a Multimodal Sentiment Analysis model, and an LLM Fine-tuning Pipeline. Check out the Projects page for more details!",
  skills:
    "Key technical skills include Python, PyTorch, TensorFlow, and experience with distributed training, MLOps, and deploying models at scale.",
  contact:
    "You can reach out via email or connect on LinkedIn and Twitter. Check the About page for all contact information.",
  default:
    "That's an interesting question! I'd recommend checking out the relevant section of the portfolio, or feel free to reach out directly for more specific information.",
};

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    if (lowerQuery.includes("research") || lowerQuery.includes("paper")) {
      return sampleResponses.research;
    }
    if (lowerQuery.includes("project") || lowerQuery.includes("work")) {
      return sampleResponses.projects;
    }
    if (lowerQuery.includes("skill") || lowerQuery.includes("tech") || lowerQuery.includes("stack")) {
      return sampleResponses.skills;
    }
    if (lowerQuery.includes("contact") || lowerQuery.includes("email") || lowerQuery.includes("reach")) {
      return sampleResponses.contact;
    }
    return sampleResponses.default;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response delay
    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 1000));

    const response = getResponse(input);
    const assistantMessage: Message = { role: "assistant", content: response };
    setMessages((prev) => [...prev, assistantMessage]);
    setIsTyping(false);
  };

  const suggestedQuestions = [
    "What research are you working on?",
    "Tell me about your projects",
    "What's your tech stack?",
    "How can I contact you?",
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Chat with AI</h1>
        <p className="text-muted-foreground">
          Ask questions about my work, research, or projects.
        </p>
      </div>

      {/* Chat Window */}
      <Card className="bg-card border-border">
        <CardContent className="p-0">
          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-secondary rounded-lg px-4 py-2">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-100" />
                    <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-border p-4">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button type="submit" disabled={!input.trim() || isTyping}>
                Send
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>

      {/* Suggested Questions */}
      <div className="space-y-3">
        <p className="text-sm text-muted-foreground">Suggested questions:</p>
        <div className="flex flex-wrap gap-2">
          {suggestedQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => setInput(question)}
              className="px-3 py-1.5 text-sm rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            >
              {question}
            </button>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-muted-foreground text-center">
        This is a demo chatbot with pre-defined responses. For detailed questions,
        please reach out directly.
      </p>
    </div>
  );
}
