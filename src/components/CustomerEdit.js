import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form';
//import { connect } from 'react-redux'
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';

const isRequired = value => (
    !value && "Este campo es requerido"
);

const MyField = ({input, meta}) => (
    <div className="">
        <input {...input} type="text"/>
        {
            meta.touched && meta.error && <span>{meta.error}</span>
        }
    </div>
);

const CustomerEdit = ({ name, rut, age}) => {
    return (
        <div className="">
            <h2>Edición del Componente</h2>
            <form action="">
                <div>
                    <label htmlFor="name">Nombre</label>
                    <Field name="name" component={MyField} type="text" validate={isRequired}></Field>
                </div>
                <div>
                    <label htmlFor="rut">Rut</label>
                    <Field name="rut" component="input" type="text" validate={isRequired}></Field>
                </div>
                <div>
                    <label htmlFor="age">Edad</label>
                    <Field name="age" component="input" type="number" validate={isRequired}></Field>
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

const CustomerEditForm = reduxForm({ form: 'CustomerEdit' })(CustomerEdit)

export default setPropsAsInitial(CustomerEditForm);

