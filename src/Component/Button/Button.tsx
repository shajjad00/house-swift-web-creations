


const Button = ({children}) => {
    return (
        <div className="uppercase bg-indigo-700 text-white py-2 px-6 rounded md:ml-8 hover:bg-indigo-500 duration-700 cursor-pointer">
            {children}
        </div>
    );
};

export default Button;