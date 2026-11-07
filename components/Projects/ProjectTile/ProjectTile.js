import { useEffect, useRef } from "react";
import Image from "next/image";
import VanillaTilt from "vanilla-tilt";
import styles from "./ProjectTile.module.scss";
import { PROJECT_IMAGES } from "../images";

const tiltOptions = {
  max: 5,
  speed: 400,
  glare: true,
  "max-glare": 0.2,
  gyroscope: false,
};

const ProjectTile = ({ project, classes, isDesktop }) => {
  const projectCard = useRef(null);

  const { name, imageKey, outcome, role, gradient, repo, live, tech } = project;

  const image = PROJECT_IMAGES[imageKey];

  let additionalClasses = "";
  if (classes) {
    additionalClasses = classes;
  }

  useEffect(() => {
    const node = projectCard.current;
    VanillaTilt.init(node, tiltOptions);
    return () => node?.vanillaTilt?.destroy();
  }, []);

  return (
    <div
      className={`overflow-hidden rounded-3xl snap-start ${additionalClasses}`}
      style={{
        maxWidth: isDesktop ? "calc(100vw - 2rem)" : "calc(100vw - 4rem)",
        flex: "1 0 auto",
        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
      }}
    >
      <div
        ref={projectCard}
        className={`${styles.projectTile} rounded-3xl relative p-6 flex flex-col justify-between max-w-full`}
        style={{
          background: `linear-gradient(90deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`,
        }}
      >
        <Image
          src="/project-bg.svg"
          alt=""
          className="absolute w-full h-full top-0 left-0 opacity-20 rounded-3xl"
          fill
        />
        <Image
          src={image}
          alt={`${name} project preview`}
          placeholder="blur"
          fill
          sizes="(min-width: 1024px) 60vw, 90vw"
          className={styles.projectImage}
        />
        {!isDesktop && (
          <div
            className="absolute bottom-0 left-0 w-full h-20"
            style={{
              background: `linear-gradient(0deg, ${gradient[0]} 10%, rgba(0,0,0,0) 100%)`,
            }}
          />
        )}
        <h3
          className="font-medium text-2xl sm:text-3xl z-10 pl-2 pt-2 transform-gpu"
          style={{ transform: "translateZ(3rem)" }}
        >
          {name}
        </h3>
        <div
          className={`
            ${styles.techIcons} w-1/2 h-full absolute left-24 top-0 sm:flex items-center hidden
          `}
        >
          <div className="flex flex-col pb-8">
            {tech.map((el, i) => (
              <Image
                className={`${i % 2 === 0 && "ml-16"} mb-4`}
                src={`/projects/tech/${el}.svg`}
                alt=""
                height={45}
                width={45}
                key={el}
              />
            ))}
          </div>
        </div>
        <div
          className="z-10 pl-2 transform-gpu"
          style={{ transform: "translateZ(0.8rem)" }}
        >
          {role ? (
            <p className="font-mono text-xs uppercase tracking-wider text-white/70">
              {role}
            </p>
          ) : null}
          <p className="text-lg tracking-wide font-medium text-white">
            {outcome}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-4">
            {live ? (
              <a
                href={live}
                target="_blank"
                rel="noreferrer"
                className="link font-mono text-xs uppercase tracking-wider text-accent"
              >
                Live ↗
              </a>
            ) : null}
            {repo ? (
              <a
                href={repo}
                target="_blank"
                rel="noreferrer"
                className="link font-mono text-xs uppercase tracking-wider text-white"
              >
                Code ↗
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTile;
