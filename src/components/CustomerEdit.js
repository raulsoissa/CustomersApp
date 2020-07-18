import React from 'react'
import PropTypes from 'prop-types'

const CustomerEdit = ({ name, rut, age}) => {
    return (
        <div className="">
            <h2>Edición del Componente</h2>
            <h3>Nombre: {name} /Rut: {rut} /Edad: {age}</h3>
        </div>
    )
}

CustomerEdit.propTypes = {
    name: PropTypes.string.isRequired,
    rut: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
}

export default CustomerEdit

