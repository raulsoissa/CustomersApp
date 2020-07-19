import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';
import PropTypes from 'prop-types';
import { Route, withRouter } from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import { getCustomerByRut } from '../selectors/customers';
import CustomerEdit from '../components/CustomerEdit';
import CustomerData from '../components/CustomerData';
import { fetchCustomers } from '../actions/fetchCustomers';
import { updateCustomer } from '../actions/UpdateCustomer';



class CustomerContainer extends Component {

    componentDidMount() {
        if (!this.props.customer) {
            this.props.fetchCustomers();
        }
    }
    

    handleSubmit = values => {
        console.log(JSON.stringify(values));
        const { id } = values;
        return this.props.updateCustomer(id, values).then( r => {
            if (r.error) {
                throw new SubmissionError(r.payload);
            }
        });
    }

    handleOnBack = () => {
        this.props.history.goBack();
    }

    handleOnSubmitSuccess = () => {
        this.props.history.goBack();
    }

    renderBody = () => (
        <Route path="/customers/:rut/edit" children={
            ({ match }) => {
                if (this.props.customer) {
                        const CustomerControl = match ? CustomerEdit : CustomerData;
                        return <CustomerControl {...this.props.customer} 
                            onSubmit={this.handleSubmit}
                            onSubmitSuccess={this.handleOnSubmitSuccess} 
                            onBack={this.handleOnBack}/>
                }
                return null;
            }
        }/>
    );

    render() {
        return (
            <div className="">
                <AppFrame
                    header={`Cliente ${this.props.rut}`}
                    body={this.renderBody()}
                />
            </div>
        )
    }
}

CustomerContainer.propTypes = {
    rut: PropTypes.string.isRequired,
    customer: PropTypes.object,
    fetchCustomers: PropTypes.func.isRequired,
    updateCustomer: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
    customer: getCustomerByRut(state, props)
});

export default withRouter(connect(mapStateToProps, {
    fetchCustomers,
    updateCustomer
})(CustomerContainer));