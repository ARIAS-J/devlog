import { useEffect, useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";
import Layout from '../../Components/Layout/Layout';
import ReactPaginate from 'react-paginate';

function AdminArticles() {

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/v1/articles").then((response) => {
            setArticles(response.data);
        })
    }, [])


    const [articles, setArticles] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);

    const articlesPerPage = 6
    const pagesVisited = pageNumber * articlesPerPage

    const displayArticles = articles.slice(pagesVisited, pagesVisited + articlesPerPage).map(article => {
        return (

            <div className="flex justify-between">
                <div className="flex space-x-10 items-center">
                    <div className="sm:flex sm:justify-center">
                        <img src={article.image_url} className='w-60 rounded-lg object-cover' alt="" />
                    </div>

                    <div className="space-y-8">
                        <h3 className='text-gray-200 font-bold uppercase'>{article.titulo}</h3>
                        <p className='text-gray-400 font-semibold uppercase'>00/00/00</p>
                        <div className="">
                            <Link to={`/admin/articles/new_post/${article.id}/${article.titulo}`} className='hover:text-gray-900 text-gray-200 hover:bg-gray-200 px-8 py-1 border-2 rounded ease-in duration-300'>Add Post</Link>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className='flex flex-col justify-center gap-8'>
                        <div className=""><button className='text-gray-400 hover:text-gray-200 ease-in duration-300 text-3xl'><span class="iconify" data-icon="carbon:view"></span></button></div>
                        <div className=""><Link to={`/admin/articles/update_article/${article.id}/${article.titulo}`} className='text-gray-400 hover:text-gray-200 ease-in duration-300 text-3xl'><span class="iconify" data-icon="fluent:edit-20-regular"></span></Link></div>
                        <div className=""><button className='text-gray-400 hover:text-gray-200 ease-in duration-300 text-3xl'><span class="iconify" data-icon="ion:trash-bin-outline"></span></button></div>
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

            <div className="">
                <div className="flex items-center lg:justify-between sm:justify-center">
                    <div className="">
                        <h3
                            className="text-gray-200 font-semibold lg:text-2xl sm:text-2xl mb-2 uppercase"
                        >
                            Articles
                        </h3>
                    </div>
                    <div className="">
                        <Link to='new_article' className='flex justify-center items-center px-5 py-1 rounded text-gray-900 bg-gray-400 hover:bg-gray-200 ease-in duration-300'>Add Article</Link>
                    </div>
                </div>

                <hr className="text-gray-200" />

                <div className="mt-5 grid grid-cols-2 gap-8">
                    {displayArticles}
                </div >

                <div className="flex justify-center mt-4">
                    <ReactPaginate
                        previousLabel={"Back"}
                        nextLabel={"Next"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBtns relative z-0 inline-flex rounded-md shadow-sm -space-x-px"}
                        pageLinkClassName={"paginationLinks focus:bg-gray-200 focus:text-gray-900 border-gray-200 text-gray-200 hover:text-gray-900 hover:bg-gray-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium ease-in duration-300"}
                        previousLinkClassName={"previousBtn inline-flex items-center px-2 py-2 rounded-l-md border border-gray-200 text-sm font-medium text-gray-200 hover:text-gray-900 hover:bg-gray-200 ease-in duration-300"}
                        nextLinkClassName={"nextBtn relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-200 text-sm font-medium text-gray-200 hover:text-gray-900 hover:bg-gray-200 ease-in duration-300"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                    />
                </div>
            </div >
        </Layout>
    )
}

export default AdminArticles