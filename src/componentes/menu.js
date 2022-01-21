import React, { useState } from 'react'
import logo from '../images/logoPromobit.png'
import Modal from './autentication'
import './menu.css'

function Menu(){
    const [ModalVisivel, setModalVisivel] = useState(false)

    return(
        <div>
            <header>
                <div className='barra-top'>
                    <div className='lado-esquerdo'>
                        <img src={logo}/>
                    <nav className='menu'>
                        <a href='#'><span className='hover'><p className='style-link'>OFERTAS</p></span></a>
                        <a href='#'><span className='hover'><p className='style-link'>CUPONS</p></span></a>
                        <a href='#'><span className='hover'><p className='style-link'>FÓRUM</p></span></a>
                        <a href='#'><span className='hover'><p className='style-link'>BLOG</p></span></a>
                    </nav>
                    </div>
                    <div className='lado-direito'>
                        <div className='pesquisa'>
                            <input type='text' autoComplete='off' value='' placeholder='O que você procura?'></input>
                            <button className='button-pesquisa'><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg></button>
                        </div>
                        <button className='login' onClick={() => setModalVisivel(true)}><span className='style-btn'>Entre ou Cadastre-se</span></button>
                    </div>
                </div>
                <div className='barra-bottom'>
                    <div className='lado-esquerdo'>
                        <img src={logo}/>
                    <nav className='menu'>
                        <ul>
                            <li><a href='#'>ORFERTAS</a></li>
                            <li><a href='#'>CUPUNS</a></li>
                            <li><a href='#'>FÓRUM</a></li>
                            <li><a href='#'>BLOG</a></li>
                        </ul>
                    </nav>
                    </div>
                    <div className='lado-direito'>
                        <div className='pesquisa'>
                            <input type='text' autoComplete='off' value='' placeholder='O que você procura?'></input>
                            <button className='button-pesquisa'><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg></button>
                        </div>
                        <button className='login' ><span>Entre ou Cadastre-se</span></button>
                    </div>
                </div>
            </header>
           {ModalVisivel ? <Modal onClose={() => setModalVisivel(false)}/> : null}
        </div>
    )

}

export default Menu