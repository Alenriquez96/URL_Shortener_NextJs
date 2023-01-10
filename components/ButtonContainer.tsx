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

  const handleClick = () => setFocusOnDivWithId("urlShortener");

  return (
    <div id="containerParalax" className="duration-paralax my-[50px]">
      <button
        onClick={handleClick}
        className="h-[65px] w-[180px] rounded-[10px] px-[16px] font-bold bg-[#ccc] hover:bg-[#a5a3a3] duration-paralax"
      >
        URL Shortener
      </button>
    </div>
  );
};

export default ButtonContainer;
