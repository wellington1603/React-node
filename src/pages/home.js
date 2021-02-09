import React from 'react';
import './home.css'
import {lazy, Suspense} from 'react';

const Carrosel = lazy(()=>import('../componentes/carrosel/Carrosel'));

class Home extends React.Component{
    render(){
        return(
            <div>
                <div className='container-fluid'>
                    <Suspense fallback={"Carregando..."}>
                        <Carrosel/>
                    </Suspense>
                    
                    <h1>Seja bem vindo(a)!</h1>
                    <p>Aqui em nossa loja, <strong>programadores tem desconto</strong> em nosso produtos.</p>

                </div>
            </div>
        )
    }
}

export default Home;