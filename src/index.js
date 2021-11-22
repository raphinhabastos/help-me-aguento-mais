import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";


import './styles.css'

import Pedido from "./CArRiNHO1/comunicacaoComps/finalizacaoPedido/pedido";
import ConclusaoPedido from "./CArRiNHO1/comunicacaoComps/finalizacaoPedido/conclusao";


import Contador from "./CArRiNHO1/comunicacaoComps/contador";


//import App from "./infoA/destiny";
//import App from "./infoB/amaze";
import App from './CArRiNHO1/casa'
import DetalheProduto from './CArRiNHO1/detalheProduto'
import Carrinho from './CArRiNHO1/carrinho'




const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/detalhe" component={DetalheProduto} />
        <Route path="/carrinho" component={Carrinho} />
        <Route path="/infoX/contador" exact={true} component={Contador} />
        <Route path="/infoX/pedido" component={Pedido} />
        <Route path="/infoX/conclusao" component={ConclusaoPedido} />

      </Switch>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
