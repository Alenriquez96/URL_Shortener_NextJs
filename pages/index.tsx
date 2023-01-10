import Head from "next/head";
import Form from "@/components/Form";
import LinkCreated from "@/components/LinkCreated";
import LinkCreatedError from "@/components/LinkCreated-Error";
import Heading from "@/components/Heading";
import Spinner from "@/components/Spinner";
import { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import Header from "@/components/Header";

export default function Home() {
  const [serverRes, setserverRes]: any = useState(null);
  const [loading, setloading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const getServerResponse = (res: any) => setserverRes(res);
  const getLoadingStatus = (bool: boolean) => setloading(bool);
  const getIsCopiedStatus = (bool: boolean) => setIsCopied(bool);

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  }, [isCopied]);

  const paralax: any =
    typeof document !== "undefined" && document.querySelector("#paralax");
  const banner: HTMLElement | any =
    typeof document !== "undefined" && document.querySelector("#banner");
  const containerParalax: HTMLElement | any =
    typeof document !== "undefined" &&
    document.querySelector("#containerParalax");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150 && banner && paralax) {
        banner.style.backgroundSize = "150%";
        paralax.style.opacity = 0;
        paralax.style.translate = "0 -50px";
        paralax.style.scale = "0.9";
        containerParalax.style.opacity = 0;
        containerParalax.style.translate = "0 -50px";
        containerParalax.style.scale = "0.8";
      } else {
        banner.style.backgroundSize = "180%";
        paralax.style.opacity = 1;
        paralax.style.translate = 0;
        paralax.style.scale = 1;
        containerParalax.style.opacity = 1;
        containerParalax.style.translate = 0;
        containerParalax.style.scale = 1;
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>URL shortener</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="all" />
        <meta
          name="description"
          content="URL shortener free for transforming long, ugly links into nice, memorable and trackable short URLs. Use it to shorten links"
        />
        <meta
          name="google-site-verification"
          content="ksCmB94YP_SsVRLIC8ENpcocmJ8bYAmC3Vrp9nQVADY"
        />
        <link rel="icon" href="/iconShort.png" />
      </Head>
      <Header />
      <main className="bg-[#0f1011] text-white h-screen grid place-content-center font-roboto">
        <div
          className={`absolute top-[20px] right-[20px] z-10  ease-in duration-300  ${
            isCopied ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          <Alert severity="success">Copied to clipboard!</Alert>
        </div>

        <div className="flex flex-col justify-center ">
          <Heading />
          <section className="min-h-[200px] flex flex-col items-center justify-evenly">
            <Form response={getServerResponse} loading={getLoadingStatus} />

            {!loading ? (
              serverRes !== null && serverRes.type === "success" ? (
                <LinkCreated
                  isCopied={getIsCopiedStatus}
                  linkProp={serverRes}
                />
              ) : (
                <LinkCreatedError linkProp={serverRes} />
              )
            ) : (
              <Spinner />
            )}
          </section>
        </div>
      </main>
    </>
  );
}
