import React from 'react';
import './styles.css'
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'
import {FiLogIn} from 'react-icons/fi';
import {Link} from 'react-router-dom';

export default function Logon(){
    return(
        <div className='logon-container'>
            <section className="form">
                <img src={logoImg} alt="Be The Heroe"/>
                <form>
                    <h1>Faça Seu Logon</h1>

                    <input placeholder="Sua ID"/>

                    <button className='button' type='submit'>Entrar</button>
                    <Link to="/register">
                        <FiLogIn/>
                        Não Tenho Cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}