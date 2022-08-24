import { useState, useEffect } from 'react'
import axios from 'axios';
import Layout from '../../Components/Layout/Layout';
import { image } from '../../Constants';

function DevelopmentsBlog() {

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/v1/posts").then((response) => {
            setPosts(response.data);
        })
    }, [])

    const [posts, setPosts] = useState([])


    return (
        <Layout>
            <nav>
                <div>
                    <h3 className='text-gray-200 text-4xl uppercase font-bold'>Sicily Experience Landing Page</h3>
                </div>
                <div>
                    <p className='text-gray-400'>00/00/0000</p>
                </div>
            </nav>

            <div className='grid grid-cols-2 mt-8 gap-8'>
                <div>
                    <img src={image.image} className="w-full rounded-lg" alt="" />
                </div>

                <div>
                    <div className='w-[27rem]'>
                        <img src={image.image} className="w-full rounded-lg" alt="" />
                    </div>
                    <div className='mt-10'>
                        <div>
                            <h3 className='text-gray-200 uppercase font-bold text-2xl'>Project overview</h3>
                        </div>
                        <div className='mt-5'>
                            <p className='text-gray-200'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
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
                                <h3 className='text-gray-200 font-bold text-lg uppercase'>Post title</h3>
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