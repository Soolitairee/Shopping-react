import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import {useParams} from "react-router-dom"
function Product() {
    const param = useParams()
    const select = useSelector(state => state.aletReducer)
    const sebet = useSelector(state => state.basketReducer)
    const wish = useSelector(state => state.wishReducer)
    let paltar = select.find(index => index.id == param.id)
     const dispatch = useDispatch()

    const handleAdd = (data) =>{
        let currentData = sebet.filter(index => index.id == data.id)
        if(currentData.length > 0) {
           currentData[0].quantity +=1
        }else {
         dispatch({type:"ADD_BASKET",payload:data})
        }
    }

        const handleWish = (e) => {
            let currentWish = wish.find(index => index.id == e.id)
            if (currentWish) {
              return false;
            } else {
              dispatch({ type: "ADD_WISH", payload: e })
              
            }
          }
        
       
  return (
      <>
    <div className='Product'>
    {
                    paltar && 
                     <div  className="prod-olcu">
                     
                       <div className="prod-imgs">
                         <img src={paltar.image} alt="" />
                       </div>
   
                       <div className="prod-yazi">
                       
                         <h3>{paltar.name}</h3>
                         <div className="star">
                         <svg  width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M15.668 8.626l8.332 1.159-6.065 5.874 1.48 8.341-7.416-3.997-7.416 3.997 1.481-8.341-6.064-5.874 8.331-1.159 3.668-7.626 3.669 7.626zm-6.67.925l-6.818.948 4.963 4.807-1.212 6.825 6.068-3.271 6.069 3.271-1.212-6.826 4.964-4.806-6.819-.948-3.002-6.241-3.001 6.241z"/></svg>
                         <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M15.668 8.626l8.332 1.159-6.065 5.874 1.48 8.341-7.416-3.997-7.416 3.997 1.481-8.341-6.064-5.874 8.331-1.159 3.668-7.626 3.669 7.626zm-6.67.925l-6.818.948 4.963 4.807-1.212 6.825 6.068-3.271 6.069 3.271-1.212-6.826 4.964-4.806-6.819-.948-3.002-6.241-3.001 6.241z"/></svg>
                         <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M15.668 8.626l8.332 1.159-6.065 5.874 1.48 8.341-7.416-3.997-7.416 3.997 1.481-8.341-6.064-5.874 8.331-1.159 3.668-7.626 3.669 7.626zm-6.67.925l-6.818.948 4.963 4.807-1.212 6.825 6.068-3.271 6.069 3.271-1.212-6.826 4.964-4.806-6.819-.948-3.002-6.241-3.001 6.241z"/></svg>
                         <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M15.668 8.626l8.332 1.159-6.065 5.874 1.48 8.341-7.416-3.997-7.416 3.997 1.481-8.341-6.064-5.874 8.331-1.159 3.668-7.626 3.669 7.626zm-6.67.925l-6.818.948 4.963 4.807-1.212 6.825 6.068-3.271 6.069 3.271-1.212-6.826 4.964-4.806-6.819-.948-3.002-6.241-3.001 6.241z"/></svg>
                         <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M15.668 8.626l8.332 1.159-6.065 5.874 1.48 8.341-7.416-3.997-7.416 3.997 1.481-8.341-6.064-5.874 8.331-1.159 3.668-7.626 3.669 7.626zm-6.67.925l-6.818.948 4.963 4.807-1.212 6.825 6.068-3.271 6.069 3.271-1.212-6.826 4.964-4.806-6.819-.948-3.002-6.241-3.001 6.241z"/></svg>
                           </div>
                        
                         <div className="prod-qiymet">
   
                           
   
                           <p>{paltar.price}₼</p>
                           
                         </div>
   
                         <div className="prod-addcard">
                           <button
                           onClick={()=> handleAdd (paltar)}
                            >+ Add to card</button>
                         </div>
                         <div className="prod-addwishlist">
                           <button  onClick={() => handleWish(paltar)}
                            ><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/> </svg><span>go to wishlist</span></button>
                         </div>
                         
                         <div className="prod-about">
                             <h5>Haqqında:</h5>
                             <p>{paltar.about}</p>
                         </div>
                       </div>
                       
                     </div>
   
   
                 
                 }
    
       </div>
     
       </>
     )
   }

export default Product