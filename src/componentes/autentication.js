import React from "react";
import "./autentication.css"


function Modal({ id = 'modal', onClose = () =>{}, children}){
    const clickFora = (e) =>{
        if(e.target.id === id) onClose()
    }

    return(
        <div id={id} className="modal"  onClick={clickFora}>
            <div className="conteiner">
                <header className='header-login'>
                <h3>Acesse ou cadastre-se</h3>
                <button className='fechar' onClick={onClose}/>
                </header>
                <section>
                    <div className='botoes-login'>
                        <div className='botoes-redesosial'>
                            <button className='btn-sosial facebook facebookBackgroud'>Facebook</button>
                            <button className='btn-sosial google googleBackgroud'>Google</button>
                        </div>
                        <div>
                            <p>ou</p>
                        </div>
                        <button>Acesse com e-mail</button>
                    </div>
                    <div>
                    </div>
                    <p>Ainda não é menbro?</p>
                    <button>Cadastre-se</button>
                </section>
            </div>
        </div>
    )
}

export default Modal