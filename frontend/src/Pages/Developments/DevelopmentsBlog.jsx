import { useState, useEffect } from 'react'
import axios from 'axios';
import Layout from '../../Components/Layout/Layout';
import { image } from '../../Constants';
import { useLocation, useParams } from 'react-router-dom';


function DevelopmentsBlog() {
    const location = useLocation()

    const article_id = location.pathname.split('/')[2]

    const [posts, setPosts] = useState([])

    const [article, setArticle] = useState([])
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/articles/${article_id}/posts`).then((response) => {
            setPosts(response.data);
        })
    }, [])


    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/articles/${id}`).then((response) => {
            setArticle(response.data);
        })
    }, [])


    return (
        <Layout>
            <nav>
                <div>
                    <h3 className='text-gray-200 text-4xl uppercase font-bold'>{article.titulo}</h3>
                </div>
                <div>
                    <p className='text-gray-400'>{article.created_date}</p>
                </div>
            </nav>

            <div className='grid grid-cols-2 mt-8 gap-8'>
                <div>
                    <img src={article.image} className="w-full rounded-lg" alt="" />
                </div>

                <div>
                    <div className='w-[27rem]'>
                        <img src={article.image} className="w-full rounded-lg" alt="" />
                    </div>
                    <div className='mt-10'>
                        <div>
                            <h3 className='text-gray-200 uppercase font-bold text-2xl'>Project overview</h3>
                        </div>
                        <div className='mt-5'>
                            <p className='text-gray-200'>{article.descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>
            {posts.map((post) => {
                return (
                    <div className='flex mt-28 gap-8'>
                        <div className='w-60 flex flex-col items-center'>
                            <div className='bg-gray-800 px-5 py-4 rounded-full'>
                                <h3 className='text-gray-200 font-bold text-lg uppercase'>01</h3>
                            </div>

                            <div className='mt-3'>
                                <h3 className='text-gray-200 font-bold text-lg uppercase'>May</h3>
                            </div>
                        </div>

                        <div className='bg-gray-800 px-8 py-5 rounded-lg'>
                            <div>
                                <h3 className='text-gray-200 font-bold text-lg uppercase'>{post.title_post}</h3>
                            </div>
                            <div className="mt-3">
                                <p className='text-gray-200 font-thin'>{post.content}</p>
                            </div>
                        </div>
                    </div>
                )
            })}

        </Layout>
    )
}

export default DevelopmentsBlog