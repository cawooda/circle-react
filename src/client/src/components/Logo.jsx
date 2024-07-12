import logo from "../assets/images/circle-logo.png";

const style = {
  container: {
    height: "5vh",
    paddingTop: "2%",
    paddingBottom: "7%",
  },
  logo: {
    width: "50px",
  },
};

export default function Logo() {
  return (
    <>
      <div style={style.container} class="container text-center">
        <img style={style.logo} className="image" src={logo}></img>
      </div>
    </>
  );
}
