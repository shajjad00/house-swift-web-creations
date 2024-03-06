import { FC } from "react";
import { Link, useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import SubscribeUs from "./SubscribeUs";

interface BlogDetailsProps {}

const BlogDetails: FC<BlogDetailsProps> = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const blogDetails: any = useLoaderData();
  console.log(blogDetails);

  const {
    date,
    description,
    image,
    title,
    writer_name,
    writer_image,
    writer_title,
  } = blogDetails || {};

  return (
    <div className="max-w-7xl mx-auto px-4 mt-24 md:px-20">
      <div>
        <SectionTitle first="House" second="Swift Blog"></SectionTitle>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 border-b-2 ml-4">
        <p className="pb-4">{date}</p>
        <div className="space-y-2">
          <img
            className="w-12 h-12 rounded-full"
            src={writer_image}
            alt="avatar"
          />
          <p>{writer_name}</p>
          <p className="pb-4">{writer_title}</p>
        </div>
      </div>
      <div className="my-6">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4">
          <div className="flex-[1]">
            <img className="w-full" src={image} alt="logo" />
          </div>
          <div className="flex-[1] border-b-2 my-6 p-2">
            <p className="text-2xl font-bold mb-6">{title}</p>
            <p className="text-sm">{description}</p>
            <div className="card-actions justify-end">
              <Link to="/">
                <button className="px-5 py-1 border border-[#09BE51] text-[#09BE51] hover:bg-[#09BE51] hover:text-white duration-300 mt-4">
                  Back
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <SubscribeUs />
    </div>
  );
};

export default BlogDetails;
