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
  const { name, description, repo, live, tech, icon, tone } = project;
  const palette = TONES[tone] || TONES.violet;

  return (
    <div
      className={`overflow-hidden rounded-3xl snap-start ${classes || ""}`}
      style={{
        width: isDesktop ? "38rem" : "calc(100vw - 4rem)",
        maxWidth: "calc(100vw - 2rem)",
        flex: "0 0 auto",
      }}
    >
      <article
        className={`${styles.projectTile} group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 p-7`}
        style={{
          background: `linear-gradient(145deg, ${palette.from} 0%, #0b0b10 78%)`,
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at 88% 8%, ${palette.accent}55, transparent 44%)`,
          }}
        />
        <div className="relative z-10">
          <div className="flex items-start justify-between gap-4">
            <span
              className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15"
              style={{
                background: `${palette.accent}1f`,
                color: palette.accent,
              }}
            >
              <ProjectIcon name={icon} />
            </span>
            <span className="pt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
              Pinned repo
            </span>
          </div>
          <h3 className="mt-6 text-3xl font-semibold text-white">{name}</h3>
          <p className="mt-3 max-w-md text-lg leading-relaxed text-white/70">
            {description}
          </p>
        </div>

        <div className="relative z-10 mt-6">
          <ul aria-label={`${name} stack`} className="flex flex-wrap gap-2">
            {tech.map((techItem) => (
              <li
                key={techItem}
                className="rounded-full border border-white/[0.12] bg-white/[0.04] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white/60"
              >
                {techItem}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-5">
            {live ? (
              <a
                href={live}
                target="_blank"
                rel="noreferrer"
                className="link inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-accent hover:underline"
              >
                Live <span aria-hidden="true">↗</span>
              </a>
            ) : null}
            {repo ? (
              <a
                href={repo}
                target="_blank"
                rel="noreferrer"
                className="link inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-white hover:text-accent"
              >
                Code <span aria-hidden="true">↗</span>
              </a>
            ) : null}
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProjectTile;
