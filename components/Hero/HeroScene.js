/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";

const MODEL_URL = "/models/hero/nixon-hero.glb";
const PREVIEW_URL = "/models/hero/preview.png";

const HeroScene = () => {
  const mountRef = useRef(null);
  const [mode, setMode] = useState("preview");

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return undefined;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches;

    const canvasTest = document.createElement("canvas");
    const gl =
      canvasTest.getContext("webgl") || canvasTest.getContext("experimental-webgl");
    if (!gl || reduced) {
      setMode("preview");
      return undefined;
    }

    let cancelled = false;
    let renderer;
    let frame = 0;
    let cleanup = () => {};

    fetch(MODEL_URL, { method: "HEAD" })
      .then((res) => {
        if (!res.ok) throw new Error("missing glb");
        return Promise.all([
          import("three"),
          import("three/examples/jsm/loaders/GLTFLoader.js"),
        ]);
      })
      .then(([THREE, { GLTFLoader }]) => {
        if (cancelled || !mountRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 40);
        camera.position.set(0.2, 0.2, isMobile ? 3.6 : 3.1);

        renderer = new THREE.WebGLRenderer({
          antialias: !isMobile,
          alpha: true,
          powerPreference: "high-performance",
        });
        renderer.setClearColor(0x000000, 0);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.1 : 1.5));
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.domElement.style.width = "100%";
        renderer.domElement.style.height = "100%";
        renderer.domElement.style.display = "block";
        el.appendChild(renderer.domElement);

        scene.add(new THREE.AmbientLight(0xffffff, 0.35));
        scene.add(new THREE.HemisphereLight(0xffffff, 0x111111, 0.4));
        const key = new THREE.DirectionalLight(0xc8f542, 0.35);
        key.position.set(2.4, 3, 3.2);
        scene.add(key);
        const rim = new THREE.DirectionalLight(0x8b31ff, 0.55);
        rim.position.set(-3, 1.2, -1.8);
        scene.add(rim);

        const subject = new THREE.Group();
        scene.add(subject);

        const setSize = () => {
          const w = Math.max(el.clientWidth, 200);
          const h = Math.max(el.clientHeight, 240);
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h, false);
        };
        setSize();

        const loader = new GLTFLoader();
        loader.load(
          MODEL_URL,
          (gltf) => {
            if (cancelled) return;
            const model = gltf.scene;
            const box = new THREE.Box3().setFromObject(model);
            const size = box.getSize(new THREE.Vector3());
            const center = box.getCenter(new THREE.Vector3());
            model.position.sub(center);
            const maxDim = Math.max(size.x, size.y, size.z) || 1;
            model.scale.setScalar(1.55 / maxDim);
            subject.add(model);
            setMode("model");
          },
          undefined,
          () => {
            if (!cancelled) setMode("preview");
          }
        );

        const pointer = { x: 0, y: 0 };
        const onMove = (e) => {
          const rect = el.getBoundingClientRect();
          pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
          pointer.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
        };
        window.addEventListener("pointermove", onMove, { passive: true });

        const clock = new THREE.Clock();
        const animate = () => {
          if (cancelled) return;
          frame = requestAnimationFrame(animate);
          const t = clock.getElapsedTime();
          subject.rotation.y = pointer.x * 0.18 + Math.sin(t * 0.4) * 0.05;
          subject.rotation.x = pointer.y * 0.06;
          subject.position.y = Math.sin(t * 0.8) * 0.035;
          renderer.render(scene, camera);
        };
        animate();

        const ro = new ResizeObserver(setSize);
        ro.observe(el);
        cleanup = () => {
          cancelled = true;
          cancelAnimationFrame(frame);
          ro.disconnect();
          window.removeEventListener("pointermove", onMove);
          renderer?.dispose();
          if (renderer?.domElement?.parentNode === el) el.removeChild(renderer.domElement);
        };
      })
      .catch(() => {
        if (!cancelled) setMode("preview");
      });

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return (
    <div className="hero-scene relative h-[min(78vh,620px)] w-full overflow-hidden">
      <div
        className="pointer-events-none absolute inset-8 opacity-50"
        style={{
          background:
            "radial-gradient(circle at 55% 45%, rgba(124,58,237,0.12), transparent 58%)",
        }}
      />
      <div
        ref={mountRef}
        className={`absolute inset-0 z-10 ${mode === "model" ? "" : "hidden"}`}
      />
      {mode === "preview" ? (
        <img
          src={PREVIEW_URL}
          alt="Hooded Hacker 3D preview"
          className="relative z-10 mx-auto h-full w-auto max-w-full object-contain object-center"
        />
      ) : null}
    </div>
  );
};

export default HeroScene;
