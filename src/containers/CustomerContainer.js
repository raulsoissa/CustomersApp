import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import { getCustomerByRut } from '../selectors/customers';
import { Route } from 'react-router-dom';

class CustomerContainer extends Component {

    renderBody = () => (
        <Route path="/customers/:rut/edit" children={
            ({ match }) => (match ? <p>Es edición</p> : <p>No es edición</p> )
        }/>
    )

    // <p>Datos del Cliente "{this.props.customer.name}"</p>

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
    customer: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
    customer: getCustomerByRut(state, props)
});

export default connect(mapStateToProps, null)(CustomerContainer);