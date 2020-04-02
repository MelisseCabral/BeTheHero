import React from 'react';
import { Link } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function NewIncident(){
    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastro Novo Caso</h1>
                     <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso</p>
                     <Link to="/" className='back-link'>
                        <FiArrowLeft/>
                        Voltar para Home
                    </Link>
                    
                </section>

                <form>
                        <input placeholder="Titulo do Caso" type='text'/>
                        <textarea placeholder='Descrição'/>
                        <input placeholder="Valor em Reais"/>
       
                        <button type='submit' className="button">
                            Cadastrar
                        </button>
                    </form>
            </div>
        </div>
    );
}  