import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data }: { data: string } = req.body;

  if (!data) {
    res.status(400).send({
      type: "Error",
      code: 400,
      message: "Expected {input: string}",
    });
    return;
  }

  const options = {
    method: "GET",
    url: "https://qrcodeutils.p.rapidapi.com/qrcodefree",
    params: {
      text: data,
      validate: "true",
      size: "150",
      type: "svg", // type: svg, png etc
      level: "M", // level of validation
    },
    headers: {
      "x-rapidapi-host": "qrcodeutils.p.rapidapi.com",
      "x-rapidapi-key": "e44916d07cmshbc4468e13a40dbfp18b8c2jsn674a17e72092",
    },
  };
  try {
    let response = await axios.request(options);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
  }
}
