"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const initialMessages: Message[] = [
  {
    role: "assistant",
    content: "Hey! I'm Salomon. Ask me anything about my work, research, or projects.",
  },
];

const sampleResponses: Record<string, string> = {
  research:
    "I'm currently pursuing my Master's in AI at KOREATECH in South Korea, supported by the GKS scholarship. My research interests include machine learning, NLP, and computer vision. Check out the Research page!",
  projects:
    "My top projects are Autonomous AI Agent Researcher, TourCI (#2 tourism app in Cote d'Ivoire), and Help AI. Check the Projects page for details and links.",
  skills:
    "Flutter, Python, FastAPI, Vue.js, Docker, and GCP. I also speak French, English, and Korean. I'm a Google Cloud Certified Associate Cloud Engineer.",
  contact:
    "Reach me at salomondiei08@gmail.com or connect on LinkedIn/GitHub. Links are in the sidebar!",
  experience:
    "I am CTO and Supply Manager (Contract) at Sikili. Previously, I was Software Engineer at BUI Corporation, Technical Lead Mobile at Futurafric IA, and Junior Software Engineer at Casys Technologies.",
  education:
    "Master's in AI at KOREATECH (current, GKS scholar) and Bachelor's in Software Engineering from Institut Ivoirien de Technologie in Côte d'Ivoire.",
  hackathon:
    "I've won multiple hackathons: 1st place at Gorange 5G Hackathon and Top 10 at GDG DevFest.",
  default:
    "Interesting question! Feel free to explore the site or email me at salomondiei08@gmail.com for more info.",
};

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const getResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    if (lowerQuery.includes("research") || lowerQuery.includes("study") || lowerQuery.includes("master")) {
      return sampleResponses.research;
    }
    if (lowerQuery.includes("project") || lowerQuery.includes("app") || lowerQuery.includes("built") || lowerQuery.includes("autonomous") || lowerQuery.includes("tourci") || lowerQuery.includes("help ai")) {
      return sampleResponses.projects;
    }
    if (lowerQuery.includes("skill") || lowerQuery.includes("tech") || lowerQuery.includes("stack") || lowerQuery.includes("flutter") || lowerQuery.includes("python")) {
      return sampleResponses.skills;
    }
    if (lowerQuery.includes("contact") || lowerQuery.includes("email") || lowerQuery.includes("reach") || lowerQuery.includes("hire")) {
      return sampleResponses.contact;
    }
    if (lowerQuery.includes("experience") || lowerQuery.includes("work") || lowerQuery.includes("job") || lowerQuery.includes("sikili") || lowerQuery.includes("cto")) {
      return sampleResponses.experience;
    }
    if (lowerQuery.includes("education") || lowerQuery.includes("school") || lowerQuery.includes("university") || lowerQuery.includes("degree") || lowerQuery.includes("koreatech")) {
      return sampleResponses.education;
    }
    if (lowerQuery.includes("hackathon") || lowerQuery.includes("award") || lowerQuery.includes("win") || lowerQuery.includes("competition")) {
      return sampleResponses.hackathon;
    }
    return sampleResponses.default;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 800));

    const response = getResponse(input);
    const assistantMessage: Message = { role: "assistant", content: response };
    setMessages((prev) => [...prev, assistantMessage]);
    setIsTyping(false);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center ${
          isOpen ? "rotate-0" : ""
        }`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
          </svg>
        )}
      </button>


      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-secondary px-4 py-3 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary text-sm font-bold">SD</span>
              </div>
              <div>
                <p className="font-medium text-sm">Chat with Salomon</p>
                <p className="text-xs text-muted-foreground">Usually replies instantly</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-72 overflow-y-auto p-4 space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2 ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-secondary text-foreground rounded-bl-md"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-secondary rounded-2xl rounded-bl-md px-4 py-3">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-border p-3">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 rounded-full border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
