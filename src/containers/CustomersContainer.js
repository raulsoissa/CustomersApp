import React, { Component } from 'react'
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import CustomersList from '../components/CustomersList';
import CustomersActions from '../components/CustomersActions';

const customers = [
    {
        "rut": "20200489-k",
        "name": "Raúl Soissa",
        "age": 21
    },
    {
        "rut": "11289793-3",
        "name": "Elsa Rodríguez",
        "age": 51
    },
    {
        "rut": "27000000-5",
        "name": "Juan Perez",
        "age": 45
    }
];

class CustomersContainer extends Component {
    
    renderBody = (customers) => (
        <div className="">
            <CustomersList 
                customers={customers} 
                urlPath={'customer/'}
            />  
            <CustomersActions>
                <button onClick={this.handleAddNew}>Agregar</button>
            </CustomersActions>
        </div>
    );

    handleAddNew = () => {}

    render() {
        return (
            <div className="">
                <AppFrame
                    header={'Listado de Clientes'}
                    body={this.renderBody(customers)}
                >

                </AppFrame>
            </div>
        )
    }
}

// CustomersContainer.propTypes = {
//     prop: PropTypes
// }

export default CustomersContainer;