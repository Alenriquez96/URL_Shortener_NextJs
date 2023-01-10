const ButtonContainer = () => {
  function setFocusOnDivWithId(elementId: string) {
    const scrollIntoViewOptions: object = {
      behavior: "smooth",
      block: "center",
    };
    const elementToScroll: HTMLElement | any =
      typeof document !== "undefined" && document.getElementById(elementId);
    if (elementToScroll) elementToScroll?.scrollIntoView(scrollIntoViewOptions);
  }

  const handleClickURL = () => setFocusOnDivWithId("urlShortener");
  const handleClickQR = () => setFocusOnDivWithId("QrGenerator");

  return (
    <div
      id="containerParalax"
      className="duration-paralax my-[50px] w-[400px] sm:w-[422px] flex items-center justify-evenly"
    >
      <button
        onClick={handleClickURL}
        className="h-[65px] w-[180px] rounded-[10px] px-[16px] font-bold bg-[#ccc] hover:bg-[#a5a3a3] duration-paralax"
      >
        URL Shortener
      </button>
      <button
        onClick={handleClickQR}
        className="h-[65px] w-[180px] rounded-[10px] px-[16px] font-bold bg-[#ccc] hover:bg-[#a5a3a3] duration-paralax"
      >
        QR Generator
      </button>
    </div>
  );
};

export default ButtonContainer;
