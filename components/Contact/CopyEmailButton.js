import { useEffect, useRef, useState } from "react";
import { PROFILE } from "../../constants";

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copyAddress = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(PROFILE.email);
      } else {
        const field = document.createElement("textarea");
        field.value = PROFILE.email;
        field.setAttribute("readonly", "");
        field.style.position = "fixed";
        field.style.opacity = "0";
        document.body.appendChild(field);
        field.select();
        document.execCommand("copy");
        document.body.removeChild(field);
      }
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <span className="inline-flex items-center gap-2">
      <button
        type="button"
        onClick={copyAddress}
        className="border border-white/20 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-gray-light-2 transition hover:border-accent hover:text-accent"
      >
        Copy address
      </button>
      <span
        role="status"
        aria-live="polite"
        className="font-mono text-[11px] uppercase tracking-wider text-accent"
      >
        {copied ? "Copied" : ""}
      </span>
    </span>
  );
};

export default CopyEmailButton;
