const Form = (props: any) => {
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const link: {} = { link: event.target.link.value };
    const endpoint: string = "/api/create-link";
    const options: any = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(link),
    };

    try {
      const response = await fetch(endpoint, options);
      const result = await response.json();
      props.response(result);
      event.target.link.value = "";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Url shortener</h1>
      {/* <form action="api/create-link" method="post"> */}
      <form onSubmit={handleSubmit}>
        <input name="link" type="text" placeholder="Introduce url" />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Form;
