import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import {FiLogIn} from 'react-icons/fi'

export default function Register(){
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastro</h1>
                     <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrar sua ONG</p>
                     <Link to="/" className='back-link'>
                        <FiLogIn/>
                        Já Tenho Cadastro
                    </Link>
                    
                </section>

                <form>
                        <input placeholder="Nome da ONG" type='text'/>
                        <input type="email" placeholder='Email'/>
                        <input type="text" placeholder='WhatsApp'/>
                        <div className="input-group">
                            <input placeholder="Cidade"/>
                            <input placeholder="UF" style={{width: 80}}/>
                        </div>
                        <button type='submit' className="button">
                            Cadastrar
                        </button>
                    </form>
            </div>
        </div>
    );
}  