import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import CustomersList from '../components/CustomersList';
import CustomersActions from '../components/CustomersActions';
import { fetchCustomers } from '../actions/fetchCustomers';
import { getCustomers } from '../selectors/customers';

class CustomersContainer extends Component {
    
    componentDidMount() {    
        this.props.fetchCustomers();
        
    }
    

    handleAddNew = () => {
        this.props.history.push('/customers/new');
    }
    
    renderBody = (customers) => (
        <div className="">
            <CustomersList 
                customers={customers} 
                urlPath={'customers/'}
            />  
            <CustomersActions>
                <button onClick={this.handleAddNew}>Agregar</button>
            </CustomersActions>
        </div>
    );

    render() {
        return (
            <div className="">
                <AppFrame
                    header={'Listado de Clientes'}
                    body={this.renderBody(this.props.customers)}
                >

                </AppFrame>
            </div>
        )
    }
}

CustomersContainer.propTypes = {
    fetchCustomers: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired,
};

CustomersContainer.defaultProps = {
    customers: [ ]
}

const mapStateToProps = state => ({
    customers: getCustomers(state)
});

export default withRouter(connect(mapStateToProps, { fetchCustomers })(CustomersContainer));