import React, { useState } from 'react'
import './cardProdutos.css'



function Produtos({img = 'https://i.promobit.com.br/180/441951369116197022503829358697.png', preco = '1.978,10', precoOriginal = '3.199,00',  descricao = 'loren', loja ='Submarino', dias='1 d', curtidas = '20', comentarios = '20'}){

    return(
        <div className='card'>
            <div className='img-card'>
                <img src={img}/>
            </div>
            <div className='123'>
                <div className='precos'>
                    <div className='valor'>
                        <h3>R$</h3>
                        <h3>{precoOriginal}</h3>
                    </div>
                    <div className='valor'>
                        <h1>R$</h1>
                        <h1>{preco}</h1>
                    </div>
                </div>
                <div className='bonus'>
                    <div className='bonus-conteudo'>APP</div>
                    <div className='bonus-conteudo'>Marketplace</div>
                    <div className='bonus-conteudo'>parcelado</div>
                </div>
                <h2 className='descricao'>{descricao}</h2>
                <div className='loja-dias'>
                    <h4>{loja}</h4>
                    <h4>{dias}</h4>
                </div>
                <div className='curtidas-comentarios'>
                    <div className='curtidas-comentarios-conteudo'>
                        <div className='comentarios'><svg className='svg-comentario' aria-hidden="true" height="16px" width="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path fill="currentColor" d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"></path></g></svg>{comentarios}</div>
                        <div className='curtidas'>
                            <button class="css-65iybr er6hu8e0">
                                <svg aria-hidden="true" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path fill="currentColor" d="M8.167 8.75v9.375H5.042c-.576 0-1.042-.42-1.042-.937v-7.5c0-.518.466-.938 1.042-.938h3.125zM14.449 5l.094.014.765.172c.475.107.86.4 1.055.805.194.404.17.857-.068 1.242L15.21 8.99a.42.42 0 0 0 .007.465c.045.07.18.231.449.231h3.077c1.06 0 1.924.777 1.924 1.732 0 .13-.017.262-.05.39L19.505 16.4c-.308 1.014-1.341 1.723-2.511 1.723h-5.182c-1.435 0-2.604-1.05-2.604-2.343v-4.905c0-.58.237-1.136.668-1.568l4.154-4.153a.553.553 0 0 1 .513-.14z"></path></g></svg>
                                <p>{curtidas}</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Produtos
