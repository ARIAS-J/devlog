import { useEffect, useState } from "react"
import axios from "axios";
import Layout from "../../Components/Layout/Layout";
import ReactPaginate from 'react-paginate';
import { Link } from "react-router-dom";

function Developments() {
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/v1/articles").then((response) => {
            setArticles(response.data);
        })
    }, [])

    const [articles, setArticles] = useState([])
    const [pageNumber, setPageNumber] = useState(0);

    const articlesPerPage = 4
    const pagesVisited = pageNumber * articlesPerPage

    const displayArticles = articles.slice(pagesVisited, pagesVisited + articlesPerPage).map(article => {
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
                            <Link to={`/developments/${article.id}/${article.titulo}`}
                                className="border-2 border-gray-200 hover:bg-gray-200 text-gray-200 hover:text-gray-900 text-lg ease-in duration-300 px-16 py-2 sm:px-16 sm:py-1 rounded"
                            >View</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    const pageCount = Math.ceil(articles.length / articlesPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

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
                        {displayArticles}
                    </div>

                    <div className="flex justify-center mt-4">
                        <ReactPaginate
                            previousLabel={"Back"}
                            nextLabel={"Next"}
                            pageCount={pageCount}
                            onPageChange={changePage}
                            containerClassName={"paginationBtns relative z-0 inline-flex rounded-md shadow-sm -space-x-px"}
                            pageLinkClassName={"focus:bg-gray-200 focus:text-gray-900 border-gray-200 text-gray-200 hover:text-gray-900 hover:bg-gray-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium ease-in duration-300"}
                            previousLinkClassName={"previousBtn inline-flex items-center px-2 py-2 rounded-l-md border border-gray-200 text-sm font-medium text-gray-200 hover:text-gray-900 hover:bg-gray-200 ease-in duration-300"}
                            nextLinkClassName={"nextBtn relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-200 text-sm font-medium text-gray-200 hover:text-gray-900 hover:bg-gray-200 ease-in duration-300"}
                            disabledClassName={"paginationDisabled"}
                            activeClassName={"paginationActive"}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Developments
