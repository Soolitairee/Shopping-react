import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import {Link} from "react-router-dom"
function Wishlist() {
    const wish = useSelector(state => state.wishReducer)
    const bask = useSelector(state => state.basketReducer)
    const dispatch = useDispatch()
    const handleBasket = (data) => {
        let currentData = bask.filter(index => index.id == data.id)
        if(currentData.length > 0){
            return false
        }else {
          dispatch({type:"ADD_BASKET", payload:data})
        }
        console.log(data)
       
      }
  return (
    <div className="container">
    <div className='bask'>
      {
        wish && wish.map(index => (
      
          <div className='bask-head' key={index}>
            <div className="bask-img">
            <Link to={`/Product/${index.id}`}>
                     <img src={index.image} alt="" />
                     </Link>
            </div>
            <div className='bask-name'>
              <h5>{index.name}</h5>
              <p>{index.price}₼</p>
              <div className='bask-sil'>
                <button>Sil</button>
              </div>
              </div>
            
          </div>
          
        ))
      }
      
      </div>
  </div>
  

  )
}

export default Wishlist