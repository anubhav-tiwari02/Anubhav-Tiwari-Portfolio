import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import AnimatedBackground from './components/AnimatedBackground';
import Splash from './components/Splash';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Details from './components/Details';
import resumeData from './data/resume.json';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-50 selection:bg-blue-500/30">
      <AnimatedBackground />

      <AnimatePresence mode="wait">
        {showSplash ? (
          <Splash key="splash" onComplete={() => setShowSplash(false)} />
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            <Hero data={resumeData} />
            <Experience data={resumeData.experience} />
            <Projects data={resumeData.projects} />
            <Details
              education={resumeData.education}
              certifications={resumeData.certifications}
              skills={resumeData.skills}
              extra={resumeData.extra}
            />
            
            <footer className="border-t border-slate-800 bg-slate-950/50 py-12 text-center backdrop-blur-md">
              <p className="text-sm text-slate-500">
                © {new Date().getFullYear()} {resumeData.basics.name}. All rights reserved.
              </p>
            </footer>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
