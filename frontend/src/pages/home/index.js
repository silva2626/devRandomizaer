import React from 'react'
import { FaHeart } from 'react-icons/fa'
import {useHistory} from 'react-router-dom'

import './styles.css'
import ilustration01 from '../../assets/img/ilustration01.png'

export default function Home(){
    const history = useHistory();
    return (
        <div className="home-container">
            <div className="home-main">
                <div className="home-info">
                    <h3>Bem Vindo ao</h3>
                    <h1>Dev Randomizer</h1>
                    <p>
                    Caso anseie colocar em práticas sua habilidade como programador, busca novos desafios, ou simplesmente está entediado, o <strong>Dev Randomizer</strong> está aqui para te ajudar.
                    </p>
                    <br/>
                    <p>
                    Criamos randomicamente especificações e características de projetos web, para que possa sozinho ou em equipe, botar a mão na massa e superar seus limites.
                    </p>
                    <br/>
                    <p>
                    Insira o título do projeto ao lado ou á baixo e comece a criar !
                    </p>
                </div>
                <div className="home-inputs">
                    <figure> 
                        <img src={ilustration01} alt="Homem Programando"/>
                    </figure>
                    <form onSubmit={() => history.push('/stacksSelection')}>
                        <input placeholder="Insira o Título do Projeto"/>
                        <button type="submit">Próximo</button>
                    </form>
                </div>
            </div>
            <div className="home-madeBy">
                <h4><a href="https://github.com/silva2626" target="_blank">Made with <FaHeart color="#f44336" /> by Allison</a></h4>
            </div>
        </div>
    )
}