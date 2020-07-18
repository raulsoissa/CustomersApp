import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustomerListItem';

const CustomersList = ({ customers }) => {
    return (
        <div className="customers-list">
            {
                customers.map( c => 
                    <CustomerListItem
                        key={c.rut}
                        customer={c.name}
                        editAction={'Editar'}
                        delAction={'Eliminar'}
                        urlPath={c.urlPath}
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

