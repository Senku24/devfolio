import Meteors from "../Meteors/Meteors";
import useInView from "utils/use-in-view";
import styles from "./FooterBg.module.scss";

const FooterBg = () => {
  const [ref, inView] = useInView({
    once: false,
    threshold: 0,
    rootMargin: "200px",
  });

  return (
    <div
      ref={ref}
      className={`${styles.top} ${inView ? styles.isActive : ""}`}
      aria-hidden="true"
    >
      <Meteors number={6} active={inView} />
      <div className={styles.background} />
    </div>
  );
};

export default FooterBg;
