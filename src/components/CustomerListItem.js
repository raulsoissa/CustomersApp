import React from 'react';
import PropTypes from 'prop-types';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const CustomerListItem = ({ name, rut, editAction, delAction, urlPath}) => {
    return (
        <div className="customers-list-item">
            <div className="field">
                <Link to={`${urlPath}${rut}`}>{name}</Link>
            </div>
            <div className="field">
                <Link to={`${urlPath}${rut}/edit`}>{editAction}</Link>
            </div>
            <div className="field">
                <Link to={`${urlPath}${rut}/del`}>{delAction}</Link>
            </div>
        </div>
    )
}

CustomerListItem.propTypes = {
    name: PropTypes.string.isRequired,
    editAction: PropTypes.string.isRequired,
    delAction: PropTypes.string.isRequired,
    urlPath: PropTypes.string.isRequired,
}

export default CustomerListItem;

