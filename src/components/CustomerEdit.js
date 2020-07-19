import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form';
//import { connect } from 'react-redux'
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';

const isRequired = value => (
    !value && "Este campo es requerido"
);

const isNumber = value => (
    isNaN(Number(value)) && "El campo debe ser un número"
);

const MyField = ({input, meta, type, label, name}) => (
    <div className="">
        <label htmlFor={name}>{label}</label>
        <input {...input} type={!type ? "text" : type}/>
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
                <Field 
                    name="name"    
                    component={MyField} 
                    type="text" 
                    validate={isRequired}
                    label="Nombre">
                </Field>
            
                <Field 
                    name="rut" 
                    component={MyField} 
                    type="text" 
                    validate={isRequired}
                    label="Rut">
                </Field>
                
                <Field 
                    name="age" 
                    component={MyField} 
                    type="number" 
                    validate={[isNumber, isRequired]}
                    label="Edad">
                </Field>
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

