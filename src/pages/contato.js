import React from 'react';

class Contato extends React.Component{

    render(){
        return(
            <div>
                <div className='container'>
                    <h1>Contato</h1>
                    <div>
                        <form method="post" action="http://localhost:2000/postagem">
                            <label>Nome</label><br></br>
                            <input type="text" name="nome" placeholder="Nome completo"/><br></br>
                            <label>Mensagem</label><br></br>
                            <input type="text" name="msg" placeholder="Digite sua mensagem"/><br></br>
                            <input type="submit" name="submit" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contato;