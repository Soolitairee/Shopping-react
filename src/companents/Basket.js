import React,{useState} from 'react'
import {useSelector,useDispatch} from "react-redux"
import {Link} from "react-router-dom"
function Basket() {
    const bask = useSelector(state => state.basketReducer)
    const [price,setPrice] = useState(0)
    const disp = useDispatch()
    const hesabla = () => {
      let y=0
      bask.map(index => {
       
        y += Number(index.quantity) * Number(index.price)
      })
return y
    }

    const handlSil = (id)=> {
      disp({type:"REMOVE",payload: id})
    }
  return (
    <div className="container">
      <div className="hesabla">
        <h1>Qiymət: {hesabla()}</h1>
      </div>
    <div className='bask'>
      {
        bask && bask.map(index => (
      
          <div className='bask-head' key={index}>
            <div className="bask-img">
            <Link to={`/Product/${index.id}`}>
                     <img src={index.image} alt="" />
                     </Link>
            </div>
            <div className='bask-name'>
              <h5>{index.name}</h5>
              <p>Qiymət:{index.price}₼</p>
              <p>Sifarişiniz {index.quantity} ədəd</p>
              <div className='bask-sil'>
                <button onClick={()=> handlSil (index.id)}>Sil</button>
              </div>
              </div>
          </div>
          
        ))
      }
      
      </div>
  </div>
  )
}

export default Basket