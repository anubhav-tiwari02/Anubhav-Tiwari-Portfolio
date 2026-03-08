import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface SplashProps {
  onComplete: () => void;
  key?: string | number;
}

export default function Splash({ onComplete }: SplashProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1500; // 1.5s
    const interval = 30;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress((currentStep / steps) * 100);
      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 300); // Small delay before unmounting
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-slate-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex flex-col items-center gap-8">
        <motion.div
          className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/50 shadow-2xl backdrop-blur-sm"
          initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="font-sans text-4xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-slate-200 to-slate-500">
            AT
          </span>
          <motion.div
            className="absolute inset-0 rounded-2xl border border-blue-500/30"
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        <div className="flex w-48 flex-col gap-2">
          <div className="h-1 w-full overflow-hidden rounded-full bg-slate-800">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
              style={{ width: `${progress}%` }}
              layout
            />
          </div>
          <div className="flex justify-between text-xs font-mono text-slate-500">
            <span>INITIALIZING</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
