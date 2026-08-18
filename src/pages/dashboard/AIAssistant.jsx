import { useState } from "react"
import {
  ArrowLeft,
  Lightbulb,
  Mic,
  RefreshCw,
  Send,
  Bot,
  ArrowUpRight,
} from "lucide-react"
import { useNavigate } from "react-router-dom"

const suggestions = [
  "What should I do during an earthquake?",
  "How can I prepare for a flood?",
  "What should I keep in an emergency kit?",
]

const AIAssistant = () => {
  const navigate = useNavigate()

  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])
  const [isTyping, setIsTyping] = useState(false)

  const getAnswer = (text) => {
    const query = text.toLowerCase()

    if (query.includes("flood")) {
      return "During a flood: Move immediately to higher ground. Never walk, swim, or drive through moving floodwaters. Turn off utilities at the main switches if safe to do so."
    }

    if (query.includes("kit")) {
      return "A basic emergency kit should contain: at least 3 days of water, non-perishable food, a battery-powered or hand-crank radio, a flashlight, first aid supplies, and a whistle."
    }

    if (query.includes("earthquake")) {
      return "Stay calm, Drop, Cover, and Hold. Stay away from windows and exterior walls, and do not use elevators during or immediately after the tremors."
    }

    return "For emergency preparedness, always maintain an updated go-bag, identify safe assembly zones, and monitor official weather and civil defense broadcasts."
  }

  const sendMessage = (text = message) => {
    const trimmedText = text.trim()

    if (!trimmedText) return

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        type: "user",
        text: trimmedText,
      },
    ])

    setMessage("")
    setIsTyping(true)

    setTimeout(() => {
      const answer = getAnswer(trimmedText)

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          type: "ai",
          text: answer,
        },
      ])

      setIsTyping(false)
    }, 900)
  }

  const handleSuggestion = (suggestion) => {
    setMessage(suggestion)
  }

  const clearChat = () => {
    setMessages([])
    setMessage("")
  }

  return (
    <main className="min-h-screen bg-[#0b1326] text-slate-100 font-sans antialiased">

      {/* Header */}

      <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-[#0b1326]/90 px-4 py-3 backdrop-blur-md sm:px-6">
        <div className="mx-auto flex max-w-3xl items-center justify-between">

          <div className="flex items-center gap-3">

            {/* Back */}

            <button
              type="button"
              onClick={() => navigate(-1)}
              aria-label="Go Back"
              className="-ml-2 rounded-xl p-2 text-slate-400 transition-colors hover:bg-slate-800/60 hover:text-white"
            >
              <ArrowLeft size={22} />
            </button>

            {/* Logo + Title */}

            <div className="flex items-center gap-2.5">

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 text-white shadow-lg shadow-indigo-600/20">
                <Bot size={20} />
              </div>

              <div>
                <div className="flex items-center gap-2">

                  <h1 className="text-base font-semibold leading-none tracking-tight text-white">
                    Disaster AI Assistant
                  </h1>

                  <span className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-medium text-emerald-400">
                    Online
                  </span>

                </div>

                <p className="mt-0.5 text-xs leading-none text-slate-400">
                  Ask me about disaster safety and preparedness.
                </p>
              </div>

            </div>
          </div>

          {/* New Chat */}

          <button
            type="button"
            onClick={clearChat}
            className="flex items-center gap-1.5 rounded-lg border border-slate-700/60 px-2.5 py-1.5 text-xs font-medium text-slate-400 transition-all hover:bg-slate-800/50 hover:text-slate-200"
          >
            <RefreshCw size={14} />

            <span className="hidden sm:inline">
              New Chat
            </span>
          </button>

        </div>
      </header>

      {/* Chat */}

      <main className="min-h-[calc(100vh-70px)] overflow-y-auto px-4 py-6 sm:px-6">

        <div className="mx-auto flex max-w-3xl flex-col space-y-5 pb-32">

          {/* Welcome */}

          <div className="flex items-start gap-3">

            <AIIcon />

            <div className="flex max-w-[85%] flex-col sm:max-w-[78%]">

              <MessageHeader
                name="AI Assistant"
                time="Just now"
              />

              <div className="rounded-2xl rounded-tl-sm border border-slate-800/90 bg-[#131b2e] px-4 py-3 text-sm leading-relaxed text-slate-200 shadow-sm">
                Hello! 👋 I'm your disaster preparedness assistant.
                How can I help you?
              </div>

            </div>
          </div>

          {/* Suggestions */}

          {messages.length === 0 && (
            <div className="pb-1 pl-11 pt-2">

              <p className="mb-2.5 flex items-center gap-1.5 text-xs font-medium text-slate-400">
                <Lightbulb
                  size={15}
                  className="text-indigo-400"
                />

                Suggested Questions
              </p>

              <div className="flex flex-wrap gap-2">

                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => handleSuggestion(suggestion)}
                    className="group flex items-center gap-1.5 rounded-xl border border-slate-700/70 bg-[#131b2e]/90 px-3.5 py-2 text-left text-xs text-slate-300 shadow-sm transition-all hover:border-indigo-500/50 hover:bg-indigo-950/60 hover:text-white"
                  >
                    <span>{suggestion}</span>

                    <ArrowUpRight
                      size={14}
                      className="text-slate-500 transition-colors group-hover:text-indigo-400"
                    />
                  </button>
                ))}

              </div>
            </div>
          )}

          {/* Messages */}

          {messages.map((msg) =>
            msg.type === "user" ? (
              <UserMessage
                key={msg.id}
                text={msg.text}
              />
            ) : (
              <AIMessage
                key={msg.id}
                text={msg.text}
              />
            )
          )}

          {/* Typing */}

          {isTyping && <TypingIndicator />}

        </div>
      </main>

      {/* Bottom Input */}

      <footer className="fixed bottom-0 left-0 right-0 z-30 border-t border-slate-800/90 bg-[#0b1326]/95 px-4 py-3 backdrop-blur-md sm:px-6">

        <div className="mx-auto max-w-3xl">

          <form
            onSubmit={(e) => {
              e.preventDefault()
              sendMessage()
            }}
            className="flex items-center gap-2"
          >

            <div className="relative flex-1">

              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask something..."
                autoComplete="off"
                className="w-full rounded-xl border border-slate-700/80 bg-[#131b2e] py-3 pl-4 pr-11 text-sm text-slate-100 outline-none placeholder:text-slate-400 transition-all focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />

              <button
                type="button"
                title="Voice input"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 transition-colors hover:text-slate-200"
              >
                <Mic size={20} />
              </button>

            </div>

            <button
              type="submit"
              disabled={!message.trim() || isTyping}
              title="Send message"
              className="flex flex-shrink-0 items-center justify-center rounded-xl bg-indigo-600 p-3 text-white shadow-lg shadow-indigo-600/25 transition-all hover:bg-indigo-500 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Send size={20} />
            </button>

          </form>

          <div className="mt-2 text-center">
            <p className="text-[11px] text-slate-500">
              For active life-threatening emergencies, always dial
              local emergency services (112).
            </p>
          </div>

        </div>
      </footer>

    </main>
  )
}

/* -------------------------------- */
/* AI Icon */
/* -------------------------------- */

const AIIcon = () => {
  return (
    <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-indigo-500/30 bg-indigo-600/30 text-indigo-300 shadow-sm">
      <Bot size={18} />
    </div>
  )
}

/* -------------------------------- */
/* Message Header */
/* -------------------------------- */

const MessageHeader = ({ name, time }) => {
  return (
    <div className="mb-1 flex items-center gap-2 px-1">
      <span className="text-xs font-medium text-indigo-300">
        {name}
      </span>

      <span className="text-[10px] text-slate-500">
        {time}
      </span>
    </div>
  )
}

/* -------------------------------- */
/* User Message */
/* -------------------------------- */

const UserMessage = ({ text }) => {
  return (
    <div className="flex items-start justify-end gap-3">

      <div className="flex max-w-[85%] flex-col items-end sm:max-w-[78%]">

        <div className="mb-1 flex items-center gap-2 px-1">
          <span className="text-[10px] text-slate-500">
            Just now
          </span>

          <span className="text-xs font-medium text-slate-300">
            You
          </span>
        </div>

        <div className="rounded-2xl rounded-tr-sm bg-gradient-to-r from-indigo-600 to-indigo-700 px-4 py-3 text-sm leading-relaxed text-white shadow-md shadow-indigo-950/40">
          {text}
        </div>

      </div>

      <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-xs font-semibold text-slate-300">
        ME
      </div>

    </div>
  )
}

/* -------------------------------- */
/* AI Message */
/* -------------------------------- */

const AIMessage = ({ text }) => {
  return (
    <div className="flex items-start gap-3">

      <AIIcon />

      <div className="flex max-w-[85%] flex-col sm:max-w-[78%]">

        <MessageHeader
          name="Disaster AI"
          time="Just now"
        />

        <div className="rounded-2xl rounded-tl-sm border border-slate-800/90 bg-[#131b2e] px-4 py-3.5 text-sm leading-relaxed text-slate-200 shadow-sm">
          {text}
        </div>

      </div>

    </div>
  )
}

/* -------------------------------- */
/* Typing Indicator */
/* -------------------------------- */

const TypingIndicator = () => {
  return (
    <div className="flex items-start gap-3">

      <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-indigo-500/20 bg-indigo-600/20 text-indigo-300">
        <Bot size={18} />
      </div>

      <div className="flex flex-col">

        <div className="mb-1 px-1">
          <span className="text-xs font-medium text-indigo-400">
            AI is typing...
          </span>
        </div>

        <div className="flex w-fit items-center space-x-1.5 rounded-2xl rounded-tl-sm border border-slate-800 bg-[#131b2e]/80 px-4 py-2.5">

          <span className="typing-dot h-2 w-2 rounded-full bg-indigo-400" />
          <span className="typing-dot h-2 w-2 rounded-full bg-indigo-400" />
          <span className="typing-dot h-2 w-2 rounded-full bg-indigo-400" />

        </div>

      </div>

    </div>
  )
}

export default AIAssistant