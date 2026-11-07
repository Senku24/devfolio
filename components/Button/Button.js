import styles from "./Button.module.scss";

const Button = ({ href, onClick, children, classes, type, disable, ...otherProps }) => {
  const variantClasses =
    type === "primary" ? styles.primary__button : styles.secondary__button;

  const className = `${variantClasses} ${classes || ""}`.trim();

  if (href) {
    return (
      <a href={href} onClick={onClick} className={className} {...otherProps}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
      disabled={disable}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
