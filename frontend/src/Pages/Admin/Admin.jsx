import Layout from "../../Components/Layout/Layout";
import { image } from "../../Constants";

const Admin = () => {

    return (
        <Layout>

            <div className="flex justify-center text-center">
                <div className="space-y-10 inline-block justify-center items-center">
                    <h1
                        className="text-gray-200 font-bold sm:text-md md:text-4xl lg:text-7xl "
                    >
                        Welcome to Admin
                    </h1>

                    <p className="text-gray-400 
                font-medium 
                sm:text-xs
                md:text-xl 
                text-center">You are ready to add new things, come on!</p>

                    <div className="flex justify-center">
                        <img src={image.logo} className="lg:w-36 sm:w-14 md:w-20" alt="" />
                    </div>

                </div>

            </div>
        </Layout>
    );
};

export default Admin;
