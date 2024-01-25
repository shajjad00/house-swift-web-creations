import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import Populars from "../Popular/Populars";
import { useEffect } from "react";
import TransitionEffect from "../../../Component/TransitionEffect/TransitionEffect";

const Home = () => {
  useEffect(()=>{window.scrollTo(0,0)},[])
  return (
    <div>
      <Helmet>
        <title>House Swift | Home</title>
      </Helmet>
      <TransitionEffect></TransitionEffect>
      <Banner />
      <Populars></Populars>
      <Blog></Blog>
    </div>
  );
};

export default Home;
