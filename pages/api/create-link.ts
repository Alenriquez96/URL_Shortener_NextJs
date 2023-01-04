import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "@/mongodb";
import { customAlphabet } from "nanoid";
import { COLLECTION_NAMES } from "@/utils/types";

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const getHash = customAlphabet(characters, 4);

export default async function CreateLink(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const apiKey = req.headers["api-key"] as string;
  if (req.method !== "POST") {
    return res.status(405).json({
      type: "Error",
      code: 405,
      message: "Only POST method is accepted on this route",
    });
  }
  const { link } = req.body;

  if (!link) {
    res.status(400).send({
      type: "Error",
      code: 400,
      message: "Expected {link: string}",
    });
    return;
  }

  try {
    const database = await connectToDatabase();
    const urlInfoCollection = database.collection(COLLECTION_NAMES["url-info"]);
    const hash = getHash();
    const linkExists = await urlInfoCollection.findOne({
      link,
    });
    const shortUrl = `${process.env.HOST}/${hash}`;
    if (!linkExists) {
      await urlInfoCollection.insertOne({
        link,
        uid: hash,
        shortUrl,
        createdAt: new Date(),
      });
    }
    res.status(201).send({
      type: "success",
      code: 201,
      data: {
        shortUrl: linkExists?.shortUrl || shortUrl,
        link,
      },
    });
  } catch (e: any) {
    res.status(500);
    res.send({
      code: 500,
      type: "error",
      message: e.message,
    });
  }
}
