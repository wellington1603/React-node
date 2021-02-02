import React from 'react';
import Tabela from '../componentes/Tabela'

class Produtos extends React.Component{

    render(){
        return(
          <div>
              <Tabela arrayprodutos={this.state.db}/>
        </div>
        );
    }
}
export default Produtos;