import { FC } from 'react';
import './Blog.scss'

const Blog:FC = () => {
    const imgArr:string[] = ["/img/about/02.jpg","/img/slider/del.png","/img/about/03.jpg","/img/about/01.jpg","/img/slider/slider1.png" ]
    return (
        <div className='blog'>
            <div className="blog__container">
                <div className="blog__inner">
                    <div className="blog__title">Blog</div>
                    <div className="blog__wrapper">
                        {imgArr.map((img, index) => (
                                 <div className="blog__column" key={index}>
                                 <div className="blog__image">
                                     <img src={img} alt=""/>
                                 </div>
                                 <div className="blog__content content-blog">
                                     <div className="content-blog__date">Fashion - October 8, 2020</div>
                                     <a className="content-blog__title">Top Trends From Spring</a>
                                     <div className="content-blog__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero... </div>
                                     <a className="content-blog__link">Read More</a>
                    
                                 </div>
                    
                             </div>
                        ))}
                    </div>
                </div>            
            </div>
        </div>
    );
}

export default Blog;
