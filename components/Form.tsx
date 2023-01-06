type formProps = {
  loading: (bool: boolean) => void;
  response: (res: any) => void;
};

const Form = ({ loading, response }: formProps) => {
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    loading(true);
    const link: {} = { link: event.target.link.value };
    const endpoint: string = "/api/create-link";
    const options: any = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(link),
    };

    if (event.target.link.value !== "") {
      try {
        const res = await fetch(endpoint, options);
        const result = await res.json();
        response(result);
        event.target.link.value = "";
        loading(false);
      } catch (error) {
        console.error(error);
        loading(false);
      }
    } else {
      loading(false);
    }
  };
  return (
    <div className="w-full">
      {/* <form action="api/create-link" method="post"> */}
      <form onSubmit={handleSubmit}>
        <fieldset className="flex items-center justify-between">
          <input
            className="w-full sm:w-[450px] lg:w-[730px] h-[65px] rounded-l-[10px] text-[#ccc] text-[16px] py-[12px] px-[16px] bg-[#262626] mr-[10px] shadow-2xl"
            name="link"
            type="text"
            placeholder="Introduce url"
          />
          <button
            className="h-[65px] sm:w-[80px] lg:w-[140px] rounded-r-[10px] py-[12px] px-[16px] bg-[#ccc] hover:bg-[#a5a3a3] text-[#262626] "
            type="submit"
          >
            Shorten
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Form;
