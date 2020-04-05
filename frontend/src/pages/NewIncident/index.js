import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.svg';

import api from '../../services/api'


export default function NewIncident(){

    const [title, setTitle] = useState('');
    const [ description, setDescription ] = useState('');
    const [ value, setValue ] = useState('');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();
    
    async function handleNewIncident(e){

        e.preventDefault();

        const data = {
            title,
            description,
            value
        };

        try {
            const response = await api.post('incidents', data, {headers: {
                Authorization: ongId
            } });

            history.push('/profile');

        } catch (e) {
            alert(`Erro no cadastro, tente novamente.`)
        }
    } 
    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastro Novo Caso</h1>
                     <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso</p>
                     <Link to="/profile" className='back-link'>
                        <FiArrowLeft/>
                        Voltar para Home
                    </Link>
                    
                </section>

                <form onSubmit={ handleNewIncident }>
                    <input 
                        placeholder="Titulo do Caso" 
                        type='text'
                        value={title} 
                        onChange={e => setTitle(e.target.value)} 
                    />
                    <textarea 
                        placeholder='Descrição'
                        value={description} 
                        onChange={e => setDescription(e.target.value)} 
                    />
                    <input 
                        placeholder="Valor em Reais"
                        value={value} 
                        onChange={e => setValue(e.target.value)} 
                    />
    
                    <button type='submit' className="button">
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );
}  