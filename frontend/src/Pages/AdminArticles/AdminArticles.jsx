import { useEffect, useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";
import Layout from '../../Components/Layout/Layout';
import { image } from '../../Constants/index';

function AdminArticles() {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/v1/articles").then((response) => {
            setArticles(response.data);
        })
    }, [])

    return (
        <Layout>

            <div className="">
                <div className="flex items-center lg:justify-between sm:justify-center">
                    <div className="">
                        <h3
                            className="text-gray-200 font-semibold lg:text-3xl sm:text-2xl mb-2"
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
                    {articles.map((article) => {
                        return (

                            <div className="flex justify-between">
                                <div className="flex space-x-10 items-center">
                                    <div className="">
                                        <img src={article.image_url} className='w-60 rounded-lg object-cover' alt="" />
                                    </div>


                                    <div className="space-y-8">
                                        <h3 className='text-gray-200 font-bold uppercase'>{article.titulo}</h3>
                                        <p className='text-gray-400 font-semibold uppercase'>00/00/00</p>
                                        <div className="">
                                            <Link to={`/admin/articles/new_post/${article.titulo}`} className='hover:text-gray-900 text-gray-200 hover:bg-gray-200 px-10 py-1 border-2 rounded ease-in duration-300'>Add Post</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-center">
                                    <div className='items-center space-y-5'>
                                        <div className=""><button className='text-gray-400 hover:text-gray-200 ease-in duration-300 text-3xl'><span class="iconify" data-icon="carbon:view"></span></button></div>
                                        <div className=""><button className='text-gray-400 hover:text-gray-200 ease-in duration-300 text-3xl'><span class="iconify" data-icon="fluent:edit-20-regular"></span></button></div>
                                        <div className=""><button className='text-gray-400 hover:text-gray-200 ease-in duration-300 text-3xl'><span class="iconify" data-icon="ion:trash-bin-outline"></span></button></div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div >
            </div >
        </Layout>
    )
}

export default AdminArticles