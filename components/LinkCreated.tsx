import React from "react";
type linkProp = {
  linkProp: {
    data: { shortUrl: string };
  } | null;
};
const LinkCreated = ({ linkProp }: linkProp) => {
  if (linkProp !== null) {
    return <a href={linkProp.data.shortUrl}>{linkProp.data.shortUrl}</a>;
  } else {
    return <div></div>;
  }
};

export default LinkCreated;
