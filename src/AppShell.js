import {React, lazy, Suspense} from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Produtos from './pages/produtos';
import Lojas from './pages/lojas';
import Pedidos from './pages/Pedidos';
import Contato from './pages/contato';
import Tabela from './componentes/Tabela'
import './App.css';

const Navbar = lazy(()=> import('./componentes/navbar/Navbar'));
const Footer = lazy(()=> import('./componentes/Footer/Footer'))

function AppShell() {
  return (
    <div className="App">
      <header>
        <Suspense fallback={"Carregando!"}>
          <Navbar/>
        </Suspense>
        
      </header>
      <main>
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route path="/produtos" component={Tabela}/>
          <Route path="/lojas" component={Lojas}/>
          <Route path="/contato" component={Contato}/>
          <Route path="/pedidos" component={Pedidos}/>
        </Switch>
      </main>

      <footer>
        <Suspense fallback={"Carregando"}>
          <Footer/>
        </Suspense>
        
      </footer>
      
    </div>
  );
}

export default AppShell;
