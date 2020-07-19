import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';
import CustomerContainer from './containers/CustomerContainer';
import CustomerNewContainer from './containers/CustomerNewContainer';

class App extends Component {

  //Funciones de renderizacion, correspondientes a los 4 componentes que tendremos
  renderHome = () => <h1>Home</h1>;

  renderCustomerContainer = () => <h1>Customer Container</h1>;

  renderCustomerListContainer = () => <h1>Customer List Container</h1>;

  renderCustomerNewContainer = () => <h1>Customer New Container</h1>;


  render() {
    return (
      <Router>
        <div className="App">
          {/* en Switch hay que poner la ruta más especifica primero */}
          <Switch>
            <Route path="/customers/new" component={CustomerNewContainer}/>
            <Route path="/customers/:rut" 
              render={props => <CustomerContainer rut={props.match.params.rut}/>}
            />
            <Route path="/customers" component={CustomersContainer}/>
            <Route path="/" component={HomeContainer}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;