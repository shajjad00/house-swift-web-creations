import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import TransitionEffect from "../../../Component/TransitionEffect/TransitionEffect";
import { Link } from "react-router-dom";

// Import images
// import imageNeighborhood from "../../../assets/images/Neighborhood Spotlight .jpg";
// import imageMarket from "../../../assets/images/market tending.jpg";
// import imageMove from "../../../assets/images/moving and checklist.jpg";

// Define the interface for blog post
interface BlogPost {
  id: number;
  blog_category: string;
  title: string;
  image: string;
  date: string;
  description: string;
  writer_name: string;
  writer_title: string;
  writer_image: string;
}

const Blog: React.FC = () => {
  const [blogData, setBlogData] = useState<BlogPost[]>([]);
  console.log(blogData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/public/blogs.json");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data: BlogPost[] = await response.json();
        setBlogData(data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 mt-8 md:px-20">
      <div>
        <SectionTitle first="House" second="Swift Blog"></SectionTitle>
      </div>
      <TransitionEffect></TransitionEffect>

      {blogData.map((post) => (
        <div key={post.id} className="my-6">
          {/* Blog content */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4">
            <div className="flex-[1]">
              <img className="w-full" src={post.image} alt="logo" />
            </div>
            <div className="flex-[1] border-b-2 my-6 p-2">
              <p className="text-2xl font-bold mb-6">{post.title}</p>

              <p className="text-sm">{post.description.slice(0 - 350)}...</p>
              <div className="card-actions justify-end">
                <Link to={`blogDetails/${post.id}`}>
                  {" "}
                  <button className="uppercase border border-[#09BE51] bg-[#09BE51] hover:bg-transparent text-white py-2 text-md px-6 hover:border hover:border-[#09BE51] hover:text-[#09BE51] duration-300 cursor-pointer">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
