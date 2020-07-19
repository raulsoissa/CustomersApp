import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form';

const CustomerEdit = ({ name, rut, age}) => {
    return (
        <div className="">
            <h2>Edición del Componente</h2>
            <form action="">
                <div>
                    <label htmlFor="name">Nombre</label>
                    <Field name="name" component="input" type="text"></Field>
                </div>
                <div>
                    <label htmlFor="rut">Rut</label>
                    <Field name="rut" component="input" type="text"></Field>
                </div>
                <div>
                    <label htmlFor="age">Edad</label>
                    <Field name="age" component="input" type="number"></Field>
                </div>
            </form>
        </div>
    )
}

CustomerEdit.propTypes = {
    name: PropTypes.string,
    rut: PropTypes.string,
    age: PropTypes.number,
}

export default reduxForm({ form: 'CustomerEdit' })(CustomerEdit);

