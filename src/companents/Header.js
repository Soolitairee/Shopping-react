import React from 'react'
import {useState,useRef} from "react"
import { useSelector,useDispatch } from 'react-redux'
import { NavLink} from "react-router-dom"
import Logo from "../images/bbb.png"
function Header() {
    const menuRef = useRef()
    const stop = useRef()

    const basketUzunluqu = useSelector(state=> state.basketReducer)
    const wishUzunluqu = useSelector(state=> state.wishReducer)

    const [openMenu,setOpenMenu] = useState(true)
    const [state,setState] = useState([])

 

    
  
    const handlMenu= ()=> {
        if (openMenu) {
            
            menuRef.current.style.height="170px"
            
      
          
        } else {
            
            menuRef.current.style.height="0"
          
            
        }

        setOpenMenu(!openMenu)
    }
    // const handleChange = (e) => {
    //     let val = e.target.value
    //     mallar.map(index => {
    //         if (index.name.startsWith(val)) {
    //             setState([index])
    //         }
    //         if (!val) {
    //             setState([...mallar])
    //         }
    //     })
    // }
   
    return (
        <div className='Head-back'>
            <div className="container">
                <div className="Head">
                    <div className='logo-head'>
                      <NavLink to="/">  <img src={Logo} width={"50px"} height={"50px"} alt="" /></NavLink>
                    </div>
                    <div className="search">
                        <input 
                        // onChange={(e) => handleChange(e)} 
                        placeholder='ərzaqları axtar...' type="search" />
                        <div className='axtar'><button>AXTAR</button></div>
                    </div>
                    <div >
                        <ul className="sell">
                            
                                <li  onClick={()=> handlMenu()} className='mehsul'><span>Məhsullar</span>
                                    <ul ref={menuRef}  className='mehsul-bash'>
                                        <li  className='Temizlik-head'>
                                            <NavLink to="/aletler">Temizlik alətləri</NavLink>
                                        </li>

                                        <li  className='Temizlik-child'>
                                            <NavLink to="/Ace">Ace</NavLink>
                                        </li>
                                        <li >
                                            <NavLink to="/Ariel">Ariel</NavLink>
                                        </li>
                                        <li >
                                            <NavLink to="/Fairy">Fairy</NavLink>
                                        </li>
                                        <li >
                                            <NavLink to="/sabunlarUni">Sabunlar/Uni</NavLink>

                                        </li>
                                        
                                        
                                    </ul>
                                </li> 

                           

                            <li>
                                <NavLink to="/Wishlist">
                                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" /></svg>
                                    <span>({wishUzunluqu.length})</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Basket">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 3l-.743 2h-1.929l-3.474 12h-13.239l-4.615-11h16.812l-.564 2h-13.24l2.937 7h10.428l3.432-12h4.195zm-15.5 15c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.9-7-1.9 7c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z" /></svg>
                                    <span>({basketUzunluqu.length})</span>
                                </NavLink>
                            </li>
                            <li >
                                <NavLink ref={stop}  to="/Login" className='log-align heart'>
                                    <svg className='svg1' width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M16 1c-4.418 0-8 3.582-8 8 0 .585.063 1.155.182 1.704l-8.182 7.296v5h6v-2h2v-2h2l3.066-2.556c.909.359 1.898.556 2.934.556 4.418 0 8-3.582 8-8s-3.582-8-8-8zm-6.362 17l3.244-2.703c.417.164 1.513.703 3.118.703 3.859 0 7-3.14 7-7s-3.141-7-7-7c-3.86 0-7 3.14-7 7 0 .853.139 1.398.283 2.062l-8.283 7.386v3.552h4v-2h2v-2h2.638zm.168-4l-.667-.745-7.139 6.402v1.343l7.806-7zm10.194-7c0-1.104-.896-2-2-2s-2 .896-2 2 .896 2 2 2 2-.896 2-2zm-1 0c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1z" /></svg>
                                    <span>Daxil ol</span>
                                </NavLink>
                            </li>
                            <li >
                                <NavLink className='reg-align' to="/Register">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.995 24h-1.995c0-3.104.119-3.55-1.761-3.986-2.877-.664-5.594-1.291-6.584-3.458-.361-.791-.601-2.095.31-3.814 2.042-3.857 2.554-7.165 1.403-9.076-1.341-2.229-5.413-2.241-6.766.034-1.154 1.937-.635 5.227 1.424 9.025.93 1.712.697 3.02.338 3.815-.982 2.178-3.675 2.799-6.525 3.456-1.964.454-1.839.87-1.839 4.004h-1.995l-.005-1.241c0-2.52.199-3.975 3.178-4.663 3.365-.777 6.688-1.473 5.09-4.418-4.733-8.729-1.35-13.678 3.732-13.678 4.983 0 8.451 4.766 3.732 13.678-1.551 2.928 1.65 3.624 5.09 4.418 2.979.688 3.178 2.143 3.178 4.663l-.005 1.241zm-13.478-6l.91 2h1.164l.92-2h-2.994zm2.995 6l-.704-3h-1.615l-.704 3h3.023z" /></svg> <span>Qeydiyyat</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    {console.log(state)}
                    {
                      state && state.map((index,key) => (
                            <h1 key={key}>{index.name}</h1>
                        ))
                    }
                   
                </div>
            </div>
        </div>
    )
}

export default Header