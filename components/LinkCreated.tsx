type linkProp = {
  isCopied: (bool: boolean) => void;
  linkProp: {
    data: { shortUrl: string };
  } | null;
};

const LinkCreated = ({ linkProp, isCopied }: linkProp) => {
  const handleCopy = () => {
    if (linkProp !== null) {
      navigator.clipboard.writeText(linkProp.data.shortUrl);
      isCopied(true);
    }
  };

  if (linkProp !== null) {
    return (
      <>
        <div className="w-full rounded-[10px] bg-[] sm:w-[540px] lg:w-[880px] h-[65px] bg-[#1a1a1a] text-[#ccc] flex  justify-between">
          <div className="h-full flex items-center">
            <a className="mx-[16px]" href={linkProp.data.shortUrl}>
              {linkProp.data.shortUrl}
            </a>
          </div>
          <div
            onClick={handleCopy}
            className="h-full flex justify-center items-center w-[40px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
              />
            </svg>
          </div>
        </div>
        <p className="w-[308px] sm:w-[540px] lg:w-[880px] text-[10px] text-[#ccc] text-center px-[3px]">
          Click on the icon to copy to the clickboard or click on the link to
          redirect!
        </p>
      </>
    );
  } else {
    return <></>;
  }
};

export default LinkCreated;
