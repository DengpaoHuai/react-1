import { Link } from "react-router";

const Home = () => {
  return (
    <div
      style={{
        height: "250vh",
      }}
    >
      <h1>Home</h1>
      <a href="/planets">Planets</a>
      <Link to="/planets">Planets</Link>
    </div>
  );
};

export default Home;
