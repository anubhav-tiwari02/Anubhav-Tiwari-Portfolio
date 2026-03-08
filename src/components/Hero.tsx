import { motion } from 'motion/react';
import { ArrowDown, Download } from 'lucide-react';

interface HeroProps {
  data: any;
}

export default function Hero({ data }: HeroProps) {
  const { name, title, summary } = data.basics;

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-12 text-center sm:px-12 lg:px-24">
      <div className="z-10 flex max-w-4xl flex-col items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-4"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/50 px-4 py-1.5 text-sm font-medium text-slate-300 shadow-sm backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            Available for new opportunities
          </div>
          
          <h1 className="font-sans text-5xl font-extrabold tracking-tight text-slate-50 sm:text-7xl lg:text-8xl">
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-slate-100 to-slate-500">
              {name}
            </span>
          </h1>
          
          <h2 className="max-w-2xl text-lg font-medium text-slate-400 sm:text-xl lg:text-2xl">
            {title}
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg"
        >
          {summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6"
        >
          <a
            href="#experience"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-slate-50 px-8 py-3 text-sm font-semibold text-slate-950 transition-transform hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 opacity-0 transition-opacity group-hover:opacity-100"></span>
            <span className="relative">View Experience</span>
            <ArrowDown className="relative h-4 w-4 transition-transform group-hover:translate-y-1" />
          </a>
          
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.print();
            }}
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-slate-700 bg-slate-900/50 px-8 py-3 text-sm font-semibold text-slate-300 backdrop-blur-md transition-all hover:border-slate-500 hover:bg-slate-800 hover:text-slate-50 active:scale-95"
          >
            <span>Download Resume</span>
            <Download className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
          </a>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[80px]" />
    </section>
  );
}
