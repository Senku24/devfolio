import { openEmail } from "utils/email";

const EmailLink = ({ email, children, className, ...props }) => (
  <a
    href={`mailto:${email}`}
    className={className}
    onClick={(event) => openEmail(event, email)}
    {...props}
  >
    {children}
  </a>
);

export default EmailLink;
