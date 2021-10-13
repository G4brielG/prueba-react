function Banner(props) {
  console.log(props);

  const { mensaje } = props;
  return (
    <>
      <h1>{mensaje}</h1>
    </>
  );
}

export default Banner;
