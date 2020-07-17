import React from 'react'
import PropTypes from 'prop-types'

const CustomerData = ({name, rut, age}) => {
    return (
        <div className="customer-data">
            <h2>Datos Cliente</h2>
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
    )
}

CustomerData.propTypes = {

}

export default CustomerData

