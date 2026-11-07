import Image from "next/image";

const PREVIEW_URL = "/models/hero/preview.png";

const HeroScene = () => (
  <div className="hero-scene relative h-[min(78vh,620px)] w-full overflow-hidden">
    <div
      className="pointer-events-none absolute inset-8 opacity-50"
      style={{
        background:
          "radial-gradient(circle at 55% 45%, rgba(124,58,237,0.12), transparent 58%)",
      }}
    />
    <Image
      src={PREVIEW_URL}
      alt="Portrait of Nixon Paul"
      width={800}
      height={1000}
      priority
      className="relative z-10 mx-auto h-full w-auto max-w-full object-contain object-center"
    />
  </div>
);

export default HeroScene;
