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
          <p className="mx-[16px] text-red-400">{linkProp.data.shortUrl}</p>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default LinkCreatedError;
