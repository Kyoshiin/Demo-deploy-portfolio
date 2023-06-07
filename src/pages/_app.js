import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Montserrat } from "next/font/google"; // accepts variable fonts
import Head from "next/head";
import { useRouter } from "next/router";

//FYI -> https://nextjs.org/docs/app/building-your-application/optimizing/fonts
//to utilise font, need to declare variable
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont", // css variable
});

//AppComponent to init the pages
//anything passed will be received by newPages(components)
export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}
      >
        <NavBar />
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </> // react-fragment
  );
}
