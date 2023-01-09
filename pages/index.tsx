import Head from "next/head";
import Form from "@/components/Form";
import LinkCreated from "@/components/LinkCreated";
import LinkCreatedError from "@/components/LinkCreated-Error";
import Heading from "@/components/Heading";
import Spinner from "@/components/Spinner";
import { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";

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
