import Image from "next/image";
import ProjectIcon from "../ProjectIcon";
import styles from "./ProjectTile.module.scss";

const TONES = {
  violet: { from: "#241a3f", accent: "#a855ff" },
  green: { from: "#12351f", accent: "#c8f542" },
  magenta: { from: "#3b1630", accent: "#f472b6" },
  cyan: { from: "#0f2f36", accent: "#22d3ee" },
  blue: { from: "#12233f", accent: "#60a5fa" },
  lime: { from: "#26300f", accent: "#c8f542" },
};

const ProjectTile = ({ project, classes, isDesktop }) => {
  const { name, description, repo, live, tech, icon, tone, image } = project;
  const palette = TONES[tone] || TONES.violet;

  return (
    <article
      className={`${styles.projectTile} ${classes || ""} group relative flex flex-col overflow-hidden rounded-3xl border border-white/10`}
      style={{
        background: `linear-gradient(145deg, ${palette.from} 0%, #0b0b10 74%)`,
        width: isDesktop ? "38rem" : "calc(100vw - 4rem)",
        maxWidth: "calc(100vw - 2rem)",
        flex: "0 0 auto",
      }}
    >
      <a
        href={repo}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${name} repository on GitHub`}
        className="absolute inset-0 z-20 rounded-3xl"
      />

      <div className="relative h-44 shrink-0 overflow-hidden sm:h-52">
        <Image
          src={image}
          alt={`${name} interface preview`}
          fill
          sizes="(min-width: 1024px) 38rem, calc(100vw - 4rem)"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b10] via-[#0b0b10]/25 to-transparent" />
        <span
          className="absolute bottom-4 left-6 z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 shadow-lg"
          style={{
            background: `${palette.accent}22`,
            color: palette.accent,
            backdropFilter: "blur(8px)",
          }}
        >
          <ProjectIcon name={icon} />
        </span>
      </div>

      <div className="pointer-events-none relative z-10 flex flex-1 flex-col p-6 pt-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-3xl font-semibold text-white">{name}</h3>
          <span className="pt-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
            Pinned
          </span>
        </div>
        <p className="mt-3 max-w-md text-lg leading-relaxed text-white/70">
          {description}
        </p>

        <ul aria-label={`${name} stack`} className="mt-5 flex flex-wrap gap-2">
          {tech.map((techItem) => (
            <li
              key={techItem}
              className="rounded-full border border-white/[0.12] bg-white/[0.04] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white/60"
            >
              {techItem}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between gap-4 pt-6">
          <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-white/70 transition group-hover:text-accent">
            View repository <span aria-hidden="true">↗</span>
          </span>
          {live ? (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="pointer-events-auto relative z-30 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-accent hover:underline"
            >
              Live <span aria-hidden="true">↗</span>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
};

export default ProjectTile;
