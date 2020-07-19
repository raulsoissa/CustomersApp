import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form';

const CustomerEdit = ({ name, rut, age}) => {
    return (
        <div className="">
            <h2>Edición del Componente</h2>
            <h3>Nombre: {name} / Rut: {rut} / Edad: {age}</h3>
        </div>
    )
}

CustomerEdit.propTypes = {
    name: PropTypes.string,
    rut: PropTypes.string,
    age: PropTypes.number,
}

export default reduxForm({ form: 'CustomerEdit' })(CustomerEdit);

