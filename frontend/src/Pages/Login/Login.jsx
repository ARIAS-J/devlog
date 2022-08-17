import { useAuth } from "../../Components/AuthContext/AuthContext";
import { image } from "../../Constants";

const Login = () => {
    const { login } = useAuth();

    function handleSubmit(e) {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;

        login(username, password)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex justify-center text-center mt-36">
                <div className="space-y-16 inline-block justify-center items-center w-72">
                    <div className="flex justify-center lg:space-x-5 sm:space-x-2 items-center">
                        <img src={image.logo} className="lg:w-14 sm:w-12 md:w-16" alt="" />
                        <h3 className="font-bold text-gray-200 sm:text-lg md:text-lg lg:text-2xl ">HEX DEVLOG</h3>
                    </div>
                    <div className="inline-block justify-center space-y-4 w-full">
                        <div className="">
                            <input type="text" name="username" id="" className=" text-gray-200 px-2 w-full py-2 bg-transparent border-b-2 border-gray-200  focus:outline-none" placeholder="Username" />
                        </div>
                        <div className="">
                            <input type="password" name="password" id="" className=" text-gray-200 px-2 w-full py-2 bg-transparent border-b-2 border-gray-200  focus:outline-none" placeholder="Password" />
                        </div>
                    </div>
                    <div className="">
                        <button type="submit" className="text-gray-400 border-gray-400 border-2 hover:border-gray-200 w-full py-1 rounded hover:bg-gray-200 hover:text-gray-900 ease-in duration-300">Login</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Login;