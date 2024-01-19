
import { Helmet } from "react-helmet-async";
import AboutUs from "../../AboutUs/AboutUs";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>House Swift | Home</title>
      </Helmet>
      <Banner />
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
