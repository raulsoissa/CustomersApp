import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form';
//import { connect } from 'react-redux'
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import CustomersActions from '../components/CustomersActions'
import { Prompt } from 'react-router-dom';


const validate = values => {
    const error = {};

    if (!values.name) {
        error.name = "El campo nombre es requerido";
    }
    if (!values.rut) {
        error.rut = "El campo rut es requerido";
    }
    if (!values.age) {
        error.age = "El campo edad es requerido";
    }
    return error;
}

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

const toNumber = value => value && Number(value);
const toUpper = value => toUpper && value.toUpperCase(); 
const toLower = value => value && value.toLowerCase();

const CustomerEdit = ({handleSubmit, submitting, onBack, pristine, submitSucceeded}) => {
    return (
        <div className="">
            <h2>Edición del Cliente</h2>
            <form onSubmit={handleSubmit}>
                <Field 
                    name="name"    
                    component={MyField}
                    label="Nombre"
                    parse={toUpper}
                    format={toLower}>
                </Field>
            
                <Field 
                    name="rut" 
                    component={MyField} 
                    label="Rut"
                    parse={toUpper}
                    format={toLower}>
                </Field>
                
                <Field 
                    name="age" 
                    component={MyField} 
                    type="number" 
                    validate={isNumber}
                    label="Edad"
                    parse={toNumber}>
                </Field>
                <CustomersActions>
                    <button type="submit" disabled={pristine || submitting}>Aceptar</button>
                    <button type="button" disabled={submitting} onClick={onBack}>Cancelar</button>
                </CustomersActions>
                <Prompt
                    when={!pristine && !submitSucceeded}
                    message="Se perderán los datos si continúa">

                    </Prompt>
            </form>
        </div>
    )
}

CustomerEdit.propTypes = {
    name: PropTypes.string,
    rut: PropTypes.string,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
}

const CustomerEditForm = reduxForm({ form: 'CustomerEdit', validate })(CustomerEdit)

export default setPropsAsInitial(CustomerEditForm);

