import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustomerListItem';

const CustomersList = ({ customers, urlPath }) => {
    return (
        <div className="customers-list">
            {
                customers.map( c => 
                    <CustomerListItem
                        key={c.rut}
                        name={c.name}
                        rut={c.rut}
                        editAction={'Editar'}
                        delAction={'Eliminar'}
                        urlPath={urlPath}
                    />)
            }
        </div>
    )
}

CustomersList.propTypes = {
    customers: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
}

export default CustomersList;

