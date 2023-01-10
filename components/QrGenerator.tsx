import axios from "axios";
import { useState } from "react";
import SVG from "react-inlinesvg";
import Spinner from "@/components/Spinner";

const QrGenerator = () => {
  const [response, setResponse]: any = useState(null);
  const [loading, setLoading] = useState(false);
  const [submittedValue, setSubmittedValue] = useState("");

  const getQrcode = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (e.target.input.value !== "") {
      try {
        const res = await axios.post("api/qrcode", {
          data: e.target.input.value,
        });
        setResponse(res.data);
        setLoading(false);
        setSubmittedValue(e.target.input.value);
        e.target.input.value = "";
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  };

  // Standard snippet to download the QR Code svg
  const downloadQrcode = () => {
    const url = window.URL.createObjectURL(new Blob([response]));
    const urlObject = document.createElement("a");
    urlObject.href = url;
    urlObject.setAttribute("download", "file.svg");
    document.body.appendChild(urlObject);
    urlObject.click();
  };

  return (
    <>
      <h2 className="text-[32px] text-white ">QR Generator</h2>
      <section className="flex flex-col items-center">
        <form onSubmit={getQrcode} id="QrGenerator">
          <fieldset className="flex items-center justify-between">
            <input
              type="text"
              placeholder="Enter a link, number or any text to generate the QR Code"
              name="input"
              className={`w-full sm:w-[450px] lg:w-[730px] h-[65px] rounded-l-[10px] text-[#ccc] text-[16px] py-[12px] px-[16px] bg-[#262626] mr-[10px] shadow-2xl`}
            />
            <button
              type="submit"
              className="h-[65px] min-w-[80px] lg:w-[140px] rounded-r-[10px] py-[12px] px-[16px] bg-[#ccc] hover:bg-[#a5a3a3] text-[#262626] font-bold"
            >
              Generate QR Code
            </button>
          </fieldset>
        </form>
        {loading ? (
          <div className="my-[40px]">
            <Spinner />
          </div>
        ) : (
          ""
        )}
        {response && (
          <div className="mt-10 bg-active h-[340px] flex flex-col items-center justify-evenly bg-[#1a1a1a] rounded-[10px] w-[300px]">
            <h3>{submittedValue}</h3>
            <SVG src={response} />
            <button
              type="submit"
              className="w-[200px] hover:bg-[#a5a3a3] h-[65px] rounded-[10px] bg-[#ccc] text-[#262626] font-bold"
              onClick={() => downloadQrcode()}
            >
              Download
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default QrGenerator;
