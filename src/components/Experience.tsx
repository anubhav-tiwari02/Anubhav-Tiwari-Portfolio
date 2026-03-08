import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { Briefcase, ChevronDown, MapPin, Calendar } from 'lucide-react';

interface ExperienceProps {
  data: any[];
}

export default function Experience({ data }: ExperienceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24 sm:px-12 lg:px-24"
    >
      <motion.div
        style={{ y }}
        className="w-full max-w-4xl"
      >
        <div className="mb-16 flex flex-col items-center gap-4 text-center">
          <h2 className="font-sans text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">
            Experience
          </h2>
          <p className="text-lg text-slate-400">
            My professional journey and roles.
          </p>
        </div>

        <div className="relative flex flex-col gap-8">
          {/* Timeline line */}
          <div className="absolute bottom-0 left-[27px] top-0 w-px bg-gradient-to-b from-slate-800 via-slate-700 to-transparent sm:left-1/2 sm:-ml-px" />

          {data.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ExperienceCard({ exp, index }: { exp: any; index: number; key?: string | number }) {
  const [isOpen, setIsOpen] = useState(index === 0);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex w-full flex-col gap-4 sm:flex-row ${
        isEven ? 'sm:flex-row-reverse' : ''
      }`}
    >
      {/* Timeline dot */}
      <div className="absolute left-[27px] top-8 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-slate-950 bg-blue-500 sm:left-1/2" />

      {/* Content */}
      <div className={`w-full pl-16 sm:w-1/2 sm:pl-0 ${isEven ? 'sm:pr-12' : 'sm:pl-12'}`}>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-6 shadow-xl backdrop-blur-md transition-all hover:border-slate-700 hover:bg-slate-800/50"
        >
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-400">
              <span className="flex items-center gap-1 font-medium text-blue-400">
                <Briefcase className="h-4 w-4" />
                {exp.company}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {exp.dates}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {exp.location}
              </span>
            </div>
          </div>

          <motion.div
            initial={false}
            animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
            className="overflow-hidden"
          >
            <ul className="mt-6 flex flex-col gap-3 text-slate-300">
              {exp.bullets.map((bullet: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                  <span>{bullet}</span>
                </li>
              ))}
              {exp.bullets.length === 0 && (
                <li className="text-sm italic text-slate-500">Details to be added...</li>
              )}
            </ul>
          </motion.div>

          {exp.bullets.length > 0 && (
            <div className="absolute right-6 top-6 text-slate-500 transition-transform group-hover:text-slate-300">
              <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                <ChevronDown className="h-5 w-5" />
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
