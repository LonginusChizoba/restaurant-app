import React from 'react'
import Image from 'next/image';
import { BlogList } from '@/types/blogList';

const Blog = () => {

    const blogPosts = () => {
        const blogs:BlogList[] = [
            {
                image: "/blog1.jpg",
                date: "June 10, 2022",
                title: "Labor Depar rules pro as tweaks overtime",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            },

            {
                image: "/blog2.jpg",
                date: "May 1, 2022",
                title: "Labor Depar rules pro as tweaks overtime",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            },

            {
                image: "/blog3.jpg",
                date: "April 20, 2022",
                title: "Labor Depar rules pro as tweaks overtime",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            },
        ];

        return blogs;
    }

  return (
    <section className="blog" id="blog">
    <div className="center-text">
        <h3>Blog</h3>
        <h2>Our Food Update</h2>
    </div>

    <div className="blog-content">
        {blogPosts().map((blog, index) => (
            <div className="main">
                <Image src={blog.image} alt="" layout="responsive" width={800} height={550} />
                <div className="blog-text">
                    <h6>{blog.date}</h6>
                    <h4>{blog.title}</h4>
                    <p>{blog.description}</p>
                </div>

                <div className="blog-btn">
                    <a href="#">Learn more</a>
                    <span><i className='bx bx-right-arrow-alt' ></i></span>
                </div>
            </div>
            
        ))}

    </div>
</section>
  )
}

export default Blog;