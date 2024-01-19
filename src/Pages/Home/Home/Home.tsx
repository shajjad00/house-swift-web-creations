import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>House Swift | Home</title>
      </Helmet>
      <Banner />
      <Blog></Blog>
    </div>
  );
};

export default Home;
