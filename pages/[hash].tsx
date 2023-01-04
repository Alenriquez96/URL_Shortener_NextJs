import { NextApiRequest, NextApiResponse, NextPage } from "next";
import Head from "next/head";
import connectToDatabase from "@/mongodb";
import { COLLECTION_NAMES } from "@/utils/types";

export async function getServerSideProps(req: NextApiRequest) {
  const hash = req.query.hash as string;
  const database = await connectToDatabase();
  const campaign = await database
    .collection(COLLECTION_NAMES["url-info"])
    .findOne({ uid: hash });

  if (campaign) {
    return {
      redirect: {
        destination: campaign.link,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

const HashPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>URL Shortener</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/iconShort.png" />
      </Head>
      <h1>Requested link not found</h1>
    </div>
  );
};

export default HashPage;
