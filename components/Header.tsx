import Heading from "@/components/Heading";
import ButtonContainer from "@/components/ButtonContainer";

const Header = () => {
  return (
    <header
      id="banner"
      className=" bg-paralax bg-bg-paralaxImg bg-no-repeat h-[300px]  sm:h-[600px] w-[100%] flex flex-col justify-center items-center duration-paralax bg-paralaxPosition"
    >
      <Heading />
      <ButtonContainer />
    </header>
  );
};

export default Header;
