import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';

class CustomerContainer extends Component {
    render() {
        return (
            <div className="">
                <AppFrame
                    header={`Cliente ${this.props.rut}`}
                    body={
                        <p>Datos del Cliente</p>
                    }
                />
            </div>
        )
    }
}

CustomerContainer.propTypes = {
    rut: PropTypes.string.isRequired,
};

export default connect(null, null)(CustomerContainer);