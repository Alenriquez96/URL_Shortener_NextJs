type linkProp = {
  linkProp: {
    data: { shortUrl: string };
  } | null;
};

const LinkCreatedError = ({ linkProp }: linkProp) => {
  if (linkProp !== null) {
    return (
      <div className="w-full rounded-[10px] bg-[] sm:w-[540px] lg:w-[880px] h-[65px] bg-[#1a1a1a] text-[#ccc] flex  justify-between">
        <div className="h-full flex items-center">
          <p className="mx-[16px] font-normal text-red-400">
            Unable to shorten. It must be a valid URL, e.g. http://example.com
          </p>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default LinkCreatedError;
