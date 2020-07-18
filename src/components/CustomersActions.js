import React from 'react';
import PropTypes from 'prop-types';

const CustomersActions = ({ children }) => {
    return (
        <div className="">
            <div className="customers-actions">
                {children}
            </div>
        </div>
    )
}

CustomersActions.propTypes = {
    children: PropTypes.node.isRequired,
}

export default CustomersActions;

