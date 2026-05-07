import { useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useAudio } from "../lib/stores/useAudio";
import GlobalSearch from "./GlobalSearch";

interface NavigationItem {
  label: string;
  path: string;
  icon: JSX.Element;
}

const Navigation = () => {
  const [location, setLocation] = useLocation();
  const audio = useAudio();
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMute = () => audio.toggleMute();

  const navigateTo = (path: string) => {
    if (path !== location) {
      audio.playHit();
      setLocation(path);
    }
    setIsOpen(false);
  };

  // Keyboard shortcut: Cmd/Ctrl + K
  useState(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  const navigationItems: NavigationItem[] = [
    {
      label: "Map",
      path: "/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
          <line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/>
        </svg>
      ),
    },
    {
      label: "Compare Monuments",
      path: "/compare",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="7" height="16" rx="1"/><rect x="14" y="4" width="7" height="16" rx="1"/>
        </svg>
      ),
    },
    {
      label: "Heritage Quiz",
      path: "/quiz",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Global search overlay */}
      {searchOpen && <GlobalSearch onClose={() => setSearchOpen(false)} />}

      <motion.div
        className="fixed top-4 right-4 z-50 flex items-center gap-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {/* Search button */}
        <Button
          variant="outline"
          onClick={() => setSearchOpen(true)}
          className="bg-background/80 backdrop-blur-sm flex items-center gap-2 px-3 h-9 text-sm text-muted-foreground"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <span className="hidden sm:inline">Search</span>
          <kbd className="hidden md:inline text-xs bg-muted border border-border rounded px-1 ml-1">⌘K</kbd>
        </Button>

        {/* Mute */}
        <Button
          variant="outline"
          size="icon"
          onClick={toggleMute}
          className="bg-background/80 backdrop-blur-sm"
        >
          {audio.isMuted ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="1" y1="1" x2="23" y2="23"/>
              <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"/>
              <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"/>
              <line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
            </svg>
          )}
        </Button>

        {/* Menu */}
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="bg-background/80 backdrop-blur-sm"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          )}
        </Button>
      </motion.div>

      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full z-40 bg-black/75 backdrop-blur-sm flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            className="bg-slate-900/95 text-slate-100 border border-slate-700 rounded-2xl p-6 w-[90%] max-w-md shadow-2xl"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 mb-1">
              <span className="text-2xl">🏛️</span>
              <h2 className="text-2xl font-bold">Historica</h2>
            </div>
            <p className="mb-5 text-slate-400 text-sm">
              Experience India's rich heritage in 3D, AR and VR. Travel through time across centuries of history.
            </p>

            {/* Search shortcut inside menu */}
            <button
              onClick={() => { setIsOpen(false); setSearchOpen(true); }}
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm mb-4 transition-colors border border-slate-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              Search monuments, facts, quiz…
              <kbd className="ml-auto text-xs bg-slate-900 border border-slate-600 rounded px-1.5 py-0.5">⌘K</kbd>
            </button>

            <div className="space-y-2">
              {navigationItems.map((item) => (
                <Button
                  key={item.path}
                  variant={location === item.path ? "default" : "ghost"}
                  className={cn("w-full justify-start",
                    location === item.path
                      ? "bg-amber-600 hover:bg-amber-500 text-white"
                      : "text-slate-100 hover:bg-slate-800")}
                  onClick={() => navigateTo(item.path)}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </Button>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-slate-700 flex justify-between">
              <Button variant="outline" className="border-slate-600 text-slate-100 hover:bg-slate-800" onClick={() => setIsOpen(false)}>
                Close
              </Button>
              <Button variant="outline" className="border-slate-600 text-slate-100 hover:bg-slate-800" onClick={toggleMute}>
                {audio.isMuted ? "Unmute" : "Mute"} Audio
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Navigation;
