import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';
import { withRouter } from 'react-router-dom';
import {insertCustomer} from '../actions/insertCustomer';
import AppFrame from '../components/AppFrame';
import CustomerEdit from '../components/CustomerEdit';


class CustomerNewContainer extends Component {
    handleSubmit = (values) => {
        return this.props.insertCustomer(values).then( r => {
            if (r.error) {
                throw new SubmissionError(r.payload);
            }
        });
    }

    handleOnSubmitSuccess = (values) => {
        this.props.history.goBack();        
    }

    handleOnBack = () => {
        this.props.history.goBack();
    }

    renderBody = () => {
        return <CustomerEdit onSubmit={this.handleSubmit}
                            onSubmitSuccess={this.handleOnSubmitSuccess}
                            onBack={this.handleOnBack}/>
    }

    render() {
        return (
            <div className="">
                <AppFrame
                    header={'Agregar Cliente'}
                    body={this.renderBody()}
                    />
            </div>
        )
    }
}

CustomerNewContainer.propTypes = {
    insertCustomer: PropTypes.func.isRequired,
}

export default  withRouter(connect(null, { insertCustomer })(CustomerNewContainer));