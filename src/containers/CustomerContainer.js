import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import { getCustomerByRut } from '../selectors/customers';

class CustomerContainer extends Component {
    render() {
        return (
            <div className="">
                <AppFrame
                    header={`Cliente ${this.props.rut}`}
                    body={
                        <p>Datos del Cliente "{this.props.customer.name}"</p>
                    }
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