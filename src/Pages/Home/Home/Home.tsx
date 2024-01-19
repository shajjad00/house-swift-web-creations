
import { Helmet } from "react-helmet-async";
import AboutUs from "../../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>House Swift | Home</title>
      </Helmet>
      <Banner />
      <Blog />
    </div>
  );
};

export default Home;
