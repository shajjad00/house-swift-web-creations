import imageNeighborhood from "../../../assets/images/Neighborhood Spotlight .jpg";
import imageMarket from "../../../assets/images/market tending.jpg";
import imageMove from "../../../assets/images/moving and checklist.jpg";

const Blog = () => {
  return (
    <div>
      <h2 className="border-b-2  my-12 p-2 text-2xl md:text-4xl  font-bold text-center">
        House Swift Blog
      </h2>
      <div className="my-6 ">
        {/* first blog Neighborhood */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4">
          <div className="flex-[1]">
            <img className="w-full" src={imageNeighborhood} alt="" />
          </div>
          <div className="flex-[1] border-b-2 my-6 p-2">
            <p className="text-2xl font-bold mb-6">
              Discover Your Ideal Neighborhood: A Spotlight Series
            </p>

            <p className="text-sm">
              Welcome to our "Neighborhood Spotlight," a captivating exploration
              of the diverse and unique communities that make up the heartbeat
              of [City Name]. In this series, we embark on a visual journey
              through the streets, parks, and local gems that define each
              neighborhood. Whether you're a potential resident, visitor, or
              simply curious, join us in discovering the distinct character and
              charm that each locale contributes to the vibrant tapestry of our
              city...
            </p>
            <div className="card-actions justify-end">
              <button className="btn mr-5 bg-[#82b440] text-white">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="my-6 ">
        {/* second blog Neighborhood */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4">
          <div className="flex-[1]">
            <img className="w-full" src={imageMarket} alt="" />
          </div>
          <div className="flex-[1] border-b-2 my-6 p-2">
            <p className="text-2xl font-bold mb-6">
              Rental Market Trends and Tips
            </p>

            <p className="text-sm">
              Embark on a journey through the dynamic landscape of the rental
              market with our blog series, "Navigating the Rental Market: Trends
              and Tips." In this insightful series, we decode the ever-evolving
              trends, offering you a comprehensive understanding of the current
              state of affairs. Whether you're a prospective tenant or a
              property owner, stay ahead of the curve with our expert tips and
              analysis...
            </p>
            <div className="card-actions justify-end">
              <button className="btn mr-5 bg-[#82b440] text-white">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="my-6 ">
        {/* third blog Neighborhood */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4">
          <div className="flex-[1]">
            <img className="w-full" src={imageMove} alt="" />
          </div>
          <div className="flex-[1] border-b-2 my-6 p-2">
            <p className="text-2xl font-bold mb-6">
              Moving Tips and Checklists
            </p>

            <p className="text-sm">
              Develop a comprehensive moving guide that covers all aspects of
              the moving process. Break down the guide into stages, from the
              initial planning phase to settling into the new home. Include
              practical tips on packing, selecting moving services, and dealing
              with common challenges. Provide downloadable checklists and
              templates for a smoother moving experience. Incorporate real-life
              moving stories from tenants who successfully navigated the
              relocation process...
            </p>
            <div className="card-actions justify-end">
              <button className="btn mr-5 bg-[#82b440] text-white">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
