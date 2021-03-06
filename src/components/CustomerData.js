import React from 'react';
import PropTypes from 'prop-types';
import CustomersActions from './CustomersActions';

const CustomerData = ({name, rut, age, onBack, isDeleteAllow, onDelete}) => {
    return (
        <div className="">
            <div className="customer-data">
                <h2>Datos del Cliente</h2>
                <div className="">
                    <strong>Nombre</strong>
                    <i>{name}</i>
                </div>
                <div className="">
                    <strong>Rut</strong>
                    <i>{rut}</i>
                </div>
                <div className="">
                    <strong>Edad</strong>
                    <i>{age}</i>
                </div>
            </div>
            <CustomersActions>
            <button onClick={onBack}>Volver</button>
                {isDeleteAllow && <button onClick={onDelete}>Eliminar</button>}
            </CustomersActions>
        </div>
    )
}

CustomerData.propTypes = {
    name: PropTypes.string.isRequired,
    rut: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    onBack: PropTypes.func.isRequired,
    idDeleteAllow: PropTypes.bool,
    onDelete: PropTypes.func,
}

export default CustomerData;

