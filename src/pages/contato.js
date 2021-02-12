import React from 'react';
import Api from '../componentes/api/Api'

class Contato extends React.Component{

    state = {
        comentarios: []
    }

    async componentDidMount(){
        const response = await Api.get('/')
        // console.log(response.data)
        this.setState({comentarios: response.data})
    }
    
    render(){

        const {comentarios} = this.state
        console.log(comentarios)

        return(
            <div>
                <div className='container'>
                    <h1>Contato</h1>
                    <div>
                        <form method="post" action="http://localhost:3001/">
                            <label>Nome</label><br></br>
                            <input type="text" name="nome" placeholder="Nome completo"/><br></br>
                            <label>Mensagem</label><br></br>
                            <input type="text" name="msg" placeholder="Digite sua mensagem"/><br></br>
                            <input type="submit" name="submit" />
                        </form>
                    </div>
                </div>

                <div className="container mt-5">
                    <h2>Comentários</h2>

                    <ul>
                        {comentarios.map(comentario => (
                       
                        <li key={comentario._id}>
                            Nome: {comentario.nome}<br></br>
                            Mensagem: {comentario.msg}
                            <hr/>
                        </li>

                        ))}
                    </ul>
                </div>
            


            </div>
        )
    }
}

export default Contato;