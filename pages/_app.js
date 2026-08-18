import { calibre, jetbrains_mono } from "public/fonts";
import Meta from "@/components/Meta/Meta";
import "../styles/globals.scss";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Meta />
      <div className={`${calibre.variable} font-sans ${jetbrains_mono.variable} font-mono`}>
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default App;
