import { FC } from 'react';

import SwiperBlock from '../components/Swiper/Swiper';
import ProductList from '../components/ProductList/ProductList';


const Home:FC = () => {
    return (
        <>
            <SwiperBlock/>
            <ProductList/>
        </>
    );
}

export default Home;
