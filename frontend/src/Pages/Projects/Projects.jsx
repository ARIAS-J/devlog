import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../../Components/Layout/Layout";

function Projects() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/v1/projects").then((response) => {
            setProjects(response.data);
        })
    })

    return (
        <Layout>

            <div className="mt-16">
                <div>
                    <div className="flex lg:justify-between sm:justify-center">
                        <h3
                            className="text-gray-200 font-semibold lg:text-3xl sm:text-2xl mb-2"
                        >
                            Projects
                        </h3>
                    </div>

                    <hr className="text-gray-200" />

                    <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-4">
                        {projects.map((project) => {
                            return (
                                <div
                                    className="lg:flex sm:inline lg:space-x-8 sm:space-y-4 w-full lg:text-left sm:text-center mt-10"
                                >
                                    <div className="">
                                        <div className="sm:flex sm:justify-center">
                                            <img
                                                src={project.image}
                                                className="w-80 rounded-lg object-cover"
                                                alt=""
                                            />
                                        </div>

                                        <div className="flex w-full justify-center space-x-8 mt-4">
                                            <span
                                                className="iconify text-lg text-gray-400 hover:text-gray-200 ease-in duration-300"
                                                data-icon="cib:python"
                                            />
                                            <span
                                                className="iconify text-lg text-gray-400 hover:text-gray-200 ease-in duration-300"
                                                data-icon="cib:django"
                                            />
                                            <span
                                                className="iconify text-lg text-gray-400 hover:text-gray-200 ease-in duration-300"
                                                data-icon="cib:svelte"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="">
                                            <h3 className="text-gray-200 font-bold uppercase">
                                                {project.titulo}
                                            </h3>
                                        </div>

                                        <div className="">
                                            <p className="text-gray-400 font-medium uppercase">
                                                {project.descripcion}
                                            </p>
                                        </div>

                                        <div className="">
                                            <a href={project.url} className="border-2 border-gray-200 hover:bg-gray-200 text-gray-200 hover:text-gray-900 ease-in duration-300 px-16 py-2 sm:px-16 sm:py-1 rounded-lg">View</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Projects