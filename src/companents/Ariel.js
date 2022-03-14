import React from 'react'
import { useSelector,useDispatch } from "react-redux"
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';
function Ariel() {
    const ari = useSelector(state => state.arielReducer)
    const bask = useSelector(state => state.basketReducer)
    const wish = useSelector(state => state.wishReducer)
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

    }else {
      dispatch({type:"ADD_WISH", payload:data})
    }
    console.log(data)
  }
    
    return (
       
        <>
         <div className="container">
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
          ari && [...ari].splice(0,4).map(index => (
            <SwiperSlide>
            <div className='fairy-head' key={index}>
              <div className="fairy-img">
              <div onClick={()=> handleWish (index)} className="wishlist">
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/></svg>
                  </div>
                   <img src={index.image} alt="" /> 
                 
                <div className='fairy-name-qiy'>
                  <h5>{index.name}</h5>
                  <p>{index.price}₼</p>
                  
                </div>
                <div className="fairy-btn">
                    <button onClick={()=> handleBasket(index)} >Səbətə əlavə et</button>
                  </div>

              </div>
            </div>
            </SwiperSlide>
          ))
        }
        
        </div>
    
    
   </Swiper>
   </div>
   <div className="container">
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
          ari && [...ari].splice(4,8).map(index => (
            <SwiperSlide>
            <div className='fairy-head' key={index}>
              <div className="fairy-img">
              <div onClick={()=> handleWish (index)} className="wishlist">
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/></svg>
                  </div>
                   <img src={index.image} alt="" /> 
                 
                <div className='fairy-name-qiy'>
                  <h5>{index.name}</h5>
                  <p>{index.price}₼</p>
                  
                </div>
                <div className="fairy-btn">
                    <button onClick={()=> handleBasket(index)} >Səbətə əlavə et</button>
                  </div>

              </div>
            </div>
            </SwiperSlide>
          ))
        }
        
        </div>
    
    
   </Swiper>
   </div>
   </>


  )
}

export default Ariel