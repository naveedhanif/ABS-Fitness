/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Play, Dumbbell, Trophy, Flame, Zap, Share2, X, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const VIDEOS = [
  {
    id: '1',
    title: 'New World Record - Talakhadze',
    url: 'https://player.vimeo.com/video/1174449880?autoplay=1&title=0&byline=0&portrait=0',
    icon: <Flame className="w-8 h-8" />,
    color: 'bg-[#FF3366]' // Bright Pink/Red
  },
  {
    id: '2',
    title: 'Impressive 281 bench press',
    url: 'https://player.vimeo.com/video/1174449914?autoplay=1&title=0&byline=0&portrait=0',
    icon: <Zap className="w-8 h-8" />,
    color: 'bg-[#00FFCC]' // Neon Cyan
  },
  {
    id: '3',
    title: 'Thruster',
    url: 'https://player.vimeo.com/video/1174449850?autoplay=1&title=0&byline=0&portrait=0',
    icon: <Dumbbell className="w-8 h-8" />,
    color: 'bg-[#E4FF00]' // Neon Yellow
  },
  {
    id: '4',
    title: 'Her listing is everything',
    url: 'https://player.vimeo.com/video/1174449818?autoplay=1&title=0&byline=0&portrait=0',
    icon: <Trophy className="w-8 h-8" />,
    color: 'bg-[#FF9900]' // Bright Orange
  }
];

export default function App() {
  const [playingVideo, setPlayingVideo] = useState<typeof VIDEOS[0] | null>(null);
  const [showSplash, setShowSplash] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      setShowWelcome(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen flex flex-col bg-zinc-950 text-white font-sans selection:bg-white selection:text-black">
      <AnimatePresence mode="wait">
        {showSplash && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Content */}
            <div className="relative z-10 text-center px-6 flex flex-col items-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="flex flex-col items-center"
              >
                {/* ABS Logo Recreation */}
                <div className="relative mb-2">
                  <h1 
                    className="text-[120px] md:text-[180px] font-black leading-none tracking-tighter text-[#B89E67] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]"
                    style={{ fontFamily: "'Anton', sans-serif", WebkitTextStroke: "2px black" }}
                  >
                    ABS
                  </h1>
                </div>
                
                {/* Powerlifting Series Block */}
                <div className="bg-black px-6 py-3 mt-[-20px] md:mt-[-30px] z-10">
                  <h2 className="text-white text-2xl md:text-4xl font-black uppercase tracking-tight leading-none">
                    POWERLIFTING
                  </h2>
                  <h2 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tight leading-none mt-1">
                    SERIES
                  </h2>
                </div>
              </motion.div>

              {/* Lift Pass Logo Recreation */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-24 bg-black px-8 py-4 flex items-center gap-2"
              >
                <span className="text-white text-3xl font-black italic tracking-tighter">LIFT</span>
                <div className="flex items-center">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-[#B89E67] border-b-[10px] border-b-transparent mr-1"></div>
                  <span className="text-white text-3xl font-black italic tracking-tighter">PASS</span>
                </div>
              </motion.div>
            </div>

            {/* Loading Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
              <div className="w-8 h-8 border-4 border-zinc-200 border-t-black rounded-full animate-spin"></div>
            </div>
          </motion.div>
        )}

        {showWelcome && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-[#F5F5F5] flex flex-col items-center justify-center p-6 text-black"
          >
            <div className="max-w-md w-full flex flex-col items-center">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center mb-12"
              >
                {/* Logo Re-use for Welcome Page */}
                <div className="relative mb-2 scale-75 md:scale-100">
                  <h1 
                    className="text-[120px] font-black leading-none tracking-tighter text-[#B89E67] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]"
                    style={{ fontFamily: "'Anton', sans-serif", WebkitTextStroke: "2px black" }}
                  >
                    ABS
                  </h1>
                </div>
                <div className="bg-black px-6 py-3 mt-[-20px] z-10">
                  <h2 className="text-white text-2xl font-black uppercase tracking-tight leading-none">
                    POWERLIFTING
                  </h2>
                  <h2 className="text-white text-3xl font-black uppercase tracking-tight leading-none mt-1">
                    SERIES
                  </h2>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-center space-y-6"
              >
                <h3 className="text-4xl font-black uppercase tracking-tighter leading-none">
                  WELCOME TO THE <span className="text-[#B89E67]">ELITE</span>
                </h3>
                <p className="text-zinc-600 font-bold uppercase text-sm tracking-wide">
                  Access exclusive training content, world records, and the strongest community on earth.
                </p>
                
                <button
                  onClick={() => setShowWelcome(false)}
                  className="w-full bg-black text-white py-6 text-2xl font-black uppercase tracking-widest hover:bg-[#B89E67] transition-colors shadow-[8px_8px_0px_0px_rgba(184,158,103,1)] active:translate-x-1 active:translate-y-1 active:shadow-none"
                >
                  GET STARTED
                </button>
              </motion.div>

              <div className="mt-12 flex items-center gap-4 opacity-50">
                <div className="h-px w-12 bg-black"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Lift Pass Required</span>
                <div className="h-px w-12 bg-black"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="pt-6 pb-4 px-6 border-b-4 border-zinc-800 bg-zinc-900 shrink-0 z-10 shadow-2xl relative">
        <div className="max-w-md mx-auto">
          <div className="flex justify-between items-start mb-4">
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => setShowWelcome(true)}
              className="px-3 py-1.5 bg-zinc-800 text-[#E4FF00] hover:bg-zinc-700 rounded border border-zinc-700 transition-colors flex items-center gap-2 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-[10px] font-black uppercase tracking-widest">Back</span>
            </motion.button>
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="inline-block bg-[#E4FF00] text-black px-2 py-0.5 text-[10px] font-black uppercase tracking-widest rounded-sm"
            >
              Official App
            </motion.div>
          </div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-[1.1] mb-2 text-white"
          >
            <span className="text-[#E4FF00]">ABS</span> Powerlifting<br />Series
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 font-bold tracking-wide uppercase text-xs border-l-4 border-[#E4FF00] pl-2"
          >
            Unleash your true strength.
          </motion.p>
        </div>
      </header>

      {/* Video List */}
      <main className="flex-1 overflow-y-auto px-6 py-8 pb-32">
        <div className="max-w-sm mx-auto space-y-8">
          {VIDEOS.map((video, index) => (
            <div key={video.id}>
              <VideoCard video={video} index={index} onPlay={() => setPlayingVideo(video)} />
            </div>
          ))}
        </div>
      </main>

      {/* Fullscreen Video Modal */}
      <AnimatePresence>
        {playingVideo && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 bg-black flex flex-col justify-center items-center"
          >
            <button 
              onClick={() => setPlayingVideo(null)}
              className="absolute top-6 right-6 z-50 bg-white text-black p-3 rounded-full hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              <X className="w-6 h-6" />
            </button>
            <iframe 
              src={playingVideo.url} 
              allow="autoplay; fullscreen; picture-in-picture" 
              allowFullScreen
              className="w-full h-full max-h-screen border-none"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function VideoCard({ video, index, onPlay }: { video: typeof VIDEOS[0]; index: number; onPlay: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
      className={`relative rounded-xl border-2 md:border-3 border-white overflow-hidden ${video.color} text-black shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] md:shadow-[5px_5px_0px_0px_rgba(255,255,255,1)] transition-transform hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] flex flex-col`}
    >
      {/* Card Header */}
      <div className="p-3 md:p-4 border-b-2 md:border-b-3 border-black flex justify-between items-center gap-3">
        <div className="flex-1">
          <h2 
            className="text-lg md:text-2xl font-black uppercase tracking-tight leading-none"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            {video.title}
          </h2>
        </div>
        <div className="p-1.5 md:p-2 bg-black text-white rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] transform -rotate-3">
          {video.icon}
        </div>
      </div>

      {/* Video Container */}
      <div className="relative aspect-video bg-black border-b-2 md:border-b-3 border-black w-full">
        <div 
          className="absolute inset-0 flex items-center justify-center bg-zinc-900 group cursor-pointer overflow-hidden" 
          onClick={onPlay}
        >
          {/* Fake Thumbnail Pattern */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, white 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>
          
          {/* Play Button */}
          <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 bg-[#E4FF00] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-white text-black shadow-[0_0_20px_rgba(228,255,0,0.4)]">
            <Play className="w-6 h-6 md:w-8 md:h-8 ml-1" fill="currentColor" />
          </div>
          
          <div className="absolute bottom-2 left-2 md:bottom-3 md:left-3 bg-black text-white px-2 py-1 text-[8px] md:text-[10px] font-black uppercase tracking-widest border-2 border-white">
            Tap to Play
          </div>
        </div>
      </div>
      
      {/* Card Footer */}
      <div className="p-2 md:p-3 bg-black text-white flex justify-between items-center">
        <span className="font-black text-sm md:text-base tracking-widest uppercase" style={{ fontFamily: "'Anton', sans-serif" }}>
          Vol. 0{index + 1}
        </span>
        <button className="flex items-center gap-2 text-[8px] md:text-[10px] font-bold uppercase tracking-wider hover:text-[#E4FF00] transition-colors">
          <Share2 className="w-3 h-3" />
          Share
        </button>
      </div>
    </motion.div>
  );
}
