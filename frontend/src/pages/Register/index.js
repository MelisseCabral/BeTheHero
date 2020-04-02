import React, { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import {FiLogIn} from 'react-icons/fi'

import api from '../../services/api'

export default function Register(){

    const [name, setName] = useState('');
    const [ email, setEmail ] = useState('');
    const [ whatsapp, setWhatsApp ] = useState('');
    const [ city, setCity ] = useState('');
    const [ uf, setUF ] = useState('');
    
    async function handleRegister(e){

        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };

        try {
            const response = await api.post('ongs', data);
            alert(`Seu ID de Acesso: ${response.data.id}`);    
        } catch (e) {
            alert(`Erro no cadastro, tente novamente.`)
        }
    } 

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

                <form onSubmit={handleRegister}>
                        <input 
                            placeholder="Nome da ONG" 
                            value={name} 
                            onChange={e => setName(e.target.value)} 
                            type='text'
                        />

                        <input 
                            type="email" 
                            value={email} 
                            onChange={e => setEmail(e.target.value)} 
                            placeholder='Email'
                        />

                        <input 
                            type="text" 
                            value={whatsapp} 
                            onChange={e => setWhatsApp(e.target.value)} 
                            placeholder='WhatsApp'
                        />

                        <div className="input-group">
                            <input 
                                value={city} 
                                placeholder="Cidade" 
                                onChange={e => setCity(e.target.value)} 
                            />

                            <input 
                                value={uf} 
                                placeholder="UF" 
                                style={{width: 80}}
                                onChange={e => setUF(e.target.value)} 
                            />

                        </div>
                        <button type='submit' className="button">
                            Cadastrar
                        </button>
                    </form>
            </div>
        </div>
    );
}  