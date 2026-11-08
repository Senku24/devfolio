import { FAQS } from "../../constants";

const FAQ = () => (
  <section
    id="faq"
    aria-labelledby="faq-heading"
    className="section-container py-24 cv-auto"
  >
    <p className="uppercase tracking-widest text-gray-light-1">FAQ</p>
    <h2 id="faq-heading" className="mt-2 w-fit text-6xl font-medium text-gradient">
      Questions, answered
    </h2>
    <div className="mt-10 border-y border-white/10">
      {FAQS.map((faq) => (
        <details key={faq.question} className="group border-b border-white/10 last:border-b-0">
          <summary className="flex list-none cursor-pointer items-center justify-between gap-6 py-5 text-lg font-medium text-white transition-colors hover:text-accent">
            <span>{faq.question}</span>
            <span
              aria-hidden="true"
              className="shrink-0 font-mono text-xl text-accent transition-transform duration-200 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="max-w-3xl pb-6 pr-8 text-gray-light-3">{faq.answer}</p>
        </details>
      ))}
    </div>
  </section>
);

export default FAQ;
