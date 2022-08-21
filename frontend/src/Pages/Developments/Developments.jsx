import { useEffect, useState } from "react"
import axios from "axios";
import Layout from "../../Components/Layout/Layout";
import { image } from "../../Constants";
import { Link } from "react-router-dom";

function Developments() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/v1/articles").then((response) => {
            setArticles(response.data);
        })
    }, [])

    return (
        <Layout>

            <div classNameName="">
                <div className="">
                    <div className="flex lg:justify-between sm:justify-center">
                        <h3
                            className="text-gray-200 font-semibold lg:text-2xl sm:text-2xl mb-2 uppercase"
                        >
                            Developments
                        </h3>
                    </div>

                    <hr className="text-gray-200" />

                    <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-4">
                        {articles.map((article) => {
                            return (
                                <div
                                    className="w-full mt-5"
                                >
                                    <div className="lg:flex items-center sm:inline lg:space-x-8 sm:space-y-4 w-full lg:text-left sm:text-center">

                                        <div className="w-full flex justify-center">
                                            <div className="sm:flex sm:justify-center">
                                                <img
                                                    src={article.image_url}
                                                    className="w-full rounded-lg object-cover"
                                                    alt=""
                                                />
                                            </div>
                                        </div>

                                        <div className="w-full items-center">
                                            <div className="mb-3">
                                                <h3 className="text-gray-200 font-bold uppercase">
                                                    {article.titulo}
                                                </h3>
                                            </div>

                                            <div className="mb-4">
                                                <p className="text-gray-400 font-normal uppercase">
                                                    {article.descripcion}
                                                </p>
                                            </div>

                                            <div className="flex w-28 justify-between mb-5">
                                                <span
                                                    className="iconify text-2xl text-gray-400 hover:text-gray-200 ease-in duration-300"
                                                    data-icon="cib:python"
                                                />
                                                <span
                                                    className="iconify text-2xl text-gray-400 hover:text-gray-200 ease-in duration-300"
                                                    data-icon="cib:django"
                                                />
                                                <span
                                                    className="iconify text-2xl text-gray-400 hover:text-gray-200 ease-in duration-300"
                                                    data-icon="cib:svelte"
                                                />
                                            </div>

                                            <div>
                                                <Link to={`/developments/${article.titulo}`}
                                                    className="border-2 border-gray-200 hover:bg-gray-200 text-gray-200 hover:text-gray-900 text-lg ease-in duration-300 px-16 py-2 sm:px-16 sm:py-1 rounded"
                                                >View</Link>
                                            </div>
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

export default Developments
