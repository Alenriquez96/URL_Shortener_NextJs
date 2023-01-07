import Head from "next/head";
import Form from "@/components/Form";
import LinkCreated from "@/components/LinkCreated";
import Heading from "@/components/Heading";
import { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";

export default function Home() {
  const [serverRes, setserverRes] = useState(null);
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
        ></meta>
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
              <LinkCreated isCopied={getIsCopiedStatus} linkProp={serverRes} />
            ) : (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  );
}
