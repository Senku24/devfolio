export const GMAIL_SUBJECT = "Hello Nixon — from your portfolio";

export const gmailComposeUrl = (email) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email
  )}&su=${encodeURIComponent(GMAIL_SUBJECT)}`;

export const shouldOpenGmail = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(pointer: fine)").matches &&
  window.matchMedia("(min-width: 1024px)").matches;

export const openEmail = (event, email) => {
  if (!shouldOpenGmail()) return;
  event.preventDefault();
  window.open(gmailComposeUrl(email), "_blank", "noopener,noreferrer");
};
