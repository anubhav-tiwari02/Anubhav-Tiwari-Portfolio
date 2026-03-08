import { motion } from 'motion/react';
import { FolderGit2, ExternalLink } from 'lucide-react';

interface ProjectsProps {
  data: any[];
}

export default function Projects({ data }: ProjectsProps) {
  if (!data || data.length === 0) return null;

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24 sm:px-12 lg:px-24">
      <div className="w-full max-w-6xl">
        <div className="mb-16 flex flex-col items-center gap-4 text-center">
          <h2 className="font-sans text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">
            Projects
          </h2>
          <p className="text-lg text-slate-400">
            Some of my recent work and experiments.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {data.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-8 shadow-xl backdrop-blur-md transition-all hover:border-slate-700 hover:bg-slate-800/50"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                    <FolderGit2 className="h-6 w-6" />
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 transition-colors hover:text-blue-400"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-slate-100">{project.title}</h3>
                
                <p className="text-sm font-medium text-blue-400">
                  {project.stack}
                </p>

                <ul className="mt-4 flex flex-col gap-3 text-slate-300">
                  {project.bullets.map((bullet: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
