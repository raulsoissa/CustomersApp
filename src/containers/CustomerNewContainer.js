import React, { Component } from 'react';
//import PropTypes from 'prop-types'
import AppFrame from '../components/AppFrame';
import CustomerEdit from '../components/CustomerEdit';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class CustomerNewContainer extends Component {
    handleSubmit = () => {

    }

    handleOnSubmitSuccess = () => {

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

// CustomerNewContainer.propTypes = {

// }

export default  withRouter(connect(null, null)(CustomerNewContainer));