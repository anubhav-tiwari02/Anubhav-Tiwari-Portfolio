import { motion } from 'motion/react';
import { GraduationCap, Award, Code2, Star } from 'lucide-react';

interface Props {
  education: any[];
  certifications: any[];
  skills: any[];
  extra?: any[];
}

export default function Details({ education, certifications, skills, extra }: Props) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24 sm:px-12 lg:px-24">
      <div className="w-full max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left Column */}
          <div className="flex flex-col gap-16">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-8"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h2 className="font-sans text-3xl font-bold tracking-tight text-slate-50">
                  Education
                </h2>
              </div>

              <div className="flex flex-col gap-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-6 shadow-xl backdrop-blur-md transition-all hover:border-slate-700 hover:bg-slate-800/50"
                  >
                    <h3 className="text-xl font-bold text-slate-100">{edu.degree}</h3>
                    <p className="mt-2 font-medium text-blue-400">{edu.institution}</p>
                    <p className="mt-1 text-sm text-slate-500">{edu.dates}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-8"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400">
                  <Award className="h-6 w-6" />
                </div>
                <h2 className="font-sans text-3xl font-bold tracking-tight text-slate-50">
                  Certifications
                </h2>
              </div>

              <div className="flex flex-col gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900/30 p-4 transition-all hover:border-slate-700 hover:bg-slate-800/50"
                  >
                    <div className="h-2 w-2 rounded-full bg-indigo-500" />
                    <p className="font-medium text-slate-300">{cert.name}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-16">
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col gap-8"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
                  <Code2 className="h-6 w-6" />
                </div>
                <h2 className="font-sans text-3xl font-bold tracking-tight text-slate-50">
                  Skills
                </h2>
              </div>

              <div className="flex flex-col gap-8">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="flex flex-col gap-4">
                    <h3 className="text-lg font-semibold text-slate-400">
                      {skillGroup.category}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {skillGroup.items.map((skill: string, i: number) => (
                        <span
                          key={i}
                          className="rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm font-medium text-slate-300 shadow-sm backdrop-blur-md transition-colors hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Extra */}
            {extra && extra.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col gap-8"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-400">
                    <Star className="h-6 w-6" />
                  </div>
                  <h2 className="font-sans text-3xl font-bold tracking-tight text-slate-50">
                    Extracurricular
                  </h2>
                </div>

                <div className="flex flex-col gap-6">
                  {extra.map((item, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-6 shadow-xl backdrop-blur-md transition-all hover:border-slate-700 hover:bg-slate-800/50"
                    >
                      <h3 className="text-xl font-bold text-slate-100">{item.title}</h3>
                      <p className="mt-1 text-sm text-slate-500">{item.dates}</p>
                      <ul className="mt-4 flex flex-col gap-3 text-slate-300">
                        {item.bullets.map((bullet: string, i: number) => (
                          <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
