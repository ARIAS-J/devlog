import { image } from "../../Constants";

const ErrorPage = () => {
    return (
        <div className="flex justify-center text-center">
            <div className="space-y-10 inline-block justify-center items-center">
                <div className="flex justify-center">
                    <img src={image.logo} className="lg:w-36 sm:w-14 md:w-20" alt="" />
                </div>
                <h1 className="text-gray-200 font-bold sm:text-md md:text-4xl lg:text-7xl">404 Page not found</h1>
                <p className="text-gray-400 
                font-medium 
                sm:text-xs
                md:text-xl 
                text-center hover:text-gray-200 ease-in duration-300">Something went wrong, so this page is broken.</p>

                <div className="">
                    <a href="/" className="border-2 
                border-gray-200 
                text-gray-200 
                hover:text-gray-900 
                hover:bg-gray-200 
                px-14 
                py-2 
                sm:px-7 
                sm:py-1
                md:px-10
                md:py-2
                rounded-lg 
                font-regular 
                sm:text-sm
                md:text-base
                ease-in 
                duration-300">Go back to Homepage</a>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;