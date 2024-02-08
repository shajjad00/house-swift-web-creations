import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { useContext } from "react";
import Loading from "./Loading/Loading";
// import useAuth from "../../../hook/useAuth";
// import useAxiosSecure from "../../../hook/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";

interface UserType {
    displayName: string | null;
    email: string | null;
    photoURL: string | null;
    // Add any other properties you may have in your user object
}

const Profile: React.FC = () => {
    const { user } = useContext(AuthContext) as { user: UserType };
    console.log(user)

    // const axiosSecure = useAxiosSecure();
    // const { data: users = [] } = useQuery({
    //     queryKey: ['users'],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get("/users");
    //         return res.data;
    //     }
    // })


    // const currentUser = users.find((cUser) => cUser?.email === user?.email)
    // console.log(users,currentUser?.role)

    if (!user) {
        // Handle the case when user is null or undefined
        return <div><Loading/></div>;
      }

    return (
        <div className="flex flex-col justify-center items-center">
            <Helmet>
                <title>DashBoard | Profile</title>
            </Helmet>
            <h1 className="text-2xl font-extrabold mb-5">
                <span className="text-[#16CAC9]">Welcome Back !!!</span>
                {/* Update this line when you have the currentUser data */}
                {/* <span className="text-[#F99615]">{currentUser?.role}</span> */}
            </h1>
            <div className="card w-96 justify-center card-side bg-base-100 shadow-xl flex flex-col">
                <div>
                    <figure>
                        <img src={user.photoURL || ''} alt={user.displayName || 'User Image'} />
                        {/* Use an empty string as fallback for photoURL, and 'User Image' as fallback for displayName */}
                    </figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title">
                        <span className="text-xl text-black font-extrabold"> Name:</span>{' '}
                        <span className="text-blue-400">{user.displayName}</span>
                    </h2>
                    <p className="font-bold text-base w-full mr-5 text-blue-400">
                        <span className="text-xl text-black font-extrabold"> Email:</span> {user.email}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Profile;