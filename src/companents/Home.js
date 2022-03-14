import React, { useEffect } from 'react'
import { NavLink } from "react-router-dom"
import { useSelector,useDispatch } from 'react-redux';
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';

import Slider from "react-slick";
function Home() {
    const wish = useSelector(state => state.wishReducer)
    const satilan = useSelector(state => state.satilanReducer)
    const ucuz = useSelector(state => state.ucuzReducer)
    const bask = useSelector(state => state.basketReducer)
    const dispatch = useDispatch()
    const handleBasket = (data) => {
        let currentData = bask.filter(index => index.id == data.id)
        if(currentData.length > 0){
            currentData[0].quantity+= 1
        }else {
          dispatch({type:"ADD_BASKET", payload:data})
        }
        console.log(data)
       
      }
      const handleWish = (data) => {
        let currentData = wish.filter(index => index.id == data.id)
        if(currentData.length > 0){
            return false
        }else {
          dispatch({type:"ADD_WISH", payload:data})
        }
        console.log(data)
       
      }

    var settings = {


        speed: 500,

        autoplay: true,
        autoplaySpeed: 3500
    };
    return (
        <div className='home-reng'>
            <div className="container">
                <div className='home'>


                    <Slider {...settings} >
                        <div>
                            <img src="https://simpla.az/media/wysiwyg/banner-2.jpg" alt="" />
                        </div>
                        <div>
                            <img src="https://simpla.az/media/wysiwyg/Uni-Banner---Aze-870x432-px.jpg" alt="" />
                        </div>

                    </Slider>
                </div>


                <div className="prods-ariel">

                    <div className='i'>
                        <NavLink to="/Ariel">  <img src="https://simpla.az/media/wysiwyg/AR_ELPODSMOB.jpg" alt="" /> </NavLink>
                    </div>
                    <div className='i'>
                        <NavLink to="/Fairy">  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/FairyBottles.jpg/800px-FairyBottles.jpg" width={"400px"} height={"277px"} alt="" /> </NavLink>
                    </div>
                    <div className='i'>
                    <NavLink to="/aletler">  <img src="https://i0.wp.com/www.eslbuzz.com/wp-content/uploads/2017/10/427a2a640d11aa66b9787a553cf6f556.jpg" alt="" width={"400px"} height={"277px"} /> </NavLink>
                    </div>
                    <div className='i'>
                        <NavLink to="/Ace"> <img src="https://www.ofiskutum.com/ace-ultrayogun-camasir-suyu-750-ml-camasir-suyu-ace-34278-33-B.jpg" width={"400px"} height={"277px"} alt="" />
                        </NavLink>
                    </div>
                    <div className='i'>
                        <NavLink to="/sabunlarUni"> <img src="https://i.ytimg.com/vi/zs2OvdPPRtk/maxresdefault.jpg" alt="" width={"400px"} height={"277px"} /> </NavLink>
                    </div>
                    <div className='i'>
                        <NavLink to="/sabunlarUni">
                            <img src="https://simpla.az/media/catalog/product/cache/12/image/dcea85b79f53f476e63febbf0515a73f/u/n/uni-baby-pack-mart.jpg" alt="" width={"400px"} height={"277px"} />
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="moresell">
                    <h1>Ən çox satılanlar:</h1>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        autoplay={true}
                        loop={true}
                       
                        breakpoints={{
                            "@0.00": {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            "@0.75": {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            "@1.00": {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            "@1.50": {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"

                    >


                        <div className='fairy'>
                            {
                                satilan && satilan.map(index => (
                                    <SwiperSlide>
                                        <div className='fairy-head' key={index}>
                                            <div className="fairy-img">
                                                <div onClick={()=> handleWish (index)} className="wishlist">
                                                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" /></svg>
                                                </div>
                                                <img src={index.image} alt="" />

                                                <div className='fairy-name-qiy'>
                                                    <h5>{index.name}</h5>
                                                    <p>{index.price}₼</p>

                                                </div>
                                                <div className="fairy-btn">
                                                    <button onClick={()=> handleBasket(index)}>Səbətə əlavə et</button>
                                                </div>

                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }

                        </div>


                    </Swiper>
                </div>
            </div>
            <div className="container">
                <div className="moresell">
                    <h1>Ən Ucuz:</h1>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        autoplay={true}
                        loop={true}
                       
                        breakpoints={{
                            "@0.00": {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            "@0.75": {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            "@1.00": {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            "@1.50": {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"

                    >


                        <div className='fairy'>
                            {
                                ucuz && ucuz.map(index => (
                                    <SwiperSlide>
                                        <div className='fairy-head' key={index}>
                                            <div className="fairy-img">
                                                <div onClick={()=> handleWish (index)} className="wishlist">
                                                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" /></svg>
                                                </div>
                                                <img src={index.image} alt="" />

                                                <div className='fairy-name-qiy'>
                                                    <h5>{index.name}</h5>
                                                    <p>{index.price}₼</p>

                                                </div>
                                                <div className="fairy-btn">
                                                    <button onClick={()=> handleBasket(index)}>Səbətə əlavə et</button>
                                                </div>

                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }

                        </div>


                    </Swiper>
                </div>
            </div>


        </div>
    )
}

export default Home