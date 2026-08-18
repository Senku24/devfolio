import Button from "@/components/Button/Button";
import { useRouter } from "next/router";

const Custom404 = () => {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">404</p>
      <h1 className="mt-4 text-4xl font-semibold text-white">This route does not exist.</h1>
      <div className="mt-8">
        <Button type="primary" onClick={() => router.push("/")}>
          Back to Home
        </Button>
      </div>
    </main>
  );
};

export default Custom404;
