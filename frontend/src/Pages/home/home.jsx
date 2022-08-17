import React from "react";
import Layout from "../../Components/Layout/Layout";

const Home = () => (
    <Layout>
        <div className="lg:flex sm:inline-block items-center justify-between gap-12">
            <div className="space-y-10">
                <h3 className="
            text-gray-200 
            font-bold 
            sm:text-md
            md:text-4xl
            lg:text-7xl 
            max-w-2xl 
            lg:text-justify 
            sm:text-center "
                >
                    WELCOME TO MY DEVLOG PAGE
                </h3>

                <p
                    className="
            text-gray-400 
            font-medium 
            sm:text-xs
            md:text-xl
            lg:max-w-xl 
            lg:text-justify 
            sm:text-center"
                >
                    YOU WILL BE ABLE TO SEE THE PROJECTS I AM DEVELOPING WEEK BY WEEK AND
                    SHARE YOUR IDEAS WITH ME.
                </p>

                <div className="lg:text-left sm:text-center">
                    <a href="/developments" className="
                border-2 
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
                duration-300">View now</a>
                </div>
            </div>

            <div className="
        sm:space-y-0 
        lg:space-y-10 
        lg:block 
        sm:flex  
        lg:items-baseline 
        sm:items-center 
        sm:justify-between 
        sm:mt-20
        md:mt-32">
                <span
                    className="iconify sm:text-3xl md:text-5xl lg:text-7xl text-gray-400 hover:text-gray-200 ease-in duration-300"
                    data-icon="cib:python"
                />
                <span
                    className="iconify sm:text-3xl md:text-5xl lg:text-7xl text-gray-400 hover:text-gray-200 ease-in duration-300"
                    data-icon="cib:django"
                />
                <span
                    className="iconify sm:text-3xl md:text-5xl lg:text-7xl text-gray-400 hover:text-gray-200 ease-in duration-300"
                    data-icon="cib:svelte"
                />
                <span
                    className="iconify sm:text-3xl md:text-5xl  lg:text-7xl text-gray-400 hover:text-gray-200 ease-in duration-300"
                    data-icon="simple-icons:fastapi"
                />
            </div>
        </div>
    </Layout>
);

export default Home;
